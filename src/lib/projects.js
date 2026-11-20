/**
 * Shared helpers for project pages (used by the app and by scripts/prerender.js).
 * Keep this file free of imports so Node can load it directly.
 */

/** URL-friendly name from a project title, e.g. "Asian Bistro – Islamabad" -> "asian-bistro-islamabad". */
export function slugify(text) {
  return String(text || '')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/g, '');
}

/** Slug for a project; the id is added only if two projects would share a slug. */
export function projectSlug(project, allProjects = []) {
  const base = slugify(project.title) || String(project.id).slice(0, 8);
  const clash = allProjects.some((p) => p.id !== project.id && slugify(p.title) === base);
  return clash ? `${base}-${String(project.id).slice(0, 6)}` : base;
}

export function projectPath(project, allProjects = []) {
  return `/portfolio/${projectSlug(project, allProjects)}`;
}

export function findProjectBySlug(slug, allProjects = []) {
  return (
    allProjects.find((p) => projectSlug(p, allProjects) === slug) ||
    // Earlier addresses of renamed projects (the server also 301-redirects these).
    allProjects.find((p) => (p.previousSlugs || []).includes(slug)) ||
    null
  );
}

/** "Client: Mr. Faraz Ali" / "Project: Fahad Residence" (empty when no real client name). */
export function clientLine(project) {
  const name = String(project.client || '').trim();
  if (!name || /^client$/i.test(name)) return '';
  return `${project.clientLabel || 'Client'}: ${name}`;
}

/**
 * A project page is offered to Google only when it has its own description.
 * Many CMS entries share the same placeholder sentence; publishing dozens of pages
 * with identical text would look like duplicate content. Once a real description
 * (unique, 120+ characters) is added in the CMS, the page becomes indexable.
 */
export function hasOwnDescription(project, allProjects = []) {
  const text = String(project.desc || '').trim();
  if (text.length < 120) return false;
  return allProjects.filter((p) => String(p.desc || '').trim() === text).length <= 1;
}

/** True when a list item (challenge/solution) is shared with other projects, i.e. placeholder text. */
export function isSharedText(value, allProjects = [], field) {
  const key = JSON.stringify(value || []);
  return allProjects.filter((p) => JSON.stringify(p[field] || []) === key).length > 1;
}

/** Best matching service page for a project. */
export function projectService(project) {
  const text = `${project.sub1 || ''} ${project.sub2 || ''} ${project.title || ''}`;
  if (/interior|restaurant|office|fitness|hospitality/i.test(text) && !/architecture/i.test(project.sub2 || '')) {
    return { path: '/interior-design', label: 'Interior Design' };
  }
  return { path: '/architecture', label: 'Architecture' };
}

export function cleanLocation(location) {
  const text = String(location || '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim();
  return /^location$/i.test(text) ? '' : text;
}

export function cleanArea(area) {
  const text = String(area || '').trim();
  return /^(n\/?a|-|)$/i.test(text) ? '' : text;
}
