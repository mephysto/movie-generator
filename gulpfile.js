var gulp = require('gulp');
<<<<<<< 5cee8273a501ab7a0b371c10b6feb71a20fe51b8
var gulpUtil = require('gulp-util');
var babel = require("gulp-babel");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
=======
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
>>>>>>> initial commit

gulp.task('sass', function () {
  gulp.src('./sass/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions', 'IE <= 9'], cascade: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
});

<<<<<<< 5cee8273a501ab7a0b371c10b6feb71a20fe51b8
gulp.task('compress', function() {
  return gulp.src('js/main.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify().on('error', gulpUtil.log))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('js'));
});

// watch js and scss folder for changes. run respective tasks when changed
gulp.task("watch", function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./js/main.js', ['compress']);
});

gulp.task('default', ['compress', 'sass', 'watch']);
=======
// watch js and scss folder for changes. run respective tasks when changed
gulp.task("watch", function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
>>>>>>> initial commit
