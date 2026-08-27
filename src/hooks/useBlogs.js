import { useEffect, useState } from 'react';
import { snapshot, shouldUseSnapshot } from '../lib/cmsFallback';
import { getPublicImageUrl, supabase } from '../lib/supabase';

function asRelation(value) {
  return Array.isArray(value) ? value[0] || null : value;
}

function formatBlogDate(value) {
  const date = new Date(value);

  return {
    history: new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(date),
    num: String(date.getDate()).padStart(2, '0'),
    month: new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date),
    year: String(date.getFullYear()),
  };
}

export default function useBlogs() {
  const [categories, setCategories] = useState(snapshot.blogCategories);
  const [blogs, setBlogs] = useState(snapshot.blogs);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadBlogs() {
      const [categoriesResult, blogsResult] = await Promise.all([
        supabase
          .from('blog_categories')
          .select('id, name, created_at')
          .order('name', { ascending: true }),
        supabase
          .from('blogs')
          .select(`
            id, title, slug, description, main_image_path, article,
            category_id, created_at,
            category:blog_categories(id, name)
          `)
          .order('created_at', { ascending: false }),
      ]);

      if (!active) return;

      if (shouldUseSnapshot(categoriesResult) || shouldUseSnapshot(blogsResult)) {
        setCategories(snapshot.blogCategories);
        setBlogs(snapshot.blogs);
        setLoading(false);
        return;
      }

      if (categoriesResult.error) {
        console.error('Could not load blog categories:', categoriesResult.error.message);
        setCategories(snapshot.blogCategories);
      } else {
        setCategories(categoriesResult.data || []);
      }

      if (blogsResult.error) {
        console.error('Could not load blogs:', blogsResult.error.message);
        setBlogs(snapshot.blogs);
        setLoading(false);
        return;
      }

      setBlogs(
        (blogsResult.data || []).map((blog) => {
          const category = asRelation(blog.category);
          const imageUrl = getPublicImageUrl('blog-images', blog.main_image_path);

          return {
            id: blog.id,
            title: blog.title,
            slug: blog.slug,
            description: blog.description,
            content: blog.article,
            article: blog.article,
            img: imageUrl,
            coverImage: imageUrl,
            subTitle: category?.name || '',
            categoryId: blog.category_id,
            ...formatBlogDate(blog.created_at),
          };
        }),
      );
      setLoading(false);
    }

    loadBlogs();

    return () => {
      active = false;
    };
  }, []);

  return { categories, blogs, loading };
}
