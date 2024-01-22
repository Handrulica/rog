const getImageUrl = (filePath: string) => {
  return new URL("/assets/" + filePath, import.meta.url).href;
};

export default getImageUrl;