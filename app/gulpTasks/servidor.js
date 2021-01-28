//preparando o servidor de desenvolvimento com atualização automática da build

//importando os módulos do gulp
const gulp = require("gulp");
const webserver = require("gulp-webserver");
const watch = require("gulp-watch");

function servidor(cb) {
  //função que cria o servidor de desenvolvimento
  return (
    gulp
      //definindo a pasta raiz da aplicação
      .src("build")

      //configurando o servidor
      .pipe(
        webserver({
          port: 3003,
          open: true,
          livereload: true,
          host: "0.0.0.0",
        })
      )
  );
}

function monitorarArquivos(cb) {
  //função que monitora os arquivos fonte e realiza a atualização automática da build
  watch("src/**/*.html", () => gulp.series("appHTML")());
  watch("src/**/*.scss", () => gulp.series("appCSS")());
  watch("src/**/*.js", () => gulp.series("appJS")());
  watch("src/assets/imgs/**/*.*", () => gulp.series("appIMG")());
  return cb();
}

//exportando as tasks para uso do gulpfile.js
module.exports = {
  monitorarArquivos,
  servidor,
};
