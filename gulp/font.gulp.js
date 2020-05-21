import gulp from 'gulp';

gulp.task('font', () =>
  gulp.src(`${global.pathsSRC.font}`).pipe(gulp.dest(`${global.pathsBUILD.font}`))
);
