import gulp from 'gulp';
import requireDir from 'require-dir';

global.config = require('./project.config.json');

global.pathsSRC = global.config.paths.src;
global.pathsBUILD = global.config.paths.build;

requireDir('./gulp');

gulp.task(
  'default',
  gulp.series(
    'clean',
    gulp.parallel('server', 'scss', 'js', 'image', 'svg', 'pug', 'font', 'watch')
  )
);

gulp.task(
  'build',
  gulp.series('clean', gulp.parallel('scss', 'js', 'image', 'svg', 'pug', 'font'))
);
