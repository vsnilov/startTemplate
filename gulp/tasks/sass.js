'use strict';

//шаблонизатор sass
module.exports = function () {
	$.gulp.task('sass:dev', function(){
		return $.gulp.src([
			'dev/static/sass/*.sass',
			])//от куда
			.on("error", $.plugin.notify.onError(function (error) {//обработчик ошибок
				return {
					title: 'Sass',
					message: error.message
				};
			}))
			.pipe($.plugin.sourcemaps.init())//Инициализируем sourcemap, помогает при отладке кода
			.pipe($.plugin.sass())
			.pipe($.plugin.sourcemaps.write())//Пропишем карты
			.pipe($.gulp.dest('./build/static/css/'))//куда
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('sassLibs', function(){
		return $.gulp.src([
			'node_modules/bootstrap/dist/css/bootstrap.css',
			//'node_modules/owl.carousel2/dist/assets/owl.carousel.css',
			//'node_modules/lightgallery/dist/css/lightgallery.css',
			//'node_modules/magnific-popup/dist/magnific-popup.css',
			])
			.pipe($.plugin.autoprefixer({//автоматически добавляет вендорные префиксы к CSS свойствам
				browsers: ['last 10 versions', '> 5%', 'ie 8'],
				cascade: true
			}))
			.pipe($.plugin.csscomb())
			.pipe($.plugin.csso())//minify css, объединение правил для селекторов
			.pipe($.plugin.concat('libs.css'))
			.pipe($.gulp.dest('./build/static/css/'))//куда

	});

	
	$.gulp.task('sass:build', function(){
		return $.gulp.src([
			'dev/static/sass/*.sass',
			])//от куда
			.pipe($.plugin.sass())
			.pipe($.plugin.autoprefixer({//автоматически добавляет вендорные префиксы к CSS свойствам
				browsers: ['last 10 versions', '> 5%', 'ie 8'],
				cascade: true
			}))
			.pipe($.plugin.csscomb())
			.pipe($.plugin.csso())//minify css, объединение правил для селекторов
			.pipe($.gulp.dest('./build/static/css/'))//куда
	});
};