import gulp from 'gulp';
import del from 'del';

gulp.task('clean', () => (
  del([
    `${global.pathsBUILD.base}`
  ])
));
