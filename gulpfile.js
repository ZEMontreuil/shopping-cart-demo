const GulpClient = require('gulp');
const {src, dest, series} = require('gulp');
const minify = require('gulp-minify');

const scriptTask = () => {
  return src('src/**/*.js')
    .pipe(dest('dist/'));
}

exports.scripts = series(scriptTask);