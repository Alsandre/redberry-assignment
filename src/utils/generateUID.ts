export const generateUID = () => {
  return `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};
