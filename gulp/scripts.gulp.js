import gulp from "gulp";
import webpack from 'webpack-stream';
import webpackConfig from '../webpack.config';

gulp.task('scripts', () => (
  webpack(webpackConfig)
  .pipe(gulp.dest(pathsBUILD.js))
));
