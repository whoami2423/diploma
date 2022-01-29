// const { src, dest } = app.gulp;

import path from "../config/path.js";
import settings from "../config/settings.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";
import concat from "gulp-concat";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";
import size from "gulp-size";
import webpCSS from "gulp-webp-css-fixed";
import replace from "gulp-replace";


import sassGulp from "gulp-sass";
import sassDart from "sass";
const sassCompiler = sassGulp(sassDart);

const sass = () => {
  return app.gulp
    .src(path.sass.src, { sourcemaps: settings.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "SASS",
          message: error.message,
        })),
      })
    )
    .pipe(sassCompiler())
    .pipe(webpCSS())
    .pipe(concat("main.css"))
    .pipe(autoprefixer())
    .pipe(size({ title: "main.css" }))
    .pipe(replace(settings.replace.sass.from, settings.replace.sass.to))
    .pipe(app.gulp.dest(path.sass.dest, { sourcemaps: settings.isDev }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(size({ title: "main.min.css" }))
    .pipe(app.gulp.dest(path.sass.dest, { sourcemaps: settings.isDev }))
    .pipe(app.browserSync.stream());
};

export default sass;
