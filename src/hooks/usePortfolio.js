import { useEffect, useState } from 'react';
import { getPublicImageUrl, supabase } from '../lib/supabase';

function asRelation(value) {
  return Array.isArray(value) ? value[0] || null : value;
}

function asList(value) {
  return (value || [])
    .split(/\r?\n/)
    .map((line) => line.trim().replace(/^[-*\u2022]\s*/, ''))
    .filter(Boolean);
}

export default function usePortfolio() {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadPortfolio() {
      const [categoriesResult, projectsResult] = await Promise.all([
        supabase
          .from('portfolio_categories')
          .select('id, name, created_at')
          .order('name', { ascending: true }),
        supabase
          .from('portfolios')
          .select(`
            id, title, description, main_image_path, client, location, area,
            category_id, challenges, solutions, ending_image_path, created_at,
            category:portfolio_categories(id, name),
            images:portfolio_images(id, image_path, position)
          `)
          .order('created_at', { ascending: false }),
      ]);

      if (!active) return;

      if (categoriesResult.error) {
        console.error('Could not load portfolio categories:', categoriesResult.error.message);
      } else {
        setCategories(categoriesResult.data || []);
      }

      if (projectsResult.error) {
        console.error('Could not load portfolio projects:', projectsResult.error.message);
        setLoading(false);
        return;
      }

      setProjects(
        (projectsResult.data || []).map((project) => {
          const category = asRelation(project.category);
          const gallery = [...(project.images || [])].sort(
            (a, b) => a.position - b.position,
          );

          return {
            id: project.id,
            title: project.title,
            sub1: category?.name || '',
            sub2: '',
            desc: project.description,
            img: getPublicImageUrl('portfolio-images', project.main_image_path),
            client: project.client,
            location: project.location,
            area: project.area,
            categoryId: project.category_id,
            images: gallery.map((image) =>
              getPublicImageUrl('portfolio-images', image.image_path),
            ),
            challenges: asList(project.challenges),
            solutions: asList(project.solutions),
            endingImage: getPublicImageUrl(
              'portfolio-images',
              project.ending_image_path,
            ),
          };
        }),
      );
      setLoading(false);
    }

    loadPortfolio();

    return () => {
      active = false;
    };
  }, []);

  return { categories, projects, loading };
}
