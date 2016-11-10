var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('autoprefixer-stylus');
var gulpMdDocs = require('gulp-md-docs');

gulp.task('dist', function () {
    return gulp.src('./src/styl/uikit.styl')
        .pipe(stylus({
            compress: true,
            use: [autoprefixer('last 5 versions')]
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulp.dest('./documentation/resource/css'));
});

gulp.task('docs', function() {
    return gulp.src('./README.md')
        .pipe(gulpMdDocs({
            templates: {
                base: './documentation/resource/template.html',
                block: {
                    code: './documentation/resource/block/code.html',
                    hr: './documentation/resource/block/hr.html',
                    heading: './documentation/resource/block/heading.html',
                    paragraph: './documentation/resource/block/paragraph.html',
                }
            }
        }))
        .pipe(gulp.dest('documentation'));
});
