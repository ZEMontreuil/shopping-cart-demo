const GulpClient = require('gulp');
const {src, dest, series, parallel} = require('gulp');
const minify = require('gulp-minify');
const concat = require('gulp-concat');

const scriptTask = () => {
  return src('src/**/*.js', {sourcemaps: true})
    .pipe(minify({
      noSource: true,
    }))
    .pipe(concat("all.js"))
    .pipe(dest('dist/js/', {sourcemaps: true}));
}

const markupTask = () => {
  return src('src/*.html')
    .pipe(dest('dist/'));
}

const styleTask = () => {
  return src('src/*.css')
    .pipe(dest('dist/'));
}

exports.all = parallel(scriptTask, styleTask, markupTask);