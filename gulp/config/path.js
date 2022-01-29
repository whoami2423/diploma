const pathSrc = "./src";
const pathDest = "./public";

export default {
  root: pathDest,

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest,
  },
  pug: {
    src: pathSrc + "/pug/*.pug",
    watch: pathSrc + "/pug/**/*.pug",
    dest: pathDest,
  },

  css: {
    src: pathSrc + "/css/*.css",
    watch: pathSrc + "/css/**/*.css",
    dest: pathDest + "/css",
  },

  sass: {
    src: pathSrc + "/sass/*.{sass,scss}",
    watch: pathSrc + "/sass/**/*.{sass,scss}",
    dest: pathDest + "/css",
  },

  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js",
  },

  img: {
    src: pathSrc + "/img/*.{png,jpg,jpeg,gif,svg}",
    watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
    dest: pathDest + "/img",
  },

  fonts: {
    src: pathSrc + "/fonts/**/*.{eot,ttf,otf,woff,woff2,svg}",
    watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,woff,woff2,svg}",
    dest: pathDest + "/fonts",
  },

  sprite: {
    src: pathSrc + "/img/icons/*.svg",
    watch: pathSrc + "/img/icons/*.svg",
    dest: pathDest + "/img",
  },
};
