var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('autoprefixer-stylus');
var gulpMdDocs = require('gulp-md-docs');

gulp.task('desktop', function () {
    return gulp.src('./src/styl/bundles/desktop.styl')
        .pipe(stylus({
            compress: true,
            use: [autoprefixer('last 5 versions')]
        }))
        .pipe(gulp.dest('./documentation/css'));
});

gulp.task('portable', function () {
    return gulp.src('./src/styl/bundles/portable.styl')
        .pipe(stylus({
            compress: true,
            use: [autoprefixer('last 5 versions')]
        }))
        .pipe(gulp.dest('./documentation/css'));
});

gulp.task('doc', function () {
    return gulp.src('./docsrc/styl/doc.styl')
        .pipe(stylus({
            compress: true,
            use: [autoprefixer('last 5 versions')]
        }))
        .pipe(gulp.dest('./documentation/css'));
});

gulp.task('md', function() {
    return gulp.src('**/*.md')
        .pipe(gulpMdDocs({
            templates: {
                base: './docsrc/tmpl/base.html',
                block: {
                    code: './docsrc/tmpl/block/code.html',
                    codespan: './docsrc/tmpl/block/codespan.html',
                    hr: './docsrc/tmpl/block/hr.html',
                    heading: './docsrc/tmpl/block/heading.html',
                    paragraph: './docsrc/tmpl/block/paragraph.html',
                    table: './docsrc/tmpl/block/table.html',
                    tablerow: './docsrc/tmpl/block/tablerow.html',
                    tablecell: './docsrc/tmpl/block/tablecell.html',
                }
            }
        }))
        .pipe(gulp.dest('documentation'));
});

gulp.task('watch', function() {
    gulp.watch('./src/styl/**/*.styl', ['desktop', 'portable']);
    gulp.watch('./docsrc/styl/**/*.styl', ['doc']);
    gulp.watch('**/*.md', ['md']);
});
