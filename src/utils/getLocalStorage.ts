export const getLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};
