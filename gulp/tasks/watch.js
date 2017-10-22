'use strict';

//шаблонизатор sass
module.exports = function () {
	//слежка за изменениями в файлах
	$.gulp.task('watch', function(){
		$.gulp.watch('./dev/pug/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('./dev/static/sass/**/*.sass', $.gulp.series('sass:dev'));
		$.gulp.watch('./dev/static/img/svg/*.svg', $.gulp.series('svg'));
		$.gulp.watch('./dev/static/js/**/*.js', $.gulp.series('libsJS:dev', 'js:copy'));
		$.gulp.watch(['./dev/static/img/general/**/*.{png,jpg,gif,svg}','./dev/static/img/content/**/*.{png,jpg,gif,svg}'], $.gulp.series('img:dev'));
	});
};