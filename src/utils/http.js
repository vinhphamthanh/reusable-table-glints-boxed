export const generateQueryString = (data, delimiter = '_') => {
  if (typeof data !== 'object' || Object.keys(data).length === 0) return '';

  const query = Object.keys(data).map(key => `${delimiter}${key}=${data[key]}`).join('&');

  return `?${query}`;
};
