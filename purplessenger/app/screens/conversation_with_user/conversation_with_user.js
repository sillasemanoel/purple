$(document).ready(function() {
  // clicando em barra de menu
  $(".campo_perfil_no_menu_conversa_com_usuario").click(function() {
    $(".dados_usuario").fadeIn(0);
    $(".chat_esquerdo").addClass("chat_esquerdo_aplica");
    $(".modal_com_opcoes_menu_chat_esquerdo").addClass("modal_com_opcoes_menu_chat_esquerdo_aplica");
    $(".perfil, .usuarios, .novo_grupo_tela_um, .novo_grupo_tela_dois, .configuracao, .papel_de_parede, .ajuda").removeClass("chat_esquerdo_absolute_normal_aplica");
    $(".perfil, .usuarios, .novo_grupo_tela_um, .novo_grupo_tela_dois, .configuracao, .papel_de_parede, .ajuda").addClass("chat_esquerdo_absolute_menor_aplica");
    $(".conversa_com_usuario").addClass("conversa_com_usuario_aplica");
    $(".file_anexo_icones_menu_conversa_com_usuario").addClass("file_anexo_icones_menu_conversa_com_usuario_aplica");
    $(".modal_opcoes_icones_menu_conversa_com_usuario").addClass("modal_opcoes_icones_menu_conversa_com_usuario_aplica");
    $(".pre_visualizar_midia_conversa_com_usuario").addClass("pre_visualizar_midia_conversa_com_usuario_aplica");
});

  // clicando em icone de anexo
  $(".anexo_icones_menu_conversa_com_usuario").click(function() {
    $(".anexo_icones_menu_conversa_com_usuario").fadeOut(0);
    $(".anexo_icones_menu_conversa_com_usuario_hover").fadeIn(0);
    $(".file_anexo_icones_menu_conversa_com_usuario").fadeIn(0);
  });

  // fechando as opcoes abertas de anexo
  $(
    ".tarja_roxa, .tarja_cinza, .anexo_icones_menu_conversa_com_usuario_hover, .campo_perfil_no_menu_conversa_com_usuario, .buscar_icones_menu_conversa_com_usuario, .opcoes_icones_menu_conversa_com_usuario, .conteudo_conversa_com_usuario, .rodape_conversa_com_usuario, .chat_esquerdo, .perfil, .usuarios, .novo_grupo_tela_um, .novo_grupo_tela_dois, .configuracao, .papel_de_parede, .ajuda"
  ).click(function() {
    $(".anexo_icones_menu_conversa_com_usuario_hover").fadeOut(0);
    $(".anexo_icones_menu_conversa_com_usuario").fadeIn(0);
    $(".file_anexo_icones_menu_conversa_com_usuario").fadeOut(0);
  });

  // clicando na opcao selecionar midia
  $(".file_anexo_icones_menu_conversa_com_usuario").click(function() {
    $(".input_file_anexo_icones_menu_conversa_com_usuario").trigger("click");
  });

  // enviando o file para porcessar o base64
  $(".input_file_anexo_icones_menu_conversa_com_usuario").change(function() {
    const file = $(this)[0].files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function() {
      $(
        ".img_segura_midia_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).attr("src", fileReader.result);
    };
    fileReader.readAsDataURL(file);
  });

  // se selecionada file o previu aparece
  $(".input_file_anexo_icones_menu_conversa_com_usuario").bind(
    "input",
    function() {
      var d = $(this).val();
      if (d != "") {
        $(".anexo_icones_menu_conversa_com_usuario_hover").fadeOut(0);
        $(".anexo_icones_menu_conversa_com_usuario").fadeIn(0);
        $(".file_anexo_icones_menu_conversa_com_usuario").fadeOut(0);
        $(".pre_visualizar_midia_conversa_com_usuario").slideDown(300);
      } else {
        $(".pre_visualizar_midia_conversa_com_usuario").fadeOut(0);
      }
    }
  );

  // clicando em icone de opcoes
  $(".opcoes_icones_menu_conversa_com_usuario").click(function() {
    $(".opcoes_icones_menu_conversa_com_usuario").fadeOut(0);
    $(".opcoes_icones_menu_conversa_com_usuario_hover").fadeIn(0);
    $(".modal_opcoes_icones_menu_conversa_com_usuario").fadeIn(0);
  });

  // fechando o modal com opcoes
  $(
    ".tarja_roxa, .tarja_cinza, .opcoes_icones_menu_conversa_com_usuario_hover, .campo_perfil_no_menu_conversa_com_usuario, .buscar_icones_menu_conversa_com_usuario, .anexo_icones_menu_conversa_com_usuario, .conteudo_conversa_com_usuario, .rodape_conversa_com_usuario, .chat_esquerdo, .perfil, .usuarios, .novo_grupo_tela_um, .novo_grupo_tela_dois, .configuracao, .papel_de_parede, .ajuda"
  ).click(function() {
    $(".opcoes_icones_menu_conversa_com_usuario_hover").fadeOut(0);
    $(".opcoes_icones_menu_conversa_com_usuario").fadeIn(0);
    $(".modal_opcoes_icones_menu_conversa_com_usuario").fadeOut(0);
  });

  // clicando em icone de fechar o previu
  $(".icone_fechar_menu_pre_visualizar_midia_conversa_com_usuario").click(
    function() {
      $(".pre_visualizar_midia_conversa_com_usuario").slideUp(300);
      $(".input_file_anexo_icones_menu_conversa_com_usuario").val("");
      $(
        ".textarea_segura_textarea_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).val("");
      $(
        ".textarea_segura_textarea_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).css("height", "22px");
      $(
        ".icone_fechar_implementar_segura_textarea_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).fadeOut(0);
      $(
        ".text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).addClass(
        "text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario_aplcia_js"
      );
      $(
        ".text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).removeClass(
        "text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario_aplcia_animacao_encolhe_js"
      );
      $(
        ".text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).addClass(
        "text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario_aplcia_animacao_cresce_js"
      );
    }
  );

  // quebra de linha da textarea de forma responsiva
  var textarea = document.querySelector(
    ".textarea_segura_textarea_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
  );
  textarea.addEventListener("keydown", autosize);
  function autosize() {
    var el = this;
    setTimeout(function() {
      el.style.cssText = "height:auto; padding:0";
      el.style.cssText = "height:" + el.scrollHeight + "px";
    }, 0);
  }

  // se o textarea conter texto o nome adicionar legenda se encolhera para cima se caso não ira para baixo(previu)
  $(
    ".textarea_segura_textarea_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
  ).bind("input", function() {
    var d = $(this).val();
    if (d != "") {
      $(
        ".text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).removeClass(
        "text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario_aplcia_js"
      );
      $(
        ".text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).addClass(
        "text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario_aplcia_animacao_encolhe_js"
      );
      $(
        ".text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).removeClass(
        "text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario_aplcia_animacao_cresce_js"
      );
      $(
        ".icone_fechar_implementar_segura_textarea_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).fadeIn(0);
    } else {
      $(
        ".text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).addClass(
        "text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario_aplcia_js"
      );
      $(
        ".text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).removeClass(
        "text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario_aplcia_animacao_encolhe_js"
      );
      $(
        ".text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).addClass(
        "text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario_aplcia_animacao_cresce_js"
      );
      $(
        ".icone_fechar_implementar_segura_textarea_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).fadeOut(0);
    }
  });

  // clicando em icone x limpar textarea de previu
  $(
    ".icone_fechar_implementar_segura_textarea_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
  ).click(function() {
    $(
      ".textarea_segura_textarea_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
    ).val("");
    $(
      ".textarea_segura_textarea_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
    ).css("height", "22px");
    $(
      ".text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
    ).addClass(
      "text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario_aplcia_js"
    );
    $(
      ".text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
    ).removeClass(
      "text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario_aplcia_animacao_encolhe_js"
    );
    $(
      ".text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
    ).addClass(
      "text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario_aplcia_animacao_cresce_js"
    );
    $(
      ".icone_fechar_implementar_segura_textarea_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
    ).fadeOut(0);
  });

  // clicando em icone de enviar
  $(".botao_rodape_pre_visualizar_midia_conversa_com_usuario").click(
    function() {
      $(".pre_visualizar_midia_conversa_com_usuario").fadeOut(0);
      $(".input_file_anexo_icones_menu_conversa_com_usuario").val("");
      $(
        ".textarea_segura_textarea_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).val("");
      $(
        ".textarea_segura_textarea_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).css("height", "22px");
      $(
        ".icone_fechar_implementar_segura_textarea_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).fadeOut(0);
      $(
        ".text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).addClass(
        "text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario_aplcia_js"
      );
      $(
        ".text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).removeClass(
        "text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario_aplcia_animacao_encolhe_js"
      );
      $(
        ".text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario"
      ).addClass(
        "text_descricao_campo_legenda_conteudo_pre_visualizar_midia_conversa_com_usuario_aplcia_animacao_cresce_js"
      );
    }
  );

  // clicando no icone emoji
  $(".icone_emoji_campo_emoji_rodape_conversa_com_usuario").click(function() {
    $(".icone_emoji_campo_emoji_rodape_conversa_com_usuario").addClass(
      "icone_emoji_campo_emoji_rodape_conversa_com_usuario_aplica"
    );
    $(".cor_icone_emoji_campo_emoji_rodape_conversa_com_usuario").css(
      "fill",
      "#8a2be2"
    );
    $(".cor_icone_emoji_campo_emoji_rodape_conversa_com_usuario").css(
      "opacity",
      "1"
    );
    $(".cor_icone_gif_campo_emoji_rodape_conversa_com_usuario").css(
      "fill",
      "#8d9193"
    );
    $(".cor_icone_sticker_campo_emoji_rodape_conversa_com_usuario").css(
      "fill",
      "#8d9193"
    );
    $(".icone_fecha_campo_emoji_rodape_conversa_com_usuario").fadeIn(0);
    $(".icone_gif_campo_emoji_rodape_conversa_com_usuario").fadeIn(0);
    $(".icone_sticker_campo_emoji_rodape_conversa_com_usuario").fadeIn(0);
  });

  // clicando no x dos icone emoji para fechar
  $(".icone_fecha_campo_emoji_rodape_conversa_com_usuario").click(function() {
    $(".icone_emoji_campo_emoji_rodape_conversa_com_usuario").removeClass(
      "icone_emoji_campo_emoji_rodape_conversa_com_usuario_aplica"
    );
    $(".cor_icone_emoji_campo_emoji_rodape_conversa_com_usuario").css(
      "fill",
      "#263238"
    );
    $(".cor_icone_emoji_campo_emoji_rodape_conversa_com_usuario").css(
      "opacity",
      ".45"
    );
    $(".cor_icone_gif_campo_emoji_rodape_conversa_com_usuario").css(
      "fill",
      "#8d9193"
    );
    $(".cor_icone_sticker_campo_emoji_rodape_conversa_com_usuario").css(
      "fill",
      "#8d9193"
    );
    $(".icone_fecha_campo_emoji_rodape_conversa_com_usuario").fadeOut(0);
    $(".icone_gif_campo_emoji_rodape_conversa_com_usuario").fadeOut(0);
    $(".icone_sticker_campo_emoji_rodape_conversa_com_usuario").fadeOut(0);
  });

  // clicando no icone dos icone gif
  $(".icone_gif_campo_emoji_rodape_conversa_com_usuario").click(function() {
    $(".cor_icone_emoji_campo_emoji_rodape_conversa_com_usuario").css(
      "fill",
      "#263238"
    );
    $(".cor_icone_emoji_campo_emoji_rodape_conversa_com_usuario").css(
      "opacity",
      ".45"
    );
    $(".cor_icone_gif_campo_emoji_rodape_conversa_com_usuario").css(
      "fill",
      "#8a2be2"
    );
    $(".cor_icone_sticker_campo_emoji_rodape_conversa_com_usuario").css(
      "fill",
      "#8d9193"
    );
  });

  // clicando no icone dos icone sticker
  $(".icone_sticker_campo_emoji_rodape_conversa_com_usuario").click(function() {
    $(".cor_icone_emoji_campo_emoji_rodape_conversa_com_usuario").css(
      "fill",
      "#263238"
    );
    $(".cor_icone_emoji_campo_emoji_rodape_conversa_com_usuario").css(
      "opacity",
      ".45"
    );
    $(".cor_icone_gif_campo_emoji_rodape_conversa_com_usuario").css(
      "fill",
      "#8d9193"
    );
    $(".cor_icone_sticker_campo_emoji_rodape_conversa_com_usuario").css(
      "fill",
      "#8a2be2"
    );
  });

  // quebra de linha da textarea de forma responsiva
  var textarea = document.querySelector(
    ".textarea_campo_msg_rodape_conversa_com_usuario"
  );
  textarea.addEventListener("keydown", autosize);
  function autosize() {
    var el = this;
    setTimeout(function() {
      el.style.cssText = "height:auto; padding:0";
      el.style.cssText = "height:" + el.scrollHeight + "px";
    }, 0);
  }
});
