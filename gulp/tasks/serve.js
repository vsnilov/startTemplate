'use strict';

//локальный сервер
module.exports = function () {
	$.gulp.task('serve', function() {
		$.browserSync.init({//запауск сервера
			server: {
				open : false, //не открывать браузер
				baseDir: './build'
			}
		});
	});
};