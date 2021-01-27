//tasks gulp relacionadas aos arquivos das dependências

//importando os módulos do gulp
const gulp = require("gulp");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");

function depsCSS() {
  //tasks para os arquivos CSS das dependências
  return (
    gulp
      //selecionando os arquivos css a serem processados
      .src("node_modules/font-awesome/css/font-awesome.css")

      //minificando os arquivos, sem retirar os comentários
      .pipe(uglifycss({ uglyComments: false }))

      //concatenando os arquivos em um arquivo único de saída
      .pipe(concat("deps.min.css"))

      //salvando o arquivo de saída na pasta da build
      .pipe(gulp.dest("build/assets/css"))
  );
}

function depsFonts() {
  //tasks para as fonts das dependências
  return (
    gulp
      //selecionando as fontes a serem exportadas
      .src("node_modules/font-awesome/fonts/*.*")

      //salvando as fontes na pasta da build
      .pipe(gulp.dest("build/assets/fonts"))
  );
}

//exportando as tasks para uso do gulpfile.js
module.exports = {
  depsCSS,
  depsFonts,
};
