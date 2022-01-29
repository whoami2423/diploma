import path from "../config/path.js";

import fileInclude from "gulp-file-include";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import webpHtml from "gulp-webp-html-nosvg";

const html = () => {
  return app
    .gulp.src(path.html.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "HTML",
          message: error.message,
        })),
      })
    )
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(app.gulp.dest(path.html.dest));
};


export default html;
