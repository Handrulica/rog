const getImageUrl = (filePath: string) => {
  return new URL(filePath, import.meta.url).href;
};

export default getImageUrl;
