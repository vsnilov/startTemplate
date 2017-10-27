'use strict';

// Сборка спрайтов PNG
module.exports = function () {

	$.gulp.task('cleansprite', () =>{
		 return $.del([
			'./dev/static/img/sprite/sprite.png'
		]);
	});

	$.gulp.task('spritemade', () =>{
		var spriteData =
			$.gulp.src('./dev/static/img/sprite/*.*')
			.pipe($.plugin.spritesmith({
				imgName: 'sprite.png',
				cssName: '_sprite.sass',
				padding: 5,
				cssFormat: 'sass',
				algorithm: 'binary-tree',
				cssTemplate: 'sass.template.mustache',
				cssVarMap: function(sprite) {
					sprite.name = 's-' + sprite.name;
				}
			}));
		spriteData.img.pipe($.gulp.dest('./dev/static/img/sprite/')); // путь, куда сохраняем картинку
		spriteData.css.pipe($.gulp.dest('./dev/static/sass/')); // путь, куда сохраняем стили
	});
};