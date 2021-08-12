export const sortByDate = (a, b) =>
  new Date(b.frontMatter.date) - new Date(a.frontMatter.date);
