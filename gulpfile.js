var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('autoprefixer-stylus');
var groupCssMedia = require('gulp-group-css-media-queries');

gulp.task('compile_uikit', function () {
    return gulp.src('./src/styl/bundles/*.styl')
        .pipe(stylus({
            compress: true,
            use: [autoprefixer('last 5 versions')]
        }))
        .pipe(groupCssMedia())
        .pipe(gulp.dest('./docs/_media/css'));
});

gulp.task('watch', function() {
    gulp.watch('./src/styl/**/*.styl', gulp.series('compile_uikit'));
});
