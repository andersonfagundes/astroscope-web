import { apiGet } from './api';

export const getEpic = (date, init) =>
  apiGet(`/epic${date ? `?date=${encodeURIComponent(date)}` : ''}`, init);
