//importando os módulos do gulp
const { series, parallel } = require("gulp");
const gulp = require("gulp");

//importando as tasks gulp presentes na pasta gulpTasks
const { appHTML, appCSS, appJS, appIMG } = require("./gulpTasks/app");
const { depsCSS, depsFonts } = require("./gulpTasks/deps");
const { monitorarArquivos, servidor } = require("./gulpTasks/servidor");

//executando os processos do gulp
module.exports.default = series(
  //realizando o processamento em paralelo
  parallel(
    //processando os arquivos da aplicação em série
    series(appHTML, appCSS, appJS, appIMG),
    //processando os arquivos das dependências em série
    series(depsCSS, depsFonts)
  ),
  //iniciando o servidor de desenvolvimento
  servidor,
  //monitorando os arquivos para atualização automática da build
  monitorarArquivos
);
