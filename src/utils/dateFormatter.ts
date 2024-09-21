export const dateFormatter = (date: string): string => {
  const dateObj = new Date(date);
  const day = String(dateObj.getUTCDate()).padStart(2, "0");
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
  const year = String(dateObj.getUTCFullYear()).slice(-2);

  const dateToStr = `${day}/${month}/${year}`;
  return dateToStr;
};
