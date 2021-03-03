import gulp from 'gulp';

gulp.task('files', () =>
  gulp.src(`${global.pathsSRC.file}`).pipe(gulp.dest(`${global.pathsBUILD.file}`))
);
