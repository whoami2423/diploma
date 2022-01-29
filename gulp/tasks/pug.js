
import path from '../config/path.js';
import settings from '../config/settings.js';

import plumber from "gulp-plumber";
import notify from "gulp-notify";
import pugs from "gulp-pug";
import webpHtml from "gulp-webp-html-nosvg";
import replace from "gulp-replace";

const pug = () => {
  return app.gulp
    .src(path.pug.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "PUG",
          message: error.message,
        })),
      })
    )
    .pipe(pugs(settings.pug))
    .pipe(webpHtml())
    .pipe(replace(settings.replace.html.from, settings.replace.html.to))
    .pipe(app.gulp.dest(path.pug.dest))
    .pipe(app.browserSync.stream());
};

export default pug;
