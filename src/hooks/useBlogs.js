import { useEffect, useState } from 'react';
import {
  categoryIdByName,
  mergeCategories,
  mergeWithSnapshot,
  shouldUseSnapshot,
  initialCms,
  rememberCms,
  snapshot,
} from '../lib/cmsFallback';
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
  const [categories, setCategories] = useState(() => initialCms('blogCategories', snapshot.blogCategories));
  const [blogs, setBlogs] = useState(() => initialCms('blogs', snapshot.blogs));
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Pre-render only: record what is shown, so it can be saved into the page.
  useEffect(() => rememberCms('blogCategories', categories), [categories]);
  useEffect(() => rememberCms('blogs', blogs), [blogs]);

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
        setCategories(initialCms('blogCategories', snapshot.blogCategories));
        setBlogs(initialCms('blogs', snapshot.blogs));
        setLoading(false);
        setLoaded(true);
        return;
      }

      if (categoriesResult.error) {
        console.error('Could not load blog categories:', categoriesResult.error.message);
      }

      const mergedCategories = mergeCategories(
        categoriesResult.error ? [] : categoriesResult.data,
        snapshot.blogCategories,
      );
      setCategories(mergedCategories);

      if (blogsResult.error) {
        console.error('Could not load blogs:', blogsResult.error.message);
        setBlogs(initialCms('blogs', snapshot.blogs));
        setLoading(false);
        setLoaded(true);
        return;
      }

      const remoteBlogs = (blogsResult.data || []).map((blog) => {
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
          categoryId: categoryIdByName(
            mergedCategories,
            category?.name,
            blog.category_id,
          ),
          ...formatBlogDate(blog.created_at),
        };
      });

      setBlogs(mergeWithSnapshot(remoteBlogs, snapshot.blogs, { remoteFirst: true }));
      setLoading(false);
        setLoaded(true);
    }

    loadBlogs().catch((error) => {
      // Network failure: keep the snapshot posts and stop waiting.
      console.error('Could not load blogs:', error?.message || error);
      if (!active) return;
      setBlogs(initialCms('blogs', snapshot.blogs));
      setLoading(false);
      setLoaded(true);
    });

    return () => {
      active = false;
    };
  }, []);

  return { categories, blogs, loading, loaded };
}
