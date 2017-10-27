'use strict';

global.$ = {
	path: {
		task: require('./gulp/paths/tasks.js')
	},
	gulp : require('gulp'),
	del: require('del'),
	fs: require('fs'),
	browserSync : require('browser-sync').create(),
	plugin : require('gulp-load-plugins')()
}

$.path.task.forEach(function(taskPath) {
	require(taskPath)();
});

//сборка для разработки
$.gulp.task('dev', $.gulp.series(
	'clean',
	$.gulp.parallel('pug', 'sass:dev', 'libsJS:dev', 'js:copy', 'img:dev', 'svg','fonts')));

//сборка для пользователя
$.gulp.task('build', $.gulp.series(
	'clean',
	$.gulp.parallel('pug', 'sass:build', 'libsJS:dev', 'js:copy', 'img:build', 'svg', 'fonts')));

//сборка png файлов
$.gulp.task('sprite', $.gulp.series('cleansprite', 'spritemade'));

//task по умолчанию
$.gulp.task('default', $.gulp.series(
	'dev',
	$.gulp.parallel(
		'watch',
		'serve'
	)
));