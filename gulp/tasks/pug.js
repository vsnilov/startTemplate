'use strict';

//шаблонизатор sass
module.exports = function () {
	//шаблонизатор pug
	$.gulp.task('pug', function(){
		return $.gulp.src('dev/pug/pages/*.pug')//от куда
			.pipe($.plugin.pug({
				locals : {
					nav: JSON.parse($.fs.readFileSync('./data/navigation.json', 'utf8')),
					content: JSON.parse($.fs.readFileSync('./data/content.json', 'utf8')),
				},
				pretty: true//unminify html
			}))
			.on('error', $.plugin.notify.onError(function(error) {
				return {
					title: 'Pug',
					message: error.message
				};
			}))
			.pipe($.gulp.dest('build'))//куда
			.on('end', $.browserSync.reload);
	});
};