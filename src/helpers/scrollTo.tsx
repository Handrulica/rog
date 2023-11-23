export const scrollTo = (id: string) => {
  console.log(id);
  const element = window.document.getElementById(id);
  console.log(element);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
    });
  }
};
