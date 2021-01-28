(function () {
  function marcarLinkComoSelecionado(hash) {
    //função que atribui a classe "selecionado" ao link cujo valor
    //da propriedade wm-link seja passado como parâmetro

    //pesquisando e populando uma lista com os links que possuem o atributo wm-link
    const links = document.querySelectorAll(`[wm-link]`);

    //removendo, caso exista, a classe selecionado de todos os links
    links.forEach((link) => link.classList.remove("selecionado"));

    //pesquisando e populando uma variável com o link a ser classificado como selecionado
    const link = document.querySelector(`[wm-link='${hash}']`);

    //adicionando a classe selecionado ao link
    link.classList.add("selecionado");
  }

  function navegarViaAjax(hash) {
    //função responsável por inserir html de forma dinâmica no <main>

    //se o parâmetro estiver vazio, não executa nada
    if (!hash) return;

    //definindo o elemento com o valor de wm-link do parâmetro
    const link = document.querySelector(`[wm-link='${hash}']`);

    //definindo o elemento de destino
    const destino = document.querySelector("[wm-link-destino]");

    //obtendo a url a partir do parâmetro
    const url = hash.substring(1);

    //realizando uma requisição à url
    fetch(url)
      //obtendo o texto html da página
      .then((resp) => resp.text())
      //inserindo o html na <main> e atribuindo a classe "selecionado ao link"
      .then((html) => {
        destino.innerHTML = html;
        marcarLinkComoSelecionado(hash);
      });
  }

  function configurarLinks() {
    //função responsável por preencher o atributo href a partir do atributo wm-link
    document.querySelectorAll("[wm-link]").forEach((link) => {
      link.href = link.attributes["wm-link"].value;
    });
  }

  function navegacaoInicial() {
    //função responsável por abrir a tela inicial

    //caso a url esteja preenchida na barra de endereço do navegador:
    if (location.hash) {
      //carrega na <main> a página referente à url
      navegarViaAjax(location.hash);

      //senão
    } else {
      //definindo o primeiro elemento com o atributo wm-link
      const primeiroLink = document.querySelector("[wm-link]");

      //carrega na <main> a página referente à url presente no primeiro elemento wm-link
      navegarViaAjax(primeiroLink.hash);
    }
  }

  //caso haja alguma alteração na barra de endereço do navegador, atualiza a <main>
  window.onhashchange = (e) => navegarViaAjax(location.hash);

  //preenchendo os href dos links
  configurarLinks();

  //abrindo a página inicial
  navegacaoInicial();
})();
