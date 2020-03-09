$(document).ready(function() {
  // fechando/cancelando o confirma altera perfil
  $(
    ".icone_fechar_no_campo_segura_icone_fechar_no_menu_do_modal_de_confirmar_alterar_perfil_novo_grupo_tela_dois"
  ).click(function() {
    $("body").removeAttr("style", "overflow");
    $(".alterar_perfil_novo_grupo_tela_dois").fadeOut(0);
    $(".input_recebe_foto_que_sera_aplicada_ao_novo_grupo_tela_dois").val("");
  });

  // click na opcao de tentar novamente pra escolher outra foto
  $(
    ".icone_tentar_novamente_no_menu_do_modal_de_confirmar_alterar_perfil_novo_grupo_tela_dois, .descricao_tentar_novamente_no_menu_do_modal_de_confirmar_alterar_perfil_novo_grupo_tela_dois"
  ).click(function() {
    $(".input_recebe_foto_que_sera_aplicada_ao_novo_grupo_tela_dois").trigger(
      "click"
    );
  });

  let result;

  // confirmando a alteracao de perfil
  $(
    ".botao_confirma_no_campo_confirma_do_modal_de_confirmar_alterar_perfil_novo_grupo_tela_dois"
  ).click(function() {
    $("body").removeAttr("style", "overflow");
    definir_imagem_selecionada_perfil_novo_grupo_tela_dois();
    $(".alterar_perfil_novo_grupo_tela_dois").fadeOut(0);
  });
});

/**
 * salva
 *
 * @param {String} result
 */
function definir_imagem_selecionada_perfil_novo_grupo_tela_dois() {
  $(
    ".foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
  ).css("background-image", "url(" + result + ")");
}

/**
 * recebe o file para porcessar o base64 em seguida mostra no modal
 *
 * @param {FileReader} file
 */
function visualizar_imagem_selecionada_no_perfil_de_novo_grupo_tela_dois(file) {
  const fileReader = new FileReader();
  fileReader.onloadend = function() {
    // seta o base64 no result
    result = fileReader.result;

    $(
      ".img_no_conteudo_do_modal_de_confirmar_alterar_perfil_novo_grupo_tela_dois"
    ).attr("src", fileReader.result);
  };
  fileReader.readAsDataURL(file);
}
