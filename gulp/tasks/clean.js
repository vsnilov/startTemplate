'use strict';

//удаление папки build
module.exports = function () {
	$.gulp.task('clean', function() {
		return $.del([
			'./build'
		]);
	});
};