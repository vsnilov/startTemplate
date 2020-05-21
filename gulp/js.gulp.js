import gulp from "gulp";
import webpack from 'webpack-stream';
import webpackConfig from '../webpack.config';

gulp.task('js', () => (
  webpack(webpackConfig)
  .pipe(gulp.dest(global.pathsBUILD.js))
));
