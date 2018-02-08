'use strict';

//копируем изображения
module.exports = function () {
	$.gulp.task('img:dev', () => {
		return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif,svg}')
		.pipe($.gulp.dest('./build/static/img/'));
	});

	//оптимизация изображений tinypng
	$.gulp.task('img:build', () => {
		return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
		.pipe($.plugin.tinypng('EJEFC_KcQukE79WvXKi9utNDDodA1Kxj'))
		.pipe($.gulp.dest('./build/static/img/'));
	});
};