import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpIf from 'gulp-if';
import sass from 'gulp-sass';
import base64 from 'gulp-css-base64';
import postcss from 'gulp-postcss';
import csso from 'gulp-csso';
import gcmq from 'gulp-group-css-media-queries';
import autoprefixer from 'autoprefixer';
import concat from 'gulp-concat';
import flexbugs from 'postcss-flexbugs-fixes';
import animation from 'postcss-animation';
import gulpSourcemaps from 'gulp-sourcemaps'

const isDebug = process.env.NODE_ENV !== 'production';
const processors = [flexbugs, animation, autoprefixer];

gulp.task('scss', () =>
  gulp
  .src([
    `${global.pathsSRC.scss}variables.scss`,
    `${global.pathsSRC.scss}mixins.scss`,
    `${global.pathsSRC.scss}fonts.scss`,
    `${global.pathsSRC.scss}**/*.scss`
  ])
  .pipe(gulpIf(isDebug, gulpSourcemaps.init()))
  .pipe(concat('style.scss'))
  .pipe(
    sass({
      includePaths: ['node_modules'],
    })
  )
  .pipe(gulpIf(isDebug, gulpSourcemaps.write()))
  .pipe(gulpIf(!isDebug, gcmq()))
  .pipe(gulpIf(!isDebug, postcss(processors)))
  .pipe(
    gulpIf(
      !isDebug,
      base64({
        maxWeightResource: 8192,
      })
    )
  )
  .pipe(gulpIf(!isDebug, csso()))
  .pipe(gulp.dest(`${global.pathsBUILD.css}`))
  .pipe(browserSync.reload({
    stream: true
  }))
);
