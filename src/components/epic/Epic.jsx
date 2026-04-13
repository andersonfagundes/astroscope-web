import { useEffect, useState } from 'react';
import { getEpic } from '../../services/epic.service.js';

const EPIC_ARCHIVE = 'https://epic.gsfc.nasa.gov/archive/natural';

function epicPngUrl(item) {
  const raw = item.date ?? '';
  const ymd = raw.split(' ')[0] ?? '';
  const [y, m, d] = ymd.split('-');
  if (!y || !m || !d || !item.image) return null;
  return `${EPIC_ARCHIVE}/${y}/${m}/${d}/png/${item.image}.png`;
}

function Epic() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ac = new AbortController();
    getEpic(undefined, { signal: ac.signal })
      .then((payload) => {
        setItems(Array.isArray(payload) ? payload : []);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Failed to load EPIC');
        }
      })
      .finally(() => {
        if (!ac.signal.aborted) setLoading(false);
      });
    return () => ac.abort();
  }, []);

  if (loading) {
    return (
      <section className="py-10 text-center">
        <p>Loading EPIC…</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="epic" className="py-10 text-center text-red-500">
        <p>{error}</p>
      </section>
    );
  }

  if (!items || items.length === 0) {
    return (
      <section
        id="epic"
        className="py-10 text-center text-slate-600 dark:text-slate-400"
      >
        <p>No EPIC imagery metadata available.</p>
      </section>
    );
  }

  const preview = items.slice(0, 12);

  return (
    <section
      id="epic"
      className="border-t border-slate-200 py-12 lg:py-16 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="gradient-text text-sm font-semibold uppercase tracking-wider">
            NASA EPIC
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
            Earth Polychromatic Imaging Camera
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Imagens em cor natural do DSCOVR (últimas disponíveis na API). Cada
            cartão mostra legenda, data/hora e o ponto na Terra mais próximo do
            centro do disco (centroid).
          </p>
        </div>

        <ul className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {preview.map((item) => {
            const src = epicPngUrl(item);
            const lat = item.centroid_coordinates?.lat;
            const lon = item.centroid_coordinates?.lon;

            return (
              <li
                key={item.identifier ?? item.image}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                {src ? (
                  <img
                    src={src}
                    alt={item.caption || 'EPIC Earth view'}
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex aspect-square items-center justify-center bg-slate-200/80 text-sm text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    Image URL unavailable
                  </div>
                )}
                <div className="space-y-2 p-5">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.date}
                    {item.identifier ? ` · ${item.identifier}` : ''}
                  </p>
                  <p className="text-sm font-medium leading-snug text-slate-900 dark:text-slate-100">
                    {item.caption}
                  </p>
                  {lat != null && lon != null && (
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Centroid: {lat.toFixed(2)}°, {lon.toFixed(2)}°
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        {items.length > preview.length && (
          <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
            Showing {preview.length} of {items.length} images from this
            response.
          </p>
        )}
      </div>
    </section>
  );
}

export default Epic;
