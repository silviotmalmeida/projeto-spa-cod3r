//tasks gulp relacionadas aos arquivos das dependências

//importando os módulos do gulp
const gulp = require("gulp");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");

function depsCSS() {
  //tasks para os arquivos CSS das dependências
  return gulp
    .src("node_modules/font-awesome/css/font-awesome.css")
    .pipe(uglifycss({ uglyComments: false }))
    .pipe(concat("deps.min.css"))
    .pipe(gulp.dest("build/assets/css"));
}

function depsFonts() {
  //tasks para as fonts das dependências
  return gulp
    .src("node_modules/font-awesome/fonts/*.*")
    .pipe(gulp.dest("build/assets/fonts"));
}

//exportando as tasks para uso externo
module.exports = {
  depsCSS,
  depsFonts,
};
