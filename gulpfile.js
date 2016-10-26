var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('autoprefixer-stylus');

gulp.task('dist', function () {
    return gulp.src('./src/styl/uikit.styl')
        .pipe(stylus({
            compress: true,
            use: [autoprefixer('last 5 versions')]
        }))
        .pipe(gulp.dest('./dist/css'));
});
