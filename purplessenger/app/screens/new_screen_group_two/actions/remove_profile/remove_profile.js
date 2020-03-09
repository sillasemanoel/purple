$(document).ready(function() {
  // cancelar o remover perfil
  $(
    ".butoon_cancelar_no_campo_segura_butoons_no_modal_remover_novo_grupo_tela_dois"
  ).click(function() {
    $("body").removeAttr("style", "overflow");
    $(".remover_novo_grupo_tela_dois").fadeOut(0);
  });

  //click do botao de confirmar e criar novo grupo
  $(
    ".butoon_remover_no_campo_segura_butoons_no_modal_remover_novo_grupo_tela_dois"
  ).click(function() {
    $("body").removeAttr("style", "overflow");
    $(".remover_novo_grupo_tela_dois").fadeOut(0);
    $(
      ".foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).css("background-image", "url(" + "" + ")");
    $(".input_recebe_foto_que_sera_aplicada_ao_novo_grupo_tela_dois").val("");
  });
});
