var gulp = require('gulp'),
    responsive = require('gulp-image-resize'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean');
//https://www.npmjs.com/package/gulp-image-resize/

gulp.task('resize', function() {
    gulp.src(["img/*", "!img/*Logo*"])
        .pipe(responsive({
            width: 800,
            quality: 0.5
        }))
        .pipe(rename(function(path) { path.basename += "-1x"; }))
        .pipe(gulp.dest("img-dest/"));

    gulp.src(["img/*", "!img/*Logo*"])
        .pipe(responsive({
            width: 500,
            quality: 1
        }))
        .pipe(rename(function(path) { path.basename += "-small"; }))
        .pipe(gulp.dest("img-dest/"));
});

gulp.task('clean', function() {
    gulp.src('img-dest/', { read: false })
        .pipe(clean());
});

gulp.task('move', function() {
    gulp.src('img/*')
        .pipe(gulp.dest('img-dest/'));
});

gulp.task('default', ['resize', 'move']);
