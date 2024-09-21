export const dateFormatter = (date: string): string => {
  const dateObj = new Date(date);
  const day = String(dateObj.getUTCDate()).padStart(2, "0"); // Get day and pad with leading zero if needed
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0"); // Get month (0-indexed) and pad
  const year = String(dateObj.getUTCFullYear()).slice(-2); // Get last two digits of the year

  const dateToStr = `${day}/${month}/${year}`;
  return dateToStr;
};
