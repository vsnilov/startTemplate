import gulp from 'gulp';

gulp.task('watch', () => {
  gulp.series('js');
  gulp.watch(`${global.pathsSRC.pug}**/*.pug`, gulp.series('pug'));
  gulp.watch(`${global.pathsSRC.scss}**/*.scss`, gulp.series('scss'));
  gulp.watch(`${global.pathsSRC.font}`, gulp.series('font'));
  gulp.watch(`${global.pathsSRC.img}**/*.{png,PNG,jpg,jpeg,JPG,gif,svg,ico}`, gulp.series(
    'image'));
  gulp.watch(`${global.pathsSRC.svg}*.svg`, gulp.series('svg'));


  gulp.watch(`${global.pathsBUILD.img}**/*.{png,PNG,jpg,jpeg,JPG,gif,svg,ico}`).on('change',
    gulp
    .series(
      'reload'));
  gulp.watch(`${global.pathsBUILD.js}*.js`).on('change', gulp.series('reload'));
});
