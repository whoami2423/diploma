import path from "../config/path.js";
import settings from "../config/settings.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import webp from "gulp-webp";
import gulpIF from "gulp-if";

const img = () => {
  return app.gulp
    .src(path.img.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "IMG",
          message: error.message,
        })),
      })
    )
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(app.gulp.src(path.img.src))
    .pipe(newer(path.img.dest))
    .pipe(gulpIF(settings.isProd, imagemin(settings.imagemin)))
    .pipe(app.gulp.dest(path.img.dest))
    .pipe(app.browserSync.stream());
};

export default img;
