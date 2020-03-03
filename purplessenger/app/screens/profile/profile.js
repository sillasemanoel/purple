$(document).ready(function() {
  // clicando na seta para fechar tela de perfil
  $(".icone_voltar_segura_conteudo_menu_perfil").click(function() {
    $(".perfil").animate({ width: "toggle" }, 170);
    $(".campo_segura_altera_nome_no_conteudo_perfil").fadeOut(0);
    $(
      ".campo_segura_informacoes_funcionamento_do_nome_de_perfil_no_conteudo_perfil"
    ).fadeOut(0);
    $(".campo_segura_altera_recado_no_conteudo_perfil").fadeOut(0);
    $(
      ".input_no_campo_segura_input_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".icone_confirmar_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".nome_de_usuario_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      ".icone_caneta_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      ".campo_adicionais_para_implementar_ao_input_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
    ).fadeOut(0);
    $(".campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil").css(
      "border-bottom",
      "2px solid transparent"
    );
    $(
      ".textares_no_campo_segura_textarea_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".icone_confirmar_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".recado_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      ".icone_caneta_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      ".campo_adicionais_para_implementar_a_textarea_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).css("border-bottom", "2px solid transparent");
  });

  // passando o mouse sobre a foto do perfil
  $(".hover_no_foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil").hover(
    function() {
      $(
        ".icone_camera_no_hover_no_foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil"
      ).fadeToggle(0);
      $(
        ".descricao_no_hover_no_foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil"
      ).fadeToggle(0);
    }
  );

  // clicando para abrir modal com opcoes do que fazer em realacao a foto de perfil
  $(
    ".hover_no_foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil, .sem_hover_no_foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil"
  ).on("click", function(e) {
    $(
      ".hover_no_foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".sem_hover_no_foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      ".fundo_do_modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeIn(0);
    setTimeout(function() {
      $(
        "#modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil"
      ).removeClass(
        "animacao_no_modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil"
      );
    }, 300);
    $(
      "#modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).addClass(
      "animacao_no_modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    );
    $(
      "#modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeIn(0);
    var y = e.clientY;
    var localizay = y + 0;
    var x = e.clientX;
    var localizax = x + 0;
    console.log(e);
    document.getElementById(
      "modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).style.left = x + "px";
    document.getElementById(
      "modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).style.top = y + "px";
  });

  // fechando modal do que se fazer com o perfil
  $(
    ".tarja_roxa, .tarja_cinza, .menu_perfil, .fundo_do_modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil, .ver_perfil_no_modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil, .carregar_foto_no_modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil, .remover_foto_no_modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil, .chat_direito, .conversa_com_usuario"
  ).click(function() {
    $(
      ".sem_hover_no_foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".hover_no_foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      ".fundo_do_modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      "#modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeOut(0);
  });

  // clicando na opcao ver perfil
  $(
    ".ver_perfil_no_modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil"
  ).click(function() {
    $("body").css("overflow", "hidden");
    $(
      ".sem_hover_no_foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".hover_no_foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      "#modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeOut(0);
    $(".ver_perfil").fadeIn(0);
  });

  // clicando na opcao alterar foto de perfil
  $(
    ".carregar_foto_no_modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil"
  ).click(function() {
    $(".input_recebe_foto_que_sera_aplicada_ao_perfil").trigger("click");
    $(
      ".sem_hover_no_foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".hover_no_foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      "#modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeOut(0);
  });

  // se eu selecionar uma foto nas pastas e confirmar o input deixara de ser vazio e mostrara a tela de confirmar alteracao
  $(".input_recebe_foto_que_sera_aplicada_ao_perfil").bind("input", function() {
    var d = $(this).val();
    if (d != "") {
      $("body").css("overflow", "hidden");
      $(".alterar_perfil").fadeIn(0);
    }
  });

  // enviando o file para porcessar o base64
  $(".input_recebe_foto_que_sera_aplicada_ao_perfil").change(function() {
    const file = $(this)[0].files[0];
    if (file) {
      visualizar_imagem_selecionada_no_perfil(file);
    }
  });

  // clicando na opcao remover foto de perfil
  $(
    ".remover_foto_no_modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil"
  ).click(function() {
    $("body").css("overflow", "hidden");
    $(
      ".sem_hover_no_foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".hover_no_foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      "#modal_das_opcoes_do_que_fazer_ao_perfil_no_campo_segura_perfil_no_conteudo_perfil"
    ).fadeOut(0);
    $(".remover_perfil").fadeIn(0);
  });

  // clicando na caneta para alterar nome de perfil
  $(
    ".icone_caneta_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
  ).click(function() {
    $(
      ".nome_de_usuario_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".icone_caneta_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".input_no_campo_segura_input_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      ".icone_confirmar_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      ".campo_adicionais_para_implementar_ao_input_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
    ).fadeIn(0);
    $(".campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil").css(
      "border-bottom",
      "2px solid #943ce6"
    );
    $(
      ".input_no_campo_segura_input_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
    ).trigger("focus");
  });

  // clicando no confirmar altera nome de perfil
  $(
    ".icone_confirmar_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
  ).click(function() {
    $(
      ".input_no_campo_segura_input_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".icone_confirmar_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".nome_de_usuario_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      ".icone_caneta_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      ".campo_adicionais_para_implementar_ao_input_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
    ).fadeOut(0);
    $(".campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil").css(
      "border-bottom",
      "2px solid transparent"
    );
  });

  // contador de caracteres do input de alterar nome de perfil
  $(
    ".input_no_campo_segura_input_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil"
  ).keyup(function() {
    var maxLength = parseInt($(this).attr("maxlength"));
    var length = $(this).val().length;
    var newLength = maxLength - length;
    var remains = $(this).attr("name");
    $(
      '.contar_caracteres_do_input_no_campo_adicionais_para_implementar_ao_input_no_campo_segura_acoes_no_campo_segura_altera_nome_no_conteudo_perfil[name="' +
        remains +
        '"]'
    ).text(newLength);
  });

  // clicando na caneta para alterar recado de perfil
  $(
    ".icone_caneta_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
  ).click(function() {
    $(
      ".recado_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".icone_caneta_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".textares_no_campo_segura_textarea_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      ".icone_confirmar_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      ".campo_adicionais_para_implementar_a_textarea_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      ".campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).css("border-bottom", "2px solid #943ce6");
    $(
      ".textares_no_campo_segura_textarea_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).trigger("focus");
  });

  // clicando no confirmar altera recado de perfil
  $(
    ".icone_confirmar_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
  ).click(function() {
    $(
      ".textares_no_campo_segura_textarea_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".icone_confirmar_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".recado_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      ".icone_caneta_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).fadeIn(0);
    $(
      ".campo_adicionais_para_implementar_a_textarea_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).fadeOut(0);
    $(
      ".campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
    ).css("border-bottom", "2px solid transparent");
  });

  // contador de caracteres da textarea de alterar recado de perfil
  $(
    ".textares_no_campo_segura_textarea_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
  ).keyup(function() {
    var maxLength = parseInt($(this).attr("maxlength"));
    var length = $(this).val().length;
    var newLength = maxLength - length;
    var remains = $(this).attr("name");
    $(
      '.contar_caracteres_da_textarea_no_campo_adicionais_para_implementar_a_textarea_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil[name="' +
        remains +
        '"]'
    ).text(newLength);
    if (length > 89) {
      $(
        ".contar_caracteres_da_textarea_no_campo_adicionais_para_implementar_a_textarea_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
      ).fadeIn(0);
    } else {
      $(
        ".contar_caracteres_da_textarea_no_campo_adicionais_para_implementar_a_textarea_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
      ).fadeOut(0);
    }
  });

  // quebra de linha da textarea de forma responsiva
  var textarea = document.querySelector(
    ".textares_no_campo_segura_textarea_no_campo_segura_acoes_no_campo_segura_altera_recado_no_conteudo_perfil"
  );
  textarea.addEventListener("keydown", autosize);
  function autosize() {
    var el = this;
    setTimeout(function() {
      el.style.cssText = "height:auto; padding:0";
      el.style.cssText = "height:" + el.scrollHeight + "px";
      $(".conteudo_perfil").animate({ scrollTop: 9999999999999999999999 }, 0);
    }, 0);
  }
});
