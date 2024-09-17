const MAX_FILE_SIZE = 1024 * 1024;
export const validateFileSize = (file: File) => {
  if (file && file.size > MAX_FILE_SIZE) {
    return `File size should not exceed ${MAX_FILE_SIZE / (1024 * 1024)}MB`;
  }
  return true;
};
