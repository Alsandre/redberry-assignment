export const clearLocalStorage = (key: string) => {
  const isValidKey = localStorage.getItem(key);
  if (isValidKey) {
    localStorage.removeItem(key);
    return true;
  }
  return false;
};
