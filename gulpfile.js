var gulp = require('gulp'),
	compass = require('gulp-compass'),
	sassDir = 'assets/sass',
	cssDir = 'assets/css',
	imgDir = 'assets/img';


gulp.task('styles', function()
{
	return gulp.src(sassDir + '/style.scss')
		.pipe(compass({
			style: 'nested',
			sass: sassDir,
			css: cssDir,
			image: imgDir,
			require: ['susy', 'breakpoint']
		}))
		.pipe(gulp.dest(cssDir));
});

gulp.task('watch', function()
{
	gulp.watch(sassDir + '/**/*.scss', ['styles']);
});

gulp.task('default', function()
{
	gulp.start('styles', 'watch');
});