export const sortByPrice = (a: string, b: string) => {
  const aValue = parseFloat(a.substring(1));
  const bValue = parseFloat(b.substring(1));
  return aValue - bValue;
};
