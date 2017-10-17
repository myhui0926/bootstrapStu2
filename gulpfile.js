var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less');

gulp.task('connect',function(){
    connect.server({
        livereload:true
    });
});

gulp.task('html',function(){
    gulp.src(['src/*.html'])
        .pipe(connect.reload());
});

gulp.task('less',function(){
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(connect.reload());
});

gulp.task('watch',function(){
    gulp.watch('src/*.html',['html']);
    gulp.watch('src/less/*.less',['less']);
    gulp.watch('src/js/*.js',['html']);
});

gulp.task('default',['connect','watch']);