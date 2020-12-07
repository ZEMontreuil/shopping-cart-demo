const GulpClient = require('gulp');
const {src, dest, series, parallel} = require('gulp');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const imageMin = require('gulp-imagemin');

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
  return src(['src/styles.css', 'src/styles-override.css'], {sourcemaps: true})
    .pipe(concat('styles.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist/', {sourcemaps: true}));
}

const imageTask = () => {
  return src('src/imgs/**/*')
    .pipe(imageMin())
    .pipe(dest('dist/imgs/'))
}

exports.default = parallel(scriptTask, styleTask, 
  markupTask, imageTask);