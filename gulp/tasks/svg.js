'use strict';

//svg спрайты
module.exports = function () {
	$.gulp.task('svg', () => {
		return $.gulp.src('./dev/static/img/svg/*.svg')
		.pipe($.plugin.svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe($.plugin.cheerio({
			run: function($) {
			$('[fill]').removeAttr('fill');
			$('[stroke]').removeAttr('stroke');
			$('[style]').removeAttr('style');
			$('[class]').removeAttr('class');
			},
			parserOptions: { xmlMode: true }
		}))
		.pipe($.plugin.replace('&gt;', '>'))
		.pipe($.plugin.svgSprite({
			mode: {
				symbol: {
					sprite: "sprite.svg"
				}
			}
		}))
		.pipe($.gulp.dest('./build/static/img/svg/'));
	});
};