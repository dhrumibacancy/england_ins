// Define GUlp require variabel
const { src, dest, watch, series, parallel } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
sass.compiler = require('sass');
const Postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const uncss = require("postcss-uncss");
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const header = require("gulp-header");
const chalk = require('chalk');
const log = console.log;
const del = require('del');
const purgecss = require("@fullhuman/postcss-purgecss");
const browsersync = require('browser-sync').create();


// Sass Task

function scssTask() {
    (async () => {
        const deletedFilePaths = await del(['src/assets/css/*.{css,map}']);
        console.log('Deleted files:\n', deletedFilePaths.join('\n'));
    })();
    return src('src/scss/**/*.scss', { sourcemaps: true })
        .pipe(sourcemaps.init())
        .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
        // .on('error', function (err) {
        //     notify().write(err);
        //     this.emit('end');
        // })
        .pipe(
            Postcss([
                autoprefixer("last 20 versions"),
                // cssnano(),
                // purgecss({
                //     content: ['src/**/*.html'],
                //     // safelist: {
                //     //     deep: [/active/],
                //     // }
                //     safelist: ['active',"show"]
                // })
                // uncss({
                //     html: ['src/*.html'],
                //     ignore: ['.active,.show']
                // })
            ])
        )
        .pipe(header('/* custom ${cssname} \n ${creator} */ \n \n ', {
            cssname: 'main',
            creator: "UnExpected King Tirth Shah"
        }))

        .pipe(dest('src/assets/css/', { sourcemaps: '.' }))
        .pipe(browsersync.stream());
    // .pipe(notify({ message: 'SCSS Compiled' }));

}

function scssTaskProd() {
    (async () => {
        const deletedFilePaths = await del(['src/assets/css/*.{css,map}']);
        console.log('Deleted files:\n', deletedFilePaths.join('\n'));
    })();
    return src('src/scss/**/*.scss', { sourcemaps: true })
        .pipe(sourcemaps.init())
        .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
        // .on('error', function (err) {
        //     notify().write(err);
        //     this.emit('end');
        // })
        .pipe(
            Postcss([
                autoprefixer("last 5 versions"),
                cssnano(),
                purgecss({
                    content: ['src/**/*.html'],
                    // safelist: {
                    //     deep: [/active/],
                    // }
                    safelist: ['active',"show"]
                }),
                // uncss({
                //     html: ['src/**/*.html'],
                //     ignore: ['.active,.show']
                // })
            ])
        )
        .pipe(header('/* custom ${cssname} \n ${creator} */ \n \n ', {
            cssname: 'main',
            creator: "UnExpected King Tirth Shah"
        }))

        .pipe(dest('src/assets/css/', { sourcemaps: '.' }))
        .pipe(browsersync.stream());
    // .pipe(notify({ message: 'SCSS Compiled' }));

}

// JavaScript Task

function jsTask() {
    (async () => {
        const deletedFilePaths = await del(['src/assets/js/*.{js,map}']);
        console.log('Deleted files:\n', deletedFilePaths.join('\n'));
    })();
    return src('src/js/**/*.js', { sourcemaps: true })
        .pipe(terser())
        .pipe(dest('src/assets/js/', { sourcemaps: '.' }));
}


// Browsersync Tasks

function browsersyncServe(sync) {
    browsersync.init({
        server: {
            baseDir: './src/'
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0',
            },
        },
    });
    sync();
}


// Watch Task

function watchTask() {
    watch('src/scss/**/*.{scss,sass}', scssTask).on('change', function () { log(chalk.white.bgMagenta.bold(`UnExpected KING SUNNY SCSS Compile DOne`)); });
    watch('src/*.html').on('change', browsersync.reload);
    watch('src/js/**/*.js', jsTask).on('change', browsersync.reload);
}


// Default Gulp task

exports.default = series(
    scssTask,
    jsTask,
    browsersyncServe,
    watchTask
);

exports.production = series(
    scssTaskProd
);