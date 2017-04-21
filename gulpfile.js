var gulp = require('gulp');
var gulpCopy = require('gulp-contrib-copy');
var stylus = require('gulp-stylus');
var autoprefixer = require('autoprefixer-stylus');
var gulpMdDocs = require('gulp-md-docs');
var docTemplate = require('./doc_src/index.js');

gulp.task('compile_doc_css', function () {
    return gulp.src('./doc_src/styl/doc.styl')
        .pipe(stylus({
            compress: true,
            use: [autoprefixer('last 5 versions')]
        }))
        .pipe(gulp.dest('./doc_src/__root/css'));
});

gulp.task('copy_template_root_dir', function() {
    return gulp.src(docTemplate.root_dir + '/**/*')
        .pipe(gulpCopy())
        .pipe(gulp.dest('doc_dist'));
});

gulp.task('compile_desktop_uikit', function () {
    return gulp.src('./src/styl/bundles/desktop.styl')
        .pipe(stylus({
            compress: true,
            use: [autoprefixer('last 5 versions')]
        }))
        .pipe(gulp.dest('./doc_src/__root/css'));
});

gulp.task('compile_portable_uikit', function () {
    return gulp.src('./src/styl/bundles/portable.styl')
        .pipe(stylus({
            compress: true,
            use: [autoprefixer('last 5 versions')]
        }))
        .pipe(gulp.dest('./doc_src/__root/css'));
});

gulp.task('compile_doc', function() {
    return gulp.src('doc_md/**/*.md')
        .pipe(gulpMdDocs({
            template: docTemplate
        }))
        .pipe(gulp.dest('doc_dist'));
});

gulp.task('watch', function() {
    gulp.watch('./src/styl/**/*.styl', ['compile_desktop_uikit', 'compile_portable_uikit', 'copy_template_root_dir']);
    gulp.watch('./doc_src/styl/**/*.styl', ['compile_doc_css', 'copy_template_root_dir']);
    gulp.watch('**/*.md', ['compile_doc']);
});
