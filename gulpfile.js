var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  gulp.src('./sass/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions', 'IE <= 9'], cascade: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
});

// watch js and scss folder for changes. run respective tasks when changed
gulp.task("watch", function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
