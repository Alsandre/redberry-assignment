export const countWords = (value: string) => {
  const wordCount = value.trim().split(/\s+/).length;
  return wordCount;
};
