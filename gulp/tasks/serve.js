'use strict';

//локальный сервер
module.exports = function () {
	$.gulp.task('serve', function() {
		$.browserSync.init({//запауск сервера
			open: false,//не открывать браузер
			server: './build'
		});
	});
};
