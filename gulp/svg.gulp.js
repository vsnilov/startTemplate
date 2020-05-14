import gulp from 'gulp';
import svgmin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';
import svgSprite from 'gulp-svg-sprite';

gulp.task('svg', () => {
  return gulp
    .src(`${pathsSRC.svg}*.svg`)
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      cheerio({
        run: $ => {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style2.scss');
          $('[class]').removeAttr('class');
        },
        parserOptions: {
          xmlMode: true,
        },
      })
    )
    .pipe(replace('&gt;', '>'))
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: 'sprite.svg',
          },
        },
      })
    )
    .pipe(gulp.dest(`${pathsBUILD.svg}`))
    .on('change', gulp.series('reload'))
});
