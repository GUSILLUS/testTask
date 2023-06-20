export const idGenerate = () => {
  const split = crypto.randomUUID().split('');
  const filter = split.join('').replace(/[^\d]/g, '');

  return +filter;
};
