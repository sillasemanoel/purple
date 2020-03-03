$(document).ready(function() {
  // fechando o confirma altera perfil
  $(
    ".icone_fechar_no_campo_segura_icone_fechar_no_menu_do_modal_de_confirmar_alterar_perfil"
  ).click(function() {
    $("body").removeAttr("style", "overflow");
    $(".alterar_perfil").fadeOut(0);
  });

  // click na opcao de tentar novamente pra escolher outra foto
  $(
    ".icone_tentar_novamente_no_menu_do_modal_de_confirmar_alterar_perfil, .descricao_tentar_novamente_no_menu_do_modal_de_confirmar_alterar_perfil"
  ).click(function() {
    $(".input_recebe_foto_que_sera_aplicada_ao_perfil").trigger("click");
  });

  let result;

  // confirmando a alteracao de perfil
  $(
    ".botao_confirma_no_campo_confirma_do_modal_de_confirmar_alterar_perfil"
  ).click(function() {
    $("body").removeAttr("style", "overflow");
    definir_imagem_selecionada_perfil();
    $(".alterar_perfil").fadeOut(0);
  });
});

/**
 * salva
 *
 * @param {String} result
 */
function definir_imagem_selecionada_perfil() {
  $(
    ".foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil, .foto_perfil_no_menu_chat_esquerdo, .foto_de_perfil_no_menu_ver_perfil, .foto_perfil_no_meu_perfil_conteudo_configuracao"
  ).css("background-image", "url(" + result + ")");
  $(".img_perfil_no_conteudo_ver_perfil").attr("src", result);
}

/**
 * recebe o file para porcessar o base64 em seguida mostra no modal
 *
 * @param {FileReader} file
 */
function visualizar_imagem_selecionada_no_perfil(file) {
  const fileReader = new FileReader();
  fileReader.onloadend = function() {
    // seta o base64 no result
    result = fileReader.result;

    $(".img_no_conteudo_do_modal_de_confirmar_alterar_perfil").attr(
      "src",
      fileReader.result
    );
  };
  fileReader.readAsDataURL(file);
}
