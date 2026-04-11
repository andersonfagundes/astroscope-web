import { apiGet } from './api';

export const getApod = (date, init) =>
  apiGet(`/apod${date ? `?date=${encodeURIComponent(date)}` : ''}`, init);
