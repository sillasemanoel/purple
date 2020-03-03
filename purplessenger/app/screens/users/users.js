$(document).ready(function() {
  // clicando na seta para fechar tela de usuarios
  $(".icone_voltar_segura_conteudo_menu_usuarios").click(function() {
    $(".usuarios").animate({ width: "toggle" }, 170);
  });

  // clicando na lupa do busca
  $(".icone_lupa_no_campo_arredondado_no_campo_busca_usuarios").click(
    function() {
      $(".campo_busca_usuarios").css("background", "#fff");
      $(".icone_lupa_no_campo_arredondado_no_campo_busca_usuarios").fadeOut(0);
      $(".icone_seta_no_campo_arredondado_no_campo_busca_usuarios").fadeIn(0);
      $(".svg_icone_seta_no_campo_arredondado_no_campo_busca_usuarios").css(
        "animation",
        "seta_do_lupa_usuarios_girando 0.2s"
      );
      $(
        ".nome_disfarce_de_input_no_campo_arredondado_no_campo_busca_usuarios"
      ).fadeOut(0);
      $(".input_no_campo_arredondado_no_campo_busca_usuarios").fadeIn(0);
      $(".input_no_campo_arredondado_no_campo_busca_usuarios").trigger("focus");
    }
  );

  // clicando na seta de fechar/voltar do busca
  $(".icone_seta_no_campo_arredondado_no_campo_busca_usuarios").click(
    function() {
      $(".campo_busca_usuarios").css("background", "#f8f8f8");
      $(".icone_seta_no_campo_arredondado_no_campo_busca_usuarios").fadeOut(0);
      $(".icone_lupa_no_campo_arredondado_no_campo_busca_usuarios").fadeIn(0);
      $(".svg_icone_lupa_no_campo_arredondado_no_campo_busca_usuarios").css(
        "animation",
        "lupa_usuarios_girando 0.2s"
      );
      $(".input_no_campo_arredondado_no_campo_busca_usuarios").fadeOut(0);
      $(
        ".nome_disfarce_de_input_no_campo_arredondado_no_campo_busca_usuarios"
      ).fadeIn(0);
      $(".input_no_campo_arredondado_no_campo_busca_usuarios").val("");
      $(".icone_x_no_campo_arredondado_no_campo_busca_chat_usuarios").fadeOut(
        0
      );
      pesquisar("");
    }
  );

  // clicando no nome de disfarce("placeholder") do input do busca
  $(
    ".nome_disfarce_de_input_no_campo_arredondado_no_campo_busca_usuarios"
  ).click(function() {
    $(".campo_busca_usuarios").css("background", "#fff");
    $(".icone_lupa_no_campo_arredondado_no_campo_busca_usuarios").fadeOut(0);
    $(".icone_seta_no_campo_arredondado_no_campo_busca_usuarios").fadeIn(0);
    $(".svg_icone_seta_no_campo_arredondado_no_campo_busca_usuarios").css(
      "animation",
      "seta_do_lupa_usuarios_girando 0.2s"
    );
    $(
      ".nome_disfarce_de_input_no_campo_arredondado_no_campo_busca_usuarios"
    ).fadeOut(0);
    $(".input_no_campo_arredondado_no_campo_busca_usuarios").fadeIn(0);
    $(".input_no_campo_arredondado_no_campo_busca_usuarios").trigger("focus");
  });

  // se conter caracteres no input de busca ele ira mostrar um x para limpar o conteudo do input
  $(".input_no_campo_arredondado_no_campo_busca_usuarios").bind(
    "input",
    function() {
      var d = $(this).val();
      if (d != "") {
        $(".icone_x_no_campo_arredondado_no_campo_busca_chat_usuarios").fadeIn(
          0
        );
      } else {
        $(".icone_x_no_campo_arredondado_no_campo_busca_chat_usuarios").fadeOut(
          0
        );
      }
    }
  );

  // clicando no x para limpar o input
  $(".icone_x_no_campo_arredondado_no_campo_busca_chat_usuarios").click(
    function() {
      $(".icone_x_no_campo_arredondado_no_campo_busca_chat_usuarios").fadeOut(
        0
      );
      $(".input_no_campo_arredondado_no_campo_busca_usuarios").val("");
      $(".input_no_campo_arredondado_no_campo_busca_usuarios").trigger("focus");
      pesquisar("");
    }
  );

  // se o input de busca conter caracteres, ao clicar em determinados lugares ele não se fecha, mas se não conter caracteres ele ira se fechar
  $(
    ".tarja_roxa, .tarja_cinza, .menu_usuarios, .conteudo_usuarios, .chat_direito, .conversa_com_usuario"
  ).click(function() {
    var d = $(".input_no_campo_arredondado_no_campo_busca_usuarios").val();
    if (d == "") {
      $(".campo_busca_usuarios").css("background", "#f8f8f8");
      $(".icone_seta_no_campo_arredondado_no_campo_busca_usuarios").fadeOut(0);
      $(".icone_lupa_no_campo_arredondado_no_campo_busca_usuarios").fadeIn(0);
      $(".input_no_campo_arredondado_no_campo_busca_usuarios").fadeOut(0);
      $(
        ".nome_disfarce_de_input_no_campo_arredondado_no_campo_busca_usuarios"
      ).fadeIn(0);
      $(".input_no_campo_arredondado_no_campo_busca_usuarios").val("");
      $(".icone_x_no_campo_arredondado_no_campo_busca_chat_usuarios").fadeOut(
        0
      );
      pesquisar("");
    }
  });

  // lugares onde ao se clicar o imput de busca mesmo contendo caracteres ele ia se fechar
  $(
    ".icone_voltar_segura_conteudo_menu_usuarios, .criar_novo_grupo_usuarios, .usuario_no_conteudo_usuarios"
  ).click(function() {
    $(".campo_busca_usuarios").css("background", "#f8f8f8");
    $(".icone_seta_no_campo_arredondado_no_campo_busca_usuarios").fadeOut(0);
    $(".icone_lupa_no_campo_arredondado_no_campo_busca_usuarios").fadeIn(0);
    $(".input_no_campo_arredondado_no_campo_busca_usuarios").fadeOut(0);
    $(
      ".nome_disfarce_de_input_no_campo_arredondado_no_campo_busca_usuarios"
    ).fadeIn(0);
    $(".input_no_campo_arredondado_no_campo_busca_usuarios").val("");
    $(".icone_x_no_campo_arredondado_no_campo_busca_chat_usuarios").fadeOut(0);
    pesquisar("");
  });

  // fazendo busca no input de busca
  $(".input_no_campo_arredondado_no_campo_busca_usuarios").on(
    "keyup",
    function() {
      var value = $(this)
        .val()
        .toLowerCase();
      pesquisar(value);
    }
  );

  function pesquisar(value) {
    $(".conteudo_usuarios .busca_no_conteudo_usuarios").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  }

  // clicando no campo de criar um novo grupo
  $(".criar_novo_grupo_usuarios").click(function() {
    $(".novo_grupo_tela_um").fadeIn(0);
    $(".conteudo_novo_grupo_tela_um").animate({ scrollTop: 0 }, 0);
    $(
      ".input_de_busca_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
    ).trigger("focus");
  });

  // clicando no campo de usuario para poder conversar
  $(".usuario_no_conteudo_usuarios").click(function() {
    $(".usuarios").fadeIn(0);
  });
});
