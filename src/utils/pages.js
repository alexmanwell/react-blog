export const getCountPage = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};