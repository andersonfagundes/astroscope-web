const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5000/api/v1';

export async function apiGet(endpoint, init) {
  const res = await fetch(API_URL + endpoint, init);

  if (!res.ok) {
    const errorText = await res.text();

    throw new Error(`API error ${res.status}: ${errorText}`);
  }

  return res.json();
}
