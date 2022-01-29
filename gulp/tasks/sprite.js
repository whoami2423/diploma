import path from "../config/path.js";
import settings from "../config/settings.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";

import svgSymbols from "gulp-svg-symbols";
import newer from "gulp-newer";
import rename from "gulp-rename";

const sprite = () => {
  return app.gulp
    .src(path.sprite.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "Sprite",
          message: error.message,
        })),
      })
    )
    .pipe(newer(path.sprite.src))
    .pipe(
      svgSymbols(settings.sprite)
    )
    .pipe(rename('sprite.svg'))
    .pipe(app.gulp.dest(path.sprite.dest))
    .pipe(app.browserSync.stream());
};

export default sprite;
