const getImageUrl = (filePath: string) => {
  return new URL("https://pub-cdc55c2c095d4253b7465eaf974b49e6.r2.dev/" + filePath, import.meta.url).href;
};

export default getImageUrl;