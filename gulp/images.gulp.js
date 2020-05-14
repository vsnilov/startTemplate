import gulp from 'gulp';
import image from 'gulp-image';
import gulpIf from 'gulp-if';

const isDebug = process.env.NODE_ENV !== 'production';

gulp.task('images', () => (
  gulp.src(pathsSRC.img)
  .pipe(gulpIf(!isDebug, image()))
  .pipe(gulp.dest(pathsBUILD.img))
  .on('change', gulp.series('reload'))
));
