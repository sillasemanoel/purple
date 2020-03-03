$(document).ready(function() {
  // clicando na seta para fechar tela de configuracoes
  $(".icone_voltar_segura_conteudo_menu_configuracao").click(function() {
    $(".configuracao").animate({ width: "toggle" }, 170);
  });

  // clicando para abrir perfil
  $(".meu_perfil_conteudo_configuracao").click(function() {
    $(".perfil").fadeIn(0);
    $(".campo_segura_altera_nome_no_conteudo_perfil").fadeIn(0);
    $(
      ".campo_segura_informacoes_funcionamento_do_nome_de_perfil_no_conteudo_perfil"
    ).fadeIn(0);
    $(".campo_segura_altera_recado_no_conteudo_perfil").fadeIn(0);
  });

  // clicando para abrir tela de papel de parede de conversa
  $(".papel_de_parede_conteudo_configuracao").click(function() {
    $(".papel_de_parede").fadeIn(0);
    $(".conteudo_papel_de_parede").animate({ scrollTop: 0 }, 0);
  });

  // clicando para abrir tela de ajuda
  $(".ajuda_conteudo_configuracao").click(function() {
    $(".ajuda").fadeIn(0);
    $(".conteudo_ajuda").animate({ scrollTop: 0 }, 0);
  });
});
