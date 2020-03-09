$(document).ready(function() {
  // clicando na seta para fechar a tela de criar novo grupo um
  $(".icone_voltar_segura_conteudo_menu_novo_grupo_tela_um").click(function() {
    $(".novo_grupo_tela_um").animate({ width: "toggle" }, 170);
    $(
      ".input_de_busca_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
    ).val("");
    pesquisar("");
    voltar_tela_inicial();
    $(
      ".input_de_busca_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
    ).attr("placeholder", "Digite nome do usuario");
    $(".button_confirma_novo_grupo_tela_um").fadeOut(0);
    $(".confirma_novo_grupo_tela_um").css("padding-top", "0px");
    $(".confirma_novo_grupo_tela_um").css("padding-bottom", "0px");
  });

  // fazendo busca no input de busca
  $(
    ".input_de_busca_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
  ).on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    pesquisar(value);
  });

  function pesquisar(value) {
    $(
      ".conteudo_novo_grupo_tela_um .busca_usuario_no_conteudo_novo_grupo_tela_um"
    ).filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  }

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

  // adicionando pessoa ao campo de adicionadas
  function addicionar(pessoa) {
    var existe = adicionadas.filter(function(_pessoa) {
      return _pessoa.id == pessoa.id;
    });

    let tmp_id = (Math.random() * 100000) | 0;

    if (existe.length == 0) {
      adicionadas.push(pessoa);

      $(
        ".pessoas_selecionadas_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
      ).append(`
      <div class="segura_dados_pessoa_selecionada_no_pessoas_selecionadas_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um">
        <div class="dados_pessoa_selecionada_no_segura_dados_pessoa_selecionada_no_pessoas_selecionadas_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um">
          <div
            class="foto_perfil_no_dados_pessoa_selecionada_no_segura_dados_pessoa_selecionada_no_pessoas_selecionadas_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
            style="background-image: url(../../img/profile/user/${pessoa.foto});"
          ></div>
          <span class="nome_de_perfil_no_dados_pessoa_selecionada_no_segura_dados_pessoa_selecionada_no_pessoas_selecionadas_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um" title="${pessoa.nome}">${pessoa.nome}</span>
          <div class="x_no_dados_pessoa_selecionada_no_segura_dados_pessoa_selecionada_no_pessoas_selecionadas_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um _${pessoa.id}-${tmp_id}" id="${pessoa.id}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <path
                opacity=".6"
                fill="#263238"
                d="M12.174 4.661l-.836-.835L8 7.165 4.661 3.826l-.835.835L7.165 8l-3.339 3.339.835.835L8 8.835l3.338 3.339.836-.835L8.835 8l3.339-3.339z"
              ></path>
            </svg>
          </div>
        </div>
      </div>`);
    }

    // removendo pessoa das selecionadas
    $(
      ".x_no_dados_pessoa_selecionada_no_segura_dados_pessoa_selecionada_no_pessoas_selecionadas_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um._" +
        pessoa.id +
        "-" +
        tmp_id
    ).click(function() {
      var id = $(this).attr("id");

      $(this)
        .parent()
        .parent()
        .remove();

      var _index = adicionadas.findIndex(function(_pessoa) {
        return _pessoa.id == id;
      });

      adicionadas.splice(_index, 1);

      if (adicionadas.length == 0) {
        $(".novo-grupo-um-pessoas-que-foram-selecionadas-none").fadeOut(0);
        $(
          ".pessoas_selecionadas_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
        ).fadeOut(0);
        $(
          ".input_de_busca_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
        ).attr("placeholder", "Digite nome do usuario");
        $(".button_confirma_novo_grupo_tela_um").fadeOut(0);
        $(".confirma_novo_grupo_tela_um").css("padding-top", "0px");
        $(".confirma_novo_grupo_tela_um").css("padding-bottom", "0px");
        $(
          ".input_de_busca_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
        ).trigger("focus");
      }
    });
  }

  // pegando informacoes do usuario clicado para mandar para o cache que sera puxado para var adicionados
  $(".usuario_no_conteudo_novo_grupo_tela_um").click(function() {
    var id = $(this).attr("uid");
    var nome = $(this).attr("unome");
    var foto = $(this).attr("ufoto");

    addicionar({ id, nome, foto });

    $(
      ".pessoas_selecionadas_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
    ).fadeIn(0);
    $(
      ".input_de_busca_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
    ).val("");
    $(
      ".input_de_busca_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
    ).trigger("focus");
    pesquisar("");
    $(
      ".input_de_busca_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
    ).removeAttr("placeholder");
    $(".button_confirma_novo_grupo_tela_um").fadeIn(0);
    $(".confirma_novo_grupo_tela_um").css("padding-top", "20px");
    $(".confirma_novo_grupo_tela_um").css("padding-bottom", "25px");
  });

  // clicando em button de ir para proxima tela de criar grupo
  $(".button_confirma_novo_grupo_tela_um").click(function() {
    $(".novo_grupo_tela_dois").animate({ width: "toggle" }, 170);
    $(
      ".input_de_busca_no_segura_responsivamente_no_campo_segura_pessoas_selecionadas_busca_novo_grupo_tela_um"
    ).val("");
    pesquisar("");
    $(".input_no_campo_nome_do_grupo_no_conteudo_novo_grupo_tela_dois").trigger(
      "focus"
    );
  });
});
