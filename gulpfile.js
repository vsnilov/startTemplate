'use strict';

var gulp = require('gulp'),
	plugin  = require('gulp-load-plugins')(),
	browserSync = require('browser-sync').create();

//локальный сервер
gulp.task('serve', function() {
	browserSync.init({//запауск сервера
		server: {
			baseDir: './build'
		}
	});
});

//шаблонизатор pug
gulp.task('pug', function(){
	return gulp.src('dev/pug/pages/*.pug')//от куда
		.pipe(plugin.pug({
			pretty: true//unminify html
		}))
		.pipe(gulp.dest('build'))//куда
		.pipe(browserSync.reload({//перезагрузка браузера
			stream: true
		}))
});

//шаблонизатор sass
gulp.task('sass', function(){
	return gulp.src('dev/static/sass/*.sass')//от куда
		.on("error", plugin.notify.onError({//обработчик ошибок
			message: "Error: <%= error.message %>",
			title: "Error running something"
		}))
		.pipe(plugin.sourcemaps.init())//Инициализируем sourcemap, помогает при отладке кода
		.pipe(plugin.sass({}))
		.pipe(plugin.autoprefixer({//автоматически добавляет вендорные префиксы к CSS свойствам
			browsers: ['last 10 versions', '> 5%', 'ie 8'],
			cascade: true
		}))
		.pipe(plugin.csso())//minify css
		.pipe(plugin.sourcemaps.write())//Пропишем карты
		.pipe(gulp.dest('build/static/css/'))//куда
		.pipe(browserSync.reload({//перезагрузка браузера
			stream: true
		}))
});

//слежка за изменениями в файлах
gulp.task('watch', function(){
	gulp.watch('dev/pug/**/*.pug',gulp.series('pug'));
	gulp.watch('dev/static/sass/**/*.sass',gulp.series('sass'));
});

//task по умолчанию
gulp.task('default', gulp.series(
	gulp.parallel('pug','sass'),
	gulp.parallel('watch','serve')
));