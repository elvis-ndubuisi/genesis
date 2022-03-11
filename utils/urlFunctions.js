const urlConstructor = (baseUrl, paramObject) => {
  const queryParams = new URLSearchParams(paramObject);
  const urlString = `${baseUrl}?${queryParams.toString()}`;
  return urlString;
};

module.exports = { urlConstructor };
