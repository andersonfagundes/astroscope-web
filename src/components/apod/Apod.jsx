import { useEffect, useState } from 'react';
import { getApod } from '../../services/apod.service.js';

function Apod() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ac = new AbortController();
    getApod(undefined, { signal: ac.signal })
      .then(setData)
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Failed to load APOD');
        }
      })
      .finally(() => {
        if (!ac.signal.aborted) setLoading(false);
      });
    return () => ac.abort();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="py-10 text-center">
        <p>Loading APOD...</p>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="py-10 text-center text-red-500">
        <p>{error}</p>
      </section>
    );
  }

  // No data fallback
  if (!data) {
    return (
      <section className="py-10 text-center text-slate-600 dark:text-slate-400">
        <p>No APOD data available.</p>
      </section>
    );
  }

  const imageSrc = data.hdurl || data.url;

  return (
    <section id="apod" className="py-10 lg:py-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-20 lg:px-6">
        <div>
          <p className="gradient-text text-sm font-semibold uppercase tracking-wider">
            NASA APOD
          </p>

          {data.date && (
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {data.date.split('-').reverse().join('/')}
            </p>
          )}

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
            {data.title}
          </h2>

          {data.explanation && (
            <p className="mt-6 text-slate-600 dark:text-slate-400">
              {data.explanation}
            </p>
          )}
        </div>

        <div className="flex justify-center lg:justify-end">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={data.title || 'NASA APOD'}
              className="max-h-[400px] rounded-2xl object-cover shadow-2xl"
            />
          ) : (
            <p className="text-slate-500 dark:text-slate-400">
              No media available for this entry.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Apod;
