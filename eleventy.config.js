const dateFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.setNunjucksEnvironmentOptions({ autoescape: true });
  eleventyConfig.addFilter("readableDate", (date) => dateFormatter.format(new Date(date)));
  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString());
  eleventyConfig.addFilter("rssDate", (date) => new Date(date).toUTCString());
  eleventyConfig.addFilter("absoluteUrl", (path, base) => new URL(path, base).href);
  eleventyConfig.addFilter("json", (value) => JSON.stringify(value).replace(/</g, "\\u003c"));
  eleventyConfig.addFilter("hostname", (url) => {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  });

  eleventyConfig.addCollection("notes", (api) => api.getFilteredByTag("notes").sort((a, b) => b.date - a.date));
  eleventyConfig.addFilter("byProject", (notes, slug) => notes.filter((n) => n.data.project === slug));
  eleventyConfig.addFilter("byKind", (notes, kind) => notes.filter((n) => (kind === "editorial") === (n.data.kind === "editorial")));
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));
  eleventyConfig.addFilter("projectBySlug", (projects, slug) => projects.find((p) => p.slug === slug));

  return {
    dir: { input: "src", output: "_site" },
    templateFormats: ["md", "njk"],
    // Code examples containing template syntax should remain literal Markdown.
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
