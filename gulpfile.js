var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('autoprefixer-stylus');
var gulpMdDocs = require('gulp-md-docs');
var docTemplate = require('./doc_src/index.js');
var groupCssMedia = require('gulp-group-css-media-queries');

gulp.task('compile_doc_css', function () {
    return gulp.src('./doc_src/styl/bundles/doc.styl')
        .pipe(stylus({
            compress: true,
            use: [autoprefixer('last 5 versions')]
        }))
        .pipe(gulp.dest('./doc_src/__root/css'));
});


gulp.task('copy_template_root_dir', function() {
    return gulp.src(docTemplate.root_dir + '/**/*')
        .pipe(gulp.dest('./doc_dist'));
});

gulp.task('compile_uikit', function () {
    return gulp.src('./src/styl/bundles/*.styl')
        .pipe(stylus({
            compress: true,
            use: [autoprefixer('last 5 versions')]
        }))
        .pipe(groupCssMedia())
        .pipe(gulp.dest('./doc_src/__root/css'));
});

gulp.task('compile_doc', function() {
    return gulp.src('./src/md/**/*.md')
        .pipe(gulpMdDocs({
            template: docTemplate
        }))
        .pipe(gulp.dest('./doc_dist'));
});

gulp.task('watch', function() {
    gulp.watch('./src/styl/**/*.styl', ['compile_uikit', 'copy_template_root_dir']);
    gulp.watch('./doc_src/styl/**/*.styl', ['compile_doc_css', 'copy_template_root_dir']);
    gulp.watch('./src/md/**/*.md', ['compile_doc']);
});
