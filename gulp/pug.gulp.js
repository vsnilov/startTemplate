import gulp from 'gulp';
import browserSync from 'browser-sync';
import notify from 'gulp-notify';
import pug from 'gulp-pug';
import fs from 'fs';
import pugLinter from 'gulp-pug-linter';
import htmlValidator from 'gulp-w3c-html-validator';
import bemValidator from 'gulp-html-bem-validator';

gulp.task('pug', () => {
  return gulp
    .src(`${global.pathsSRC.pug}/pages/*.pug`)
    .pipe(pugLinter({
      reporter: 'default'
    }))
    .pipe(
      pug({
        locals: {
          nav: JSON.parse(fs.readFileSync('./data/navigation.json', 'utf8')),
          content: JSON.parse(fs.readFileSync('./data/content.json', 'utf8')),
        },
        pretty: true,
      })
    )
    //.pipe(htmlValidator())
    //.pipe(bemValidator())
    .on(
      'error',
      notify.onError({
        title: 'Error in Jade Partials',
        message: 'Error: <%= error.message %>',
      })
    )
    .pipe(gulp.dest(`${global.pathsBUILD.html}`))
    .pipe(browserSync.reload({
      stream: true
    }))
});
