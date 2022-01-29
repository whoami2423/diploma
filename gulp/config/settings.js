const isProd = process.argv.includes("build");
const isDev = !isProd;
import * as news from "../data/news-data.js";

export default {
  isProd,

  pug: {
    pretty: isDev,
    data: {
      news,
    },
  },

  fonter: {
    formats: ["ttf", "woff", "eot", "svg"],
  },

  webpack: {
    mode: isProd ? "production" : "development",
  },

  imagemin: {
    verbose: true,
  },

  replace: {
    html: {
      from: /@img\//g,
      to: "img/",
    },
    sass: {
      from: /@img\//g,
      to: "../img/",
    },
  },
  sprite: {
    templates: [`default-svg`],
  },
};
