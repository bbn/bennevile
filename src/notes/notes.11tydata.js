export default {
  layout: "note.njk",
  tags: ["notes"],
  isPost: true,
  eleventyComputed: {
    permalink: (data) => `/notes/${data.page.fileSlug}/`,
    structuredData: (data) => ({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: data.title, description: data.description,
      url: new URL(data.page.url, data.site.url).href,
      datePublished: data.page.date.toISOString(),
      author: { "@type": "Person", name: data.site.title },
      ...(data.source ? { citation: data.source.url } : {}),
    }),
  },
};
