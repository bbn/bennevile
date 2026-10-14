const url = new URL(process.env.SITE_URL || "https://bennevile.vercel.app");
export default {
  title: "Ben Nevile",
  description: "Projects, notes and editorials from Ben Nevile.",
  bio: "I'm Ben Nevile. I've launched many businesses and software platforms, and I'm based in Montréal.",
  language: "en",
  url: url.origin,
  indexable: process.env.VERCEL_ENV === "production",
};
