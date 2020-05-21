import gulp from 'gulp';
import image from 'gulp-image';
import gulpIf from 'gulp-if';

const isDebug = process.env.NODE_ENV !== 'production';

gulp.task('image', () => (
  gulp.src(`${global.pathsSRC.img}**/*.{png,PNG,jpg,jpeg,JPG,gif,svg,ico}`)
  .pipe(gulpIf(!isDebug, image()))
  .pipe(gulp.dest(global.pathsBUILD.img))
));
