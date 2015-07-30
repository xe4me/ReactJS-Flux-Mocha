var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');


var FILES = {
  INDEX: 'src/index.html',
  MAIN: './src/js/main.js',
  ASSETS: 'src/assets/**/*.*',
  SAMPLE : 'src/js/json-data/articles.json',
  DIST_ASSETS :'dist/assets',
  DEST_JS: 'dist/js',
  ALL: 'src/**/*.*',
  DEST: 'dist/'
};


gulp.task('browserify', function() {
    browserify(FILES.MAIN)
    	.transform('reactify')
    	.bundle()
    	.pipe(source('main.js'))
    	.pipe(gulp.dest(FILES.DEST_JS));
});

gulp.task('copy', function() {
    gulp.src(FILES.INDEX)
      .pipe(gulp.dest(FILES.DEST));

    gulp.src(FILES.ASSETS)
      .pipe(gulp.dest(FILES.DIST_ASSETS));
    gulp.src(FILES.SAMPLE)
      .pipe(gulp.dest(FILES.DEST_JS));
});

gulp.task('default',['browserify','copy'], function() {
    return gulp.watch(FILES.ALL, ['browserify','copy']);
});
