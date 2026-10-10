import snapshot from '../data/cms-snapshot.json';

export { snapshot };

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
