
import path from "../config/path.js";
import settings from "../config/settings.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import webpack from "webpack-stream";


const js = () => {
  return app.gulp
    .src(path.js.src, { sourcemaps: settings.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "JavaScript",
          message: error.message,
        })),
      })
    )
    .pipe(babel())
    .pipe(
      webpack(settings.webpack)
    )
    .pipe(uglify())
    .pipe(app.gulp.dest(path.js.dest, { sourcemaps: settings.isDev }))
    .pipe(app.browserSync.stream());
};

export default js;
