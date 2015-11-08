var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    jscs = require('gulp-jscs'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');

gulp.task('lint', function () {
  return gulp.src(['gulp-ng-config.js', 'test/stream.js'])
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(jshint.reporter('fail'))
});

gulp.task('style', function () {
  return gulp.src(['gulp-ng-config.js', 'test/stream.js'])
  .pipe(jscs())
  .pipe(jscs.reporter('console'));
});

gulp.task('unittest', function () {
  return gulp.src('test/stream.js')
  .pipe(mocha({reporter: 'spec'}));
});

gulp.task('test', ['lint', 'style', 'unittest']);
gulp.task('default', ['test']);
