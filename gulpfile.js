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
        .pipe(gulp.dest('./documentation/resource/css'));
});

gulp.task('docs', function() {
    return gulp.src('**/*.md')
        .pipe(gulpMdDocs({
            templates: {
                base: './documentation/resource/template.html',
                block: {
                    code: './documentation/resource/block/code.html',
                    codespan: './documentation/resource/block/codespan.html',
                    hr: './documentation/resource/block/hr.html',
                    heading: './documentation/resource/block/heading.html',
                    paragraph: './documentation/resource/block/paragraph.html',
                    table: './documentation/resource/block/table.html',
                    tablerow: './documentation/resource/block/tablerow.html',
                    tablecell: './documentation/resource/block/tablecell.html',
                }
            }
        }))
        .pipe(gulp.dest('documentation'));
});

gulp.task('watch', function() {
    gulp.watch('./src/styl/**/*.styl', ['dist']);
    gulp.watch('**/*.md', ['docs']);
});
