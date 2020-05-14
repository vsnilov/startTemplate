import gulp from 'gulp';

gulp.task('copy', () =>
  gulp.src(`${pathsSRC.font}`).pipe(gulp.dest(`${pathsBUILD.font}`))
);
