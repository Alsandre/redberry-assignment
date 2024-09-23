export const generateUID = () => {
  return `id-${Date.now()}-${Math.floor(Math.random() * 100000)}-${Math.floor(Math.random() * 100000)}`;
};
