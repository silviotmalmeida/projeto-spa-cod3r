//tasks gulp relacionadas aos arquivos da aplicação

//importando os módulos do gulp
const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");

function appHTML() {
  //tasks para os arquivos HTML
  return gulp
    .src("src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

function appCSS() {
  //tasks para os arquivos CSS
  return gulp
    .src("src/assets/sass/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(uglifycss({ uglyComments: true }))
    .pipe(concat("app.min.css"))
    .pipe(gulp.dest("build/assets/css"));
}

function appJS() {
  //tasks para os arquivos JS
  return gulp
    .src("src/assets/js/**/*.js")
    .pipe(babel({ presets: ["env"] }))
    .pipe(uglify())
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("build/assets/js"));
}

function appIMG() {
  //tasks para os arquivos IMG
  return gulp
    .src("src/assets/imgs/**/*.*")
    .pipe(gulp.dest("build/assets/imgs"));
}

//preparando as tasks para exportação
gulp.task("appHTML", appHTML);
gulp.task("appCSS", appCSS);
gulp.task("appJS", appJS);
gulp.task("appIMG", appIMG);

//exportando as tasks para uso externo
module.exports = {
  appHTML,
  appCSS,
  appJS,
  appIMG,
};
