export const idGenarate = () => {
  const split = crypto.randomUUID().split('');
  const filter = split.join('').replace(/[^\d]/g, '');
  const id = +filter;

  return id;
};
