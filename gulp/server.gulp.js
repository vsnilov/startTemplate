import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('server', () => {
  browserSync.init({
    open: false,
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false,
      location: false,
    },
    server: `${pathsBUILD.base}`,
  });
});

// Browser Reload Function
gulp.task('reload', (done) => {
  browserSync.reload();
  done();
});
