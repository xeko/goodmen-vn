const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const gcmq = require("gulp-group-css-media-queries");
const tinypng = require("gulp-tinypng-extended");

const watchFiles = (done) => {
    watch("./src/scss/**/*.scss", compileSass);
};

exports.watchFiles = watchFiles;

const compileSass = (done) => {
    src("./src/scss/test.scss", {sourcemaps: true})
            .pipe(sass())
            .pipe(gcmq())
            .pipe(dest("./assets", {sourcemaps: "./sourcemaps"}));
    done();
};

exports.compileSass = compileSass;