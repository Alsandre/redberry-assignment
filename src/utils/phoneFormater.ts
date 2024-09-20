export const phoneFormater = (phone: string) => {
  const numToStr = phone.toString();
  return numToStr.replace(/(\d{3})(?=\d)/g, "$1 ");
};
