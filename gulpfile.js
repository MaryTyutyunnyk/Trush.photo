'use strict';

// General modules
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const gulpSequence = require('gulp-sequence');
const clean = require('gulp-clean');
const rigger = require('gulp-rigger'); // To use code blocks as components
const plumber = require('gulp-plumber'); // To track bugs

//Styles
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');

// JS
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat'); // For files concatination
const uglify = require('gulp-uglify'); // Compress JS files

// Images
const imagemin = require('gulp-imagemin');
const imageminWebp = require('imagemin-webp');


gulp.task('clean', () =>
 	gulp.src('./dist', {
      read: false
    })
        .pipe(clean())
);

gulp.task('html', () => {
	gulp.src('./src/html/pages/*.html')
		.pipe(rigger())
		.pipe(gulp.dest('./dist'))
});

gulp.task('scss', () =>
	gulp.src('./src/scss/**/*.scss')
		.pipe(plumber())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({
		  browsers: ['last 5 versions'],
		  cascade: false
		}))
		.pipe(sourcemaps.write())
		.pipe(cssmin())
		.pipe(gulp.dest('./dist/css'))
);

gulp.task('js', () =>
	gulp.src('./src/js/**/*.js')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		//.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/js'))
);


gulp.task('img', () => {
	gulp.src('./src/img/**/*.jpeg')
		.pipe(imagemin([
			imageminWebp({
				quality: 100,
				lossless: true
			}),
		]))
		.pipe(gulp.dest('./dist/jpeg'));
		gulp.src('./src/img/**/*.png')
			.pipe(imagemin([
				imageminWebp({
					quality: 100,
					lossless: true
				})
			]))
			.pipe(gulp.dest('./dist/png'));
		gulp.src('./src/img/**/*.svg')
			.pipe(imagemin([
				imageminWebp({
					quality: 100,
					lossless: true
				})
			]))
			.pipe(gulp.dest('./dist/svg'))
});

gulp.task('fonts', () => {
	gulp.src('./src/fonts/**/*.*')
		.pipe(gulp.dest('./dist/fonts'))
});


gulp.task('build', gulpSequence('clean', ['html'], ['scss'], ['fonts'], ['js'], ['img']));

gulp.task('dev', ['build'], () => {
	browserSync.init({
		server: "dist"
	});

	gulp.src('./src/html/index.html')
		.pipe(rigger())
		.pipe(gulp.dest('./dist'));

	gulp.watch('./src/js/**/*.js', ['js']).on('change', browserSync.reload);
	gulp.watch('./src/scss/**/*.scss', ['scss']).on('change', browserSync.reload);
	gulp.watch('./src/img/**/*', ['img']).on('change', browserSync.reload);
	gulp.watch('./src/html/**/*.html').on('change', () => {
		gulp.src('./src/html/index.html')
			.pipe(rigger())
			.pipe(gulp.dest('./dist'))
	});
	gulp.watch('./src/html/**/*.html').on('change', browserSync.reload)
});

