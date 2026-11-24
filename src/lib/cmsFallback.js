import snapshot from '../data/cms-snapshot.json';

export { snapshot };

/*
 * CMS data saved into each pre-rendered page (window.__SEECA_CMS__).
 * The pre-render loads the live CMS content and writes it into the HTML, so the browser's
 * first render uses exactly the same data as the saved page: nothing swaps or jumps when
 * the live data arrives a moment later.
 *
 * To keep pages small, only rows that differ from the bundled snapshot are saved, plus the
 * order of ids: { ids: [...], rows: { id: row } }.
 */
const SNAPSHOT_KEYS = {
  projects: 'projects',
  portfolioCategories: 'portfolioCategories',
  blogs: 'blogs',
  blogCategories: 'blogCategories',
  partners: 'partners',
  reviews: 'reviews',
};

const builtCms =
  typeof window !== 'undefined' && window.__SEECA_CMS__ && typeof window.__SEECA_CMS__ === 'object'
    ? window.__SEECA_CMS__
    : {};

function snapshotById(key) {
  const list = snapshot[SNAPSHOT_KEYS[key]] || [];
  return new Map(list.map((item) => [item.id, item]));
}

/** Data for `key` saved in this page at build time, or `fallback` (the bundled snapshot). */
export function initialCms(key, fallback) {
  const saved = builtCms[key];
  if (!saved || !Array.isArray(saved.ids)) return fallback;
  const base = snapshotById(key);
  const rows = saved.rows || {};
  const list = saved.ids.map((id) => rows[id] || base.get(id)).filter(Boolean);
  return list.length === saved.ids.length ? list : fallback;
}

/** During pre-render, remember the data each hook ended up showing, to save it into the page. */
export function rememberCms(key, value) {
  if (typeof window === 'undefined' || !window.__PRERENDER__ || !Array.isArray(value)) return;
  const base = snapshotById(key);
  const rows = {};
  value.forEach((item) => {
    const original = base.get(item.id);
    if (!original || JSON.stringify(original) !== JSON.stringify(item)) rows[item.id] = item;
  });
  window.__SEECA_CMS_CAPTURE__ = window.__SEECA_CMS_CAPTURE__ || {};
  window.__SEECA_CMS_CAPTURE__[key] = { ids: value.map((item) => item.id), rows };
}

function nameKey(value) {
  return String(value || '').trim().toLowerCase();
}

// Existing content ships in the snapshot; rows from Supabase are added on top of it.
export function mergeWithSnapshot(remote, local, { remoteFirst = false } = {}) {
  const rows = remote || [];
  const remoteById = new Map(rows.map((item) => [item.id, item]));
  const localIds = new Set(local.map((item) => item.id));
  const kept = local.map((item) => remoteById.get(item.id) || item);
  const added = rows.filter((item) => !localIds.has(item.id));

  return remoteFirst ? [...added, ...kept] : [...kept, ...added];
}

// Categories match by name, so a category re-created in Supabase reuses the snapshot one.
export function mergeCategories(remote, local) {
  const names = new Set(local.map((category) => nameKey(category.name)));
  const added = (remote || []).filter((category) => {
    const key = nameKey(category.name);
    if (names.has(key)) return false;
    names.add(key);
    return true;
  });

  return [...local, ...added].sort((a, b) => a.name.localeCompare(b.name));
}

export function categoryIdByName(categories, name, fallbackId) {
  const match = categories.find((category) => nameKey(category.name) === nameKey(name));
  return match ? match.id : fallbackId;
}

export function shouldUseSnapshot(resultOrError) {
  if (!resultOrError) return false;

  const error = resultOrError.error || resultOrError;
  const hasError = Boolean(resultOrError.error) || Boolean(error && (error.message !== undefined || error.code || error.status));
  if (!hasError && resultOrError.status !== 402) return false;

  const status = resultOrError.status || error.status || error.code;
  const message = String(error.message || error.details || '');

  return (
    status === 402 ||
    status === '402' ||
    /restricted|exceed_storage|quota|402/i.test(message) ||
    (Boolean(resultOrError.error) && !message)
  );
}
