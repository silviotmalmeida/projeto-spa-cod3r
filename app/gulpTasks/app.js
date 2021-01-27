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
  return (
    gulp
      //selecionando os arquivos html para processamento
      .src("src/**/*.html")

      //minificando os arquivos
      .pipe(htmlmin({ collapseWhitespace: true }))

      //salvando os arquivos processados na pasta da build
      .pipe(gulp.dest("build"))
  );
}

function appCSS() {
  //tasks para os arquivos CSS
  return (
    gulp
      //selecionando os arquivos sass para processamento
      .src("src/assets/sass/index.scss")

      //processando os arquivos
      .pipe(sass().on("error", sass.logError))

      //minificando os arquivos
      .pipe(uglifycss({ uglyComments: true }))

      //concatenando os arquivos em um arquivo único de saída
      .pipe(concat("app.min.css"))

      //salvando o arquivo de saída na pasta da build
      .pipe(gulp.dest("build/assets/css"))
  );
}

function appJS() {
  //tasks para os arquivos JS
  return (
    gulp
      //selecionando os arquivos js para processamento
      .src("src/assets/js/**/*.js")

      //processando os arquivos
      .pipe(babel({ presets: ["env"] }))

      //minificando os arquivos
      .pipe(uglify())

      //concatenando os arquivos em um arquivo único de saída
      .pipe(concat("app.min.js"))

      //salvando o arquivo de saída na pasta da build
      .pipe(gulp.dest("build/assets/js"))
  );
}

function appIMG() {
  //tasks para os arquivos IMG
  return (
    gulp

      //selecionando as imagens a serem exportadas
      .src("src/assets/imgs/**/*.*")

      //salvando as fontes na pasta da build
      .pipe(gulp.dest("build/assets/imgs"))
  );
}

//preparando as tasks para exportação para utilização no arquivo servidor.js
gulp.task("appHTML", appHTML);
gulp.task("appCSS", appCSS);
gulp.task("appJS", appJS);
gulp.task("appIMG", appIMG);

//exportando as tasks para uso do gulpfile.js
module.exports = {
  appHTML,
  appCSS,
  appJS,
  appIMG,
};
