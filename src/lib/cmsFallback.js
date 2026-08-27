import snapshot from '../data/cms-snapshot.json';

export { snapshot };

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
