$(document).ready(function() {
  // clicando na seta para fechar tela de ajuda
  $(".icone_voltar_segura_conteudo_menu_ajuda").click(function() {
    $(".ajuda").animate({ width: "toggle" }, 170);
  });

  // clicando da opcao fale conosco
  $(".fale_conosco_conteudo_ajuda").click(function() {
    $("body").css("overflow", "hidden");
    $(".fale_conosco").fadeIn(0);
  });
});
