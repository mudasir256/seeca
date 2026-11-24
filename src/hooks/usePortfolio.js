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

function asList(value) {
  return (value || '')
    .split(/\r?\n/)
    .map((line) => line.trim().replace(/^[-*\u2022]\s*/, ''))
    .filter(Boolean);
}

/**
 * Newest projects first. CMS rows carry their created date; projects added to the bundled
 * snapshot can carry a `createdAt` too. Projects without a date keep their order, after
 * the dated ones.
 */
function newestFirst(list) {
  return list
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const da = a.item.createdAt || '';
      const db = b.item.createdAt || '';
      if (da && db && da !== db) return db.localeCompare(da);
      if (da && !db) return -1;
      if (!da && db) return 1;
      return a.index - b.index;
    })
    .map(({ item }) => item);
}

export default function usePortfolio() {
  const [categories, setCategories] = useState(() => initialCms('portfolioCategories', snapshot.portfolioCategories));
  const [projects, setProjects] = useState(() => initialCms('projects', newestFirst(snapshot.projects)));
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Pre-render only: record what is shown, so it can be saved into the page.
  useEffect(() => rememberCms('portfolioCategories', categories), [categories]);
  useEffect(() => rememberCms('projects', projects), [projects]);

  useEffect(() => {
    let active = true;

    async function loadPortfolio() {
      try {
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

      if (shouldUseSnapshot(categoriesResult) || shouldUseSnapshot(projectsResult)) {
        setCategories(initialCms('portfolioCategories', snapshot.portfolioCategories));
        setProjects(initialCms('projects', newestFirst(snapshot.projects)));
        setLoading(false);
        setLoaded(true);
        return;
      }

      if (categoriesResult.error) {
        console.error('Could not load portfolio categories:', categoriesResult.error.message);
      }

      const mergedCategories = mergeCategories(
        categoriesResult.error ? [] : categoriesResult.data,
        snapshot.portfolioCategories,
      );
      setCategories(mergedCategories);

      if (projectsResult.error) {
        console.error('Could not load portfolio projects:', projectsResult.error.message);
        setProjects(initialCms('projects', newestFirst(snapshot.projects)));
        setLoading(false);
        setLoaded(true);
        return;
      }

      const remoteProjects = (projectsResult.data || []).map((project) => {
        const category = asRelation(project.category);
        const gallery = [...(project.images || [])].sort(
          (a, b) => a.position - b.position,
        );

        return {
          id: project.id,
          title: project.title,
          createdAt: project.created_at || '',
          sub1: category?.name || '',
          sub2: '',
          // Some CMS entries start with a pasted "Description" label; drop it.
          desc: (project.description || '').replace(/^\s*Description\s*:?\s*/i, ''),
          img: getPublicImageUrl('portfolio-images', project.main_image_path),
          client: project.client,
          location: project.location,
          area: project.area,
          categoryId: categoryIdByName(
            mergedCategories,
            category?.name,
            project.category_id,
          ),
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
      });

      setProjects(
        newestFirst(mergeWithSnapshot(remoteProjects, snapshot.projects, { remoteFirst: true })),
      );
      setLoading(false);
        setLoaded(true);
      } catch (error) {
        if (!active) return;
        console.error('Could not load portfolio projects:', error);
        setCategories(initialCms('portfolioCategories', snapshot.portfolioCategories));
        setProjects(initialCms('projects', newestFirst(snapshot.projects)));
        setLoading(false);
        setLoaded(true);
      }
    }

    loadPortfolio();

    return () => {
      active = false;
    };
  }, []);

  return { categories, projects, loading, loaded };
}
