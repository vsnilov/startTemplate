'use strict';

//minify js
module.exports = function () {
	$.gulp.task('libsJS:dev', () => {
		return $.gulp.src([
			'node_modules/svg4everybody/dist/svg4everybody.min.js',
			])
			.pipe($.plugin.concat('libs.min.js'))
			.pipe($.plugin.uglifyjs())
			.pipe($.gulp.dest('./build/static/js/'))
			.pipe($.browserSync.reload({
				stream: true
			})
		);
	});

	$.gulp.task('libsJS:build', () => {
		return $.gulp.src([
				'node_modules/svg4everybody/dist/svg4everybody.min.js',
			])
			.pipe($.plugin.concat('libs.min.js'))
			.pipe($.plugin.uglifyjs())
			.pipe($.gulp.dest('./build/static/js/'));
	});

	$.gulp.task('js:copy', () => {
		return $.gulp.src(['./dev/static/js/*.js',
			'!./dev/static/js/libs.min.js'])
			.pipe($.gulp.dest('./build/static/js/'))
			.pipe($.browserSync.reload({
				stream: true
			})
		);
	});
};