$(document).ready(function() {
  // abrindo tela de perfil
  $(".foto_perfil_no_menu_chat_esquerdo, .opcao_perfil_chat_esquerdo").click(
    function() {
      $(".perfil").animate({ width: "toggle" }, 170);
      $(".campo_segura_altera_nome_no_conteudo_perfil").fadeIn(0);
      $(
        ".campo_segura_informacoes_funcionamento_do_nome_de_perfil_no_conteudo_perfil"
      ).fadeIn(0);
      $(".campo_segura_altera_recado_no_conteudo_perfil").fadeIn(0);
      $(".conteudo_perfil").animate({ scrollTop: 0 }, 0);
    }
  );

  // abrindo tela de buscar usuarios
  $(".icone_entra_na_tela_usuarios_segura_icones_menu_chat_esquerdo").click(
    function() {
      $(".usuarios").animate({ width: "toggle" }, 170);
      $(".conteudo_usuarios").animate({ scrollTop: 0 }, 0);
    }
  );

  // clicando em icone para abrir modal de opcoes
  $(".icone_abre_modal_com_opcoes_segura_icones_menu_chat_esquerdo").click(
    function() {
      $(
        ".icone_abre_modal_com_opcoes_segura_icones_menu_chat_esquerdo"
      ).fadeOut(0);
      $(
        ".icone_abre_modal_com_opcoes_segura_icones_menu_chat_esquerdo_hover"
      ).fadeIn(0);
      $(".modal_com_opcoes_menu_chat_esquerdo").fadeIn(0);
    }
  );

  // fechando o modal com opcoes
  $(
    ".tarja_roxa, .tarja_cinza, .campo_segura_conteudo_no_menu_chat_esquerdo, .icone_entra_na_tela_usuarios_segura_icones_menu_chat_esquerdo, .icone_abre_modal_com_opcoes_segura_icones_menu_chat_esquerdo_hover, .opcao_novo_grupo_chat_esquerdo, .opcao_perfil_chat_esquerdo, .opcao_configuracoes_chat_esquerdo, .campo_busca_chat_esquerdo, .conteudo_chat_esquerdo, .chat_direito, .conversa_com_usuario"
  ).click(function() {
    $(
      ".icone_abre_modal_com_opcoes_segura_icones_menu_chat_esquerdo_hover"
    ).fadeOut(0);
    $(".icone_abre_modal_com_opcoes_segura_icones_menu_chat_esquerdo").fadeIn(
      0
    );
    $(".modal_com_opcoes_menu_chat_esquerdo").fadeOut(0);
  });

  // clicando na opcao de novo grupo para abrir tela de novo grupo
  $(".opcao_novo_grupo_chat_esquerdo").click(function() {
    $(".novo_grupo_tela_um").animate({ width: "toggle" }, 170);
    $(".conteudo_novo_grupo_tela_um").animate({ scrollTop: 0 }, 0);
    $(
      ".input_de_busca_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
    ).trigger("focus");
  });

  // clicando na opcao de configuracoes para abrir tela de configuracoes
  $(".opcao_configuracoes_chat_esquerdo").click(function() {
    $(".configuracao").animate({ width: "toggle" }, 170);
    $(".conteudo_configuracao").animate({ scrollTop: 0 }, 0);
  });

  // clicando na lupa do busca
  $(".icone_lupa_no_campo_arredondado_no_campo_busca_chat_esquerdo").click(
    function() {
      $(".campo_busca_chat_esquerdo").css("background", "transparent");
      $(
        ".icone_lupa_no_campo_arredondado_no_campo_busca_chat_esquerdo"
      ).fadeOut(0);
      $(".icone_seta_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeIn(
        0
      );
      $(".icone_seta_no_campo_arredondado_no_campo_busca_chat_esquerdo").css(
        "animation",
        "seta_do_lupa_chat_esquerdo_girando 0.2s"
      );
      $(
        ".nome_disfarce_de_input_no_campo_arredondado_no_campo_busca_chat_esquerdo"
      ).fadeOut(0);
      $(".input_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeIn(0);
      $(".input_no_campo_arredondado_no_campo_busca_chat_esquerdo").trigger(
        "focus"
      );
    }
  );

  // clicando na seta de fechar/voltar do busca
  $(".icone_seta_no_campo_arredondado_no_campo_busca_chat_esquerdo").click(
    function() {
      $(".campo_busca_chat_esquerdo").css("background", "#f8f8f8");
      $(
        ".icone_seta_no_campo_arredondado_no_campo_busca_chat_esquerdo"
      ).fadeOut(0);
      $(".icone_lupa_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeIn(
        0
      );
      $(
        ".svg_icone_lupa_no_campo_arredondado_no_campo_busca_chat_esquerdo"
      ).css("animation", "lupa_chat_esquerdo_girando 0.2s");
      $(".input_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeOut(0);
      $(
        ".nome_disfarce_de_input_no_campo_arredondado_no_campo_busca_chat_esquerdo"
      ).fadeIn(0);
      $(".input_no_campo_arredondado_no_campo_busca_chat_esquerdo").val("");
      $(".icone_x_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeOut(
        0
      );
      pesquisar("");
    }
  );

  // clicando no nome de disfarce("placeholder") do input do busca
  $(
    ".nome_disfarce_de_input_no_campo_arredondado_no_campo_busca_chat_esquerdo"
  ).click(function() {
    $(".campo_busca_chat_esquerdo").css("background", "transparent");
    $(".icone_lupa_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeOut(
      0
    );
    $(".icone_seta_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeIn(
      0
    );
    $(".icone_seta_no_campo_arredondado_no_campo_busca_chat_esquerdo").css(
      "animation",
      "seta_do_lupa_chat_esquerdo_girando 0.2s"
    );
    $(
      ".nome_disfarce_de_input_no_campo_arredondado_no_campo_busca_chat_esquerdo"
    ).fadeOut(0);
    $(".input_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeIn(0);
    $(".input_no_campo_arredondado_no_campo_busca_chat_esquerdo").trigger(
      "focus"
    );
  });

  // se conter caracteres no input do busca ele ira mostrar um x para limpar o conteudo
  $(".input_no_campo_arredondado_no_campo_busca_chat_esquerdo").bind(
    "input",
    function() {
      var d = $(this).val();
      if (d != "") {
        $(".icone_x_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeIn(
          0
        );
      } else {
        $(".icone_x_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeOut(
          0
        );
      }
    }
  );

  // clicando no x para limpar o input
  $(".icone_x_no_campo_arredondado_no_campo_busca_chat_esquerdo").click(
    function() {
      $(".icone_x_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeOut(
        0
      );
      $(".input_no_campo_arredondado_no_campo_busca_chat_esquerdo").val("");
      $(".input_no_campo_arredondado_no_campo_busca_chat_esquerdo").trigger(
        "focus"
      );
      pesquisar("");
    }
  );

  // fazendo busca no input de buscar
  $(".input_no_campo_arredondado_no_campo_busca_chat_esquerdo").on(
    "keyup",
    function() {
      var value = $(this)
        .val()
        .toLowerCase();
      pesquisar(value);
    }
  );

  function pesquisar(value) {
    $(".conteudo_chat_esquerdo .busca_conteudo_chat_esquerdo").filter(
      function() {
        $(this).toggle(
          $(this)
            .text()
            .toLowerCase()
            .indexOf(value) > -1
        );
      }
    );
  }

  // se o input de busca conter caracteres, ao clicar em determinados lugares ele não se fecha, mas se não conter caracteres ele ira se fechar
  $(
    ".tarja_roxa, .tarja_cinza, .menu_chat_esquerdo, .conteudo_chat_esquerdo, .chat_direito, .conversa_com_usuario"
  ).click(function() {
    var d = $(".input_no_campo_arredondado_no_campo_busca_chat_esquerdo").val();
    if (d == "") {
      $(".campo_busca_chat_esquerdo").css("background", "#f8f8f8");
      $(
        ".icone_seta_no_campo_arredondado_no_campo_busca_chat_esquerdo"
      ).fadeOut(0);
      $(".icone_lupa_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeIn(
        0
      );
      $(".input_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeOut(0);
      $(
        ".nome_disfarce_de_input_no_campo_arredondado_no_campo_busca_chat_esquerdo"
      ).fadeIn(0);
      $(".input_no_campo_arredondado_no_campo_busca_chat_esquerdo").val("");
      $(".icone_x_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeOut(
        0
      );
      pesquisar("");
    }
  });

  // lugares onde ao se clicar o input de busca mesmo contendo caracteres ele ia se fechar
  $(
    ".foto_perfil_no_menu_chat_esquerdo, .icone_entra_na_tela_usuarios_segura_icones_menu_chat_esquerdo, .opcao_novo_grupo_chat_esquerdo, .opcao_perfil_chat_esquerdo, .opcao_configuracoes_chat_esquerdo, .busca_conteudo_chat_esquerdo"
  ).click(function() {
    $(".campo_busca_chat_esquerdo").css("background", "#f8f8f8");
    $(".icone_seta_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeOut(
      0
    );
    $(".icone_lupa_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeIn(
      0
    );
    $(".input_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeOut(0);
    $(
      ".nome_disfarce_de_input_no_campo_arredondado_no_campo_busca_chat_esquerdo"
    ).fadeIn(0);
    $(".input_no_campo_arredondado_no_campo_busca_chat_esquerdo").val("");
    $(".icone_x_no_campo_arredondado_no_campo_busca_chat_esquerdo").fadeOut(0);
    pesquisar("");
  });

  // clicando em usuario para abrir conversa
  $(".conversa_com_usuario_conteudo_chat_esquerdo").click(function() {
    $(".conversa_com_usuario").fadeIn(0);
    $(".papel_parede_conteudo_conversa_com_usuario").animate(
      { scrollTop: 9999999999999999999999 },
      0
    );
    $(".chat_direito").fadeOut(0);
  });
});
