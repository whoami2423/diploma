
import path from "../config/path.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";
import cssimport from "gulp-cssimport";
import concat from "gulp-concat";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";
import size from "gulp-size";

const css = () => {
  return app.gulp
    .src(path.css.src, { sourcemaps: true })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "CSS",
          message: error.message,
        })),
      })
    )
    .pipe(concat("main.css"))
    .pipe(cssimport())
    .pipe(autoprefixer())
    .pipe(size({ title: "main.css" }))
    .pipe(app.gulp.dest(path.css.dest, { sourcemaps: true }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(size({ title: "main.min.css" }))
    .pipe(app.gulp.dest(path.css.dest, { sourcemaps: true }));
};

export default css;
