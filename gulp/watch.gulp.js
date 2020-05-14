import gulp, {
  watch
} from 'gulp';

gulp.task('watch', () => {
  gulp.series('scripts');
  watch(`${pathsSRC.pug}**/*.pug`, gulp.series('pug'));
  watch(`${pathsSRC.scss}**/*.scss`, gulp.series('scss'));
  watch(`${pathsSRC.fonts}`, gulp.series('copy'));
  watch(`${pathsSRC.img}**/*.{png,PNG,jpg,jpeg,JPG,gif,svg,ico}`, gulp.series('images'));
  watch(`${pathsSRC.svg}**/*.svg`, gulp.series('svg'));

  watch(`${pathsBUILD.base}*.html`).on('change', gulp.series('reload'));
  watch(`${pathsBUILD.css}*.css`).on('change', gulp.series('reload'));
  watch(`${pathsBUILD.img}**/*.{jpg,png,svg,ico}`).on('change', gulp.series('reload'));
  watch(`${pathsBUILD.js}*.js`).on('change', gulp.series('reload'));
});
