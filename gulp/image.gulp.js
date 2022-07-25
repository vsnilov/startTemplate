import gulp from 'gulp';
import image from 'gulp-image';
import gulpIf from 'gulp-if';
import tinypng from 'gulp-tinypng';

const isDebug = process.env.NODE_ENV !== 'production';

gulp.task('image', () => (
  gulp.src(`${global.pathsSRC.img}**/*.{png,PNG,jpg,jpeg,JPG,gif,svg,ico}`)
  //.pipe(gulpIf(!isDebug, image()))
  .pipe(gulp.dest(global.pathsBUILD.img))
));

// оптимизация изображений tinypng
gulp.task('tinypng', () => (
  gulp.src(`${global.pathsSRC.img}**/*.{png,jpg,jpeg}`)
  .pipe(tinypng('EJEFC_KcQukE79WvXKi9utNDDodA1Kxj'))
  .pipe(gulp.dest(global.pathsSRC.img))
));
