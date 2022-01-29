// const { src, dest } = app.gulp;

import path from "../config/path.js";
import settings from "../config/settings.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";
import newer from "gulp-newer";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

const fonts = () => {
  return app.gulp
    .src(path.fonts.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "FONTS",
          message: error.message,
        })),
      })
    )
    .pipe(newer(path.fonts.dest))
    .pipe(
      fonter(settings.fonter)
    )
    .pipe(app.gulp.dest(path.fonts.dest))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(path.fonts.dest))
    .pipe(app.browserSync.stream());
};

export default fonts;
