var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  gulp.src('./sass/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions', 'IE <= 9'], cascade: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
});

gulp.task('compress', function() {
  return gulp.src('js/main.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('js'));
});

// watch js and scss folder for changes. run respective tasks when changed
gulp.task("watch", function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./js/main.js', ['compress']);
});

gulp.task('default', ['compress', 'sass', 'watch']);
