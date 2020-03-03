$(document).ready(function() {
  // aplicando cor de papel de parede das conversas com o localstorage
  var usuario = localStorage.usuario; // string json

  var usuario_obj;

  if (usuario) {
    usuario_obj = JSON.parse(usuario);
  } else {
    usuario_obj = {};
  }

  // se caso nao ouver cor selecionada no banco vai mostrar a do localstorage, se nao tiver no localstorage vai mostrar a padrao
  var _cor = usuario_obj.cor || localStorage.cor || "transparent";

  if (_cor) {
    // aplicar borda azul
    $(`[data-cor="${_cor}"]`).addClass(
      "selecionada_cor_conteudo_papel_de_parede"
    );

    // colocar cor de fundo na div
    $(".papel_parede_conteudo_conversa_com_usuario").css("background", _cor);
  }

  // clicando na seta para fechar tela de papel de parede da conversa
  $(".icone_voltar_segura_conteudo_menu_papel_de_parede").click(function() {
    $(".papel_de_parede").animate({ width: "toggle" }, 170);
  });

  // passando o mouse e aplicando cores no chat em previu
  $(".cor_conteudo_papel_de_parede").hover(
    function() {
      var cor = $(this).data("cor");
      $(".papel_parede_conteudo_conversa_com_usuario").css("background", cor);
    },
    function() {
      $(".papel_parede_conteudo_conversa_com_usuario").css("background", _cor);
    }
  );

  // clicando nas cores para selecionar permanentemente e salvar no localstorage
  $(".cor_conteudo_papel_de_parede").click(function() {
    var cor = $(this).data("cor");
    _cor = cor;
    localStorage.setItem("cor", cor);
    $(".cor_conteudo_papel_de_parede").removeClass(
      "selecionada_cor_conteudo_papel_de_parede"
    );
    $(this).addClass("selecionada_cor_conteudo_papel_de_parede");
  });
});
