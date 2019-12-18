'use strict';

//minify js
module.exports = function () {
	$.gulp.task('libsJS:dev', () => {
		return $.gulp.src([
			'node_modules/svg4everybody/dist/svg4everybody.min.js',
			/*
			'node_modules/imask/dist/imask.js',
			'node_modules/tiny-slider/dist/tiny-slider.js',
			'node_modules/tabbyjs/dist/js/tabby.js',
			'node_modules/micromodal/dist/micromodal.js',
			'node_modules/smooth-scroll/dist/smooth-scroll.js',
			*/
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

	$.gulp.task('js:webpack', () => {
		return $.gulp.src('./dev/static/js/main.js')
		  .pipe($.webpackStream($.webpackConfig), $.webpack)
		  .pipe($.gulp.dest('./build/static/js/'))
		  .pipe($.browserSync.reload({
			  stream: true
			})
			);
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
