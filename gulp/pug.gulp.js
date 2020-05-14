import gulp from 'gulp';
import notify from 'gulp-notify';
import pug from 'gulp-pug';
import fs from 'fs';

gulp.task('pug', () => {
  return gulp.src(`${pathsSRC.pug}/pages/*.pug`)
    .pipe(pug({
      locals: {
        nav: JSON.parse(fs.readFileSync('./data/navigation.json', 'utf8')),
        content: JSON.parse(fs.readFileSync('./data/content.json', 'utf8')),
      },
      pretty: true
    }))
    .on('error', notify.onError({
      title: "Error in Jade Partials",
      message: "Error: <%= error.message %>",
    }))
    .pipe(gulp.dest(`${pathsBUILD.html}`));
});
