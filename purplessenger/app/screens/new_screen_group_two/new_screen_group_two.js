$(document).ready(function() {
  // clicando na seta para fechar tela de criar novo grupo dois
  $(".icone_voltar_segura_conteudo_menu_novo_grupo_tela_dois").click(
    function() {
      $(".novo_grupo_tela_dois").animate({ width: "toggle" }, 170);
      $(
        ".foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
      ).css("background-image", "url(" + "" + ")");
      $(".input_recebe_foto_que_sera_aplicada_ao_novo_grupo_tela_dois").val("");
      $(".input_no_campo_nome_do_grupo_no_conteudo_novo_grupo_tela_dois").val(
        ""
      );
      $(
        ".descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois"
      ).addClass(
        "descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois_aplcia_js"
      );
      $(
        ".descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois"
      ).removeClass(
        "descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois_aplcia_animacao_encolhe_js"
      );
      $(
        ".descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois"
      ).addClass(
        "descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois_aplcia_animacao_cresce_js"
      );
      $(
        ".button_criar_novo_grupo_no_campo_do_button_no_conteudo_novo_grupo_tela_dois"
      ).fadeOut(0);

      $(
        ".contar_caracteres_do_input_no_campo_adicionais_para_implementar_ao_input_no_campo_nome_do_grupo_no_conteudo_novo_grupo_tela_dois"
      ).text(25);
    }
  );

  // passando o mouse sobre a foto do novo grupo tela dois
  $(
    ".hover_no_foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
  ).hover(function() {
    $(
      ".icone_camera_no_hover_no_foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).fadeToggle(0);
    $(
      ".descricao_no_hover_no_foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).fadeToggle(0);
  });

  // clicando para abrir modal com opcoes do que fazer em realacao a foto de novo grupo tela dois
  $(
    ".hover_no_foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois, .sem_hover_no_foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
  ).on("click", function(e) {
    $(
      ".hover_no_foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).fadeOut(0);
    $(
      ".sem_hover_no_foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).fadeIn(0);
    $(
      ".fundo_do_modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).fadeIn(0);
    setTimeout(function() {
      $(
        "#modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
      ).removeClass(
        "animacao_no_modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
      );
    }, 300);
    $(
      "#modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).addClass(
      "animacao_no_modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    );
    $(
      "#modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).fadeIn(0);
    var y = e.clientY;
    var localizay = y + 0;
    var x = e.clientX;
    var localizax = x + 0;
    console.log(e);
    document.getElementById(
      "modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).style.left = x + "px";
    document.getElementById(
      "modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).style.top = y + "px";
  });

  // fechando modal do que se fazer com o novo grupo tela dois
  $(
    ".tarja_roxa, .tarja_cinza, .menu_novo_grupo_tela_dois, .fundo_do_modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois, .carregar_foto_no_modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois, .remover_foto_no_modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois, .input_no_campo_nome_do_grupo_no_conteudo_novo_grupo_tela_dois, .button_criar_novo_grupo_no_campo_do_button_no_conteudo_novo_grupo_tela_dois, .chat_direito, .conversa_com_usuario"
  ).click(function() {
    $(
      ".sem_hover_no_foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).fadeOut(0);
    $(
      ".hover_no_foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).fadeIn(0);
    $(
      ".fundo_do_modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).fadeOut(0);
    $(
      "#modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).fadeOut(0);
  });

  // clicando na opcao de alterar foto de novo grupo tela dois
  $(
    ".carregar_foto_no_modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
  ).click(function() {
    $(".input_recebe_foto_que_sera_aplicada_ao_novo_grupo_tela_dois").trigger(
      "click"
    );
    $(
      ".sem_hover_no_foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).fadeOut(0);
    $(
      ".hover_no_foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).fadeIn(0);
    $(
      "#modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).fadeOut(0);
  });

  // se eu selecionar uma foto nas pastas e confirmar o input deixara de ser vazio e mostrara a tela de confirmar alteracao
  $(".input_recebe_foto_que_sera_aplicada_ao_novo_grupo_tela_dois").bind(
    "input",
    function() {
      var d = $(this).val();
      if (d != "") {
        $("body").css("overflow", "hidden");
        $(".alterar_perfil_novo_grupo_tela_dois").fadeIn(0);
      }
    }
  );

  // enviando o file para porcessar o base64
  $(".input_recebe_foto_que_sera_aplicada_ao_novo_grupo_tela_dois").change(
    function() {
      const file = $(this)[0].files[0];
      if (file) {
        visualizar_imagem_selecionada_no_perfil_de_novo_grupo_tela_dois(file);
      }
    }
  );

  // clicando na opcao de remover foto de novo grupo tela dois
  $(
    ".remover_foto_no_modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
  ).click(function() {
    $("body").css("overflow", "hidden");
    $(
      ".sem_hover_no_foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).fadeOut(0);
    $(
      ".hover_no_foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).fadeIn(0);
    $(
      "#modal_das_opcoes_do_que_fazer_ao_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).fadeOut(0);
    $(".remover_novo_grupo_tela_dois").fadeIn(0);
  });

  // se o input conter texto o nome novo grupo se encolhera para cima se caso não ira para baixo
  $(".input_no_campo_nome_do_grupo_no_conteudo_novo_grupo_tela_dois").bind(
    "input",
    function() {
      var d = $(this).val();
      if (d != "") {
        $(
          ".descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois"
        ).removeClass(
          "descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois_aplcia_js"
        );
        $(
          ".descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois"
        ).addClass(
          "descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois_aplcia_animacao_encolhe_js"
        );
        $(
          ".descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois"
        ).removeClass(
          "descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois_aplcia_animacao_cresce_js"
        );
        $(
          ".button_criar_novo_grupo_no_campo_do_button_no_conteudo_novo_grupo_tela_dois"
        ).fadeIn(0);
        $(".conteudo_novo_grupo_tela_dois").animate(
          { scrollTop: 9999999999999999999999 },
          0
        );
      } else {
        $(
          ".descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois"
        ).addClass(
          "descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois_aplcia_js"
        );
        $(
          ".descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois"
        ).removeClass(
          "descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois_aplcia_animacao_encolhe_js"
        );
        $(
          ".descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois"
        ).addClass(
          "descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois_aplcia_animacao_cresce_js"
        );
        $(
          ".button_criar_novo_grupo_no_campo_do_button_no_conteudo_novo_grupo_tela_dois"
        ).fadeOut(0);
      }
    }
  );

  // contador de caracteres do input de nome de grupo
  $(document).ready(function() {
    $(".input_no_campo_nome_do_grupo_no_conteudo_novo_grupo_tela_dois").keyup(
      function() {
        var maxLength = parseInt($(this).attr("maxlength"));
        var length = $(this).val().length;
        var newLength = maxLength - length;
        var remains = $(this).attr("name");
        $(
          '.contar_caracteres_do_input_no_campo_adicionais_para_implementar_ao_input_no_campo_nome_do_grupo_no_conteudo_novo_grupo_tela_dois[name="' +
            remains +
            '"]'
        ).text(newLength);
      }
    );
  });

  // removendo todos os usuarios do cache
  function voltar_tela_inicial() {
    $(
      ".segura_dados_pessoa_selecionada_no_pessoas_selecionadas_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
    ).fadeOut(0);
    adicionadas = [];
    $(
      ".segura_dados_pessoa_selecionada_no_pessoas_selecionadas_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
    ).remove();
  }

  // clicando no botao de criar o novo grupo
  $(
    ".button_criar_novo_grupo_no_campo_do_button_no_conteudo_novo_grupo_tela_dois"
  ).click(function() {
    $(".usuarios").fadeOut(0);
    $(".novo_grupo_tela_um").fadeOut(0);
    voltar_tela_inicial();
    $(
      ".disfarce_input_de_busca_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
    ).fadeIn(0);
    $(
      ".input_de_busca_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
    ).attr("placeholder", "Digite nome do usuario");
    $(".button_confirma_novo_grupo_tela_um").fadeOut(0);
    $(".confirma_novo_grupo_tela_um").css("padding-top", "0");
    $(".confirma_novo_grupo_tela_um").css("padding-bottom", "0");
    $(".novo_grupo_tela_dois").animate({ width: "toggle" }, 170);
    $(
      ".foto_de_novo_grupo_tela_dois_no_campo_segura_novo_grupo_tela_dois_no_conteudo_novo_grupo_tela_dois"
    ).css("background-image", "url(" + "" + ")");
    $(".input_recebe_foto_que_sera_aplicada_ao_novo_grupo_tela_dois").val("");
    $(".input_no_campo_nome_do_grupo_no_conteudo_novo_grupo_tela_dois").val("");
    $(
      ".descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois"
    ).addClass(
      "descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois_aplcia_js"
    );
    $(
      ".descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois"
    ).removeClass(
      "descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois_aplcia_animacao_encolhe_js"
    );
    $(
      ".descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois"
    ).addClass(
      "descricao_no_text_nome_do_grupo_no_conteudo_novo_grupo_tela_dois_aplcia_animacao_cresce_js"
    );
    $(
      ".button_criar_novo_grupo_no_campo_do_button_no_conteudo_novo_grupo_tela_dois"
    ).fadeOut(0);

    $(
      ".contar_caracteres_do_input_no_campo_adicionais_para_implementar_ao_input_no_campo_nome_do_grupo_no_conteudo_novo_grupo_tela_dois"
    ).text(25);
  });
});
