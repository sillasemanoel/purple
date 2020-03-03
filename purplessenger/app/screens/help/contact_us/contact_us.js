$(document).ready(function() {
  // se o input conter texto o sobre endereco de email se encolhera para cima se caso não ira para baixo
  $(".input_campo_endereco_email_modal_fale_conosco").bind("input", function() {
    var d = $(this).val();
    if (d != "") {
      $(".descricao_text_endereco_email_modal_fale_conosco").removeClass(
        "descricao_text_endereco_email_modal_fale_conosco_aplcia_js"
      );
      $(".descricao_text_endereco_email_modal_fale_conosco").addClass(
        "descricao_text_endereco_email_modal_fale_conosco_aplcia_animacao_encolhe_js"
      );
      $(".descricao_text_endereco_email_modal_fale_conosco").removeClass(
        "descricao_text_endereco_email_modal_fale_conosco_aplcia_animacao_cresce_js"
      );
    } else {
      $(".descricao_text_endereco_email_modal_fale_conosco").addClass(
        "descricao_text_endereco_email_modal_fale_conosco_aplcia_js"
      );
      $(".descricao_text_endereco_email_modal_fale_conosco").removeClass(
        "descricao_text_endereco_email_modal_fale_conosco_aplcia_animacao_encolhe_js"
      );
      $(".descricao_text_endereco_email_modal_fale_conosco").addClass(
        "descricao_text_endereco_email_modal_fale_conosco_aplcia_animacao_cresce_js"
      );
    }
  });

  // validacao do input de email
  $(
    ".input_campo_confirma_endereco_email_modal_fale_conosco, .input_campo_sobre_modal_fale_conosco, .textarea_campo_problema_modal_fale_conosco"
  ).focus(function() {
    var email = $(".input_campo_endereco_email_modal_fale_conosco").val();

    if (email != "") {
      if (/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)) {
        document.getElementById(
          "status_text_endereco_email_modal_fale_conosco"
        ).innerHTML =
          "<span style='font-size: 12px; line-height: 16px; color:#943ce6;'>Confere</span>";
      } else {
        document.getElementById(
          "status_text_endereco_email_modal_fale_conosco"
        ).innerHTML =
          "<span style='font-size: 12px; line-height: 16px; color:#f44336;'>Por favor, insira um endereço de e-mail válido</span>";
      }
    } else {
      document.getElementById(
        "status_text_endereco_email_modal_fale_conosco"
      ).innerHTML =
        "<span style='font-size: 12px; line-height: 16px; color:#f44336;'>Campo não pode ficar vazio</span>";
    }
  });

  // se o input conter texto o sobre confirma endereco de email se encolhera para cima se caso não ira para baixo
  $(".input_campo_confirma_endereco_email_modal_fale_conosco").bind(
    "input",
    function() {
      var d = $(this).val();
      if (d != "") {
        $(
          ".descricao_text_confirma_endereco_email_modal_fale_conosco"
        ).removeClass(
          "descricao_text_confirma_endereco_email_modal_fale_conosco_aplcia_js"
        );
        $(
          ".descricao_text_confirma_endereco_email_modal_fale_conosco"
        ).addClass(
          "descricao_text_confirma_endereco_email_modal_fale_conosco_aplcia_animacao_encolhe_js"
        );
        $(
          ".descricao_text_confirma_endereco_email_modal_fale_conosco"
        ).removeClass(
          "descricao_text_confirma_endereco_email_modal_fale_conosco_aplcia_animacao_cresce_js"
        );
      } else {
        $(
          ".descricao_text_confirma_endereco_email_modal_fale_conosco"
        ).addClass(
          "descricao_text_confirma_endereco_email_modal_fale_conosco_aplcia_js"
        );
        $(
          ".descricao_text_confirma_endereco_email_modal_fale_conosco"
        ).removeClass(
          "descricao_text_confirma_endereco_email_modal_fale_conosco_aplcia_animacao_encolhe_js"
        );
        $(
          ".descricao_text_confirma_endereco_email_modal_fale_conosco"
        ).addClass(
          "descricao_text_confirma_endereco_email_modal_fale_conosco_aplcia_animacao_cresce_js"
        );
      }
    }
  );

  // validacao do input de confirma email
  $(
    ".input_campo_endereco_email_modal_fale_conosco, .input_campo_sobre_modal_fale_conosco, .textarea_campo_problema_modal_fale_conosco"
  ).focus(function() {
    var email = $(".input_campo_endereco_email_modal_fale_conosco").val();
    var c_email = $(
      ".input_campo_confirma_endereco_email_modal_fale_conosco"
    ).val();

    if (email != "") {
      if (/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)) {
        if (c_email != "") {
          if (email == c_email) {
            document.getElementById(
              "status_text_confirma_endereco_email_modal_fale_conosco"
            ).innerHTML =
              "<span style='font-size: 12px; line-height: 16px; color:#943ce6;'>Confere</span";
          } else {
            document.getElementById(
              "status_text_confirma_endereco_email_modal_fale_conosco"
            ).innerHTML =
              "<span style='font-size: 12px; line-height: 16px; color:#f44336;'>Os endereços de e-mail não coincidem</span>";
          }
        } else {
          document.getElementById(
            "status_text_confirma_endereco_email_modal_fale_conosco"
          ).innerHTML =
            "<span style='font-size: 12px; line-height: 16px; color:#f44336;'>Campo não pode ficar vazio</span>";
        }
      }
    }
  });

  // se o input conter texto o sobre se encolhera para cima se caso não ira para baixo
  $(".input_campo_sobre_modal_fale_conosco").bind("input", function() {
    var d = $(this).val();
    if (d != "") {
      $(".descricao_text_sobre_modal_fale_conosco").removeClass(
        "descricao_text_sobre_modal_fale_conosco_aplcia_js"
      );
      $(".descricao_text_sobre_modal_fale_conosco").addClass(
        "descricao_text_sobre_modal_fale_conosco_aplcia_animacao_encolhe_js"
      );
      $(".descricao_text_sobre_modal_fale_conosco").removeClass(
        "descricao_text_sobre_modal_fale_conosco_aplcia_animacao_cresce_js"
      );
    } else {
      $(".descricao_text_sobre_modal_fale_conosco").addClass(
        "descricao_text_sobre_modal_fale_conosco_aplcia_js"
      );
      $(".descricao_text_sobre_modal_fale_conosco").removeClass(
        "descricao_text_sobre_modal_fale_conosco_aplcia_animacao_encolhe_js"
      );
      $(".descricao_text_sobre_modal_fale_conosco").addClass(
        "descricao_text_sobre_modal_fale_conosco_aplcia_animacao_cresce_js"
      );
    }
  });

  // validacao do input de sobre
  $(
    ".input_campo_endereco_email_modal_fale_conosco, .input_campo_confirma_endereco_email_modal_fale_conosco, .textarea_campo_problema_modal_fale_conosco"
  ).focus(function() {
    var email = $(".input_campo_endereco_email_modal_fale_conosco").val();
    var c_email = $(
      ".input_campo_confirma_endereco_email_modal_fale_conosco"
    ).val();
    var sobre = $(".input_campo_sobre_modal_fale_conosco").val();
    var max_sobre = "5";

    if (email != "") {
      if (/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)) {
        if (c_email != "") {
          if (email == c_email) {
            if (sobre != "") {
              document.getElementById(
                "status_text_sobre_modal_fale_conosco"
              ).innerHTML =
                "<span style='font-size: 12px; line-height: 16px; color:#943ce6;'>Confere</span";
            } else {
              document.getElementById(
                "status_text_sobre_modal_fale_conosco"
              ).innerHTML =
                "<span style='font-size: 12px; line-height: 16px; color:#f44336;'>Campo não pode ficar vazio</span>";
            }
          }
        }
      }
    }
  });

  // se a textarea conter texto o sobre descreva problema se encolhera para cima se caso não ira para baixo
  $(".textarea_campo_problema_modal_fale_conosco").bind("input", function() {
    var d = $(this).val();
    if (d != "") {
      $(".descricao_text_problema_modal_fale_conosco").removeClass(
        "descricao_text_problema_modal_fale_conosco_aplcia_js"
      );
      $(".descricao_text_problema_modal_fale_conosco").addClass(
        "descricao_text_problema_modal_fale_conosco_aplcia_animacao_encolhe_js"
      );
      $(".descricao_text_problema_modal_fale_conosco").removeClass(
        "descricao_text_problema_modal_fale_conosco_aplcia_animacao_cresce_js"
      );
    } else {
      $(".descricao_text_problema_modal_fale_conosco").addClass(
        "descricao_text_problema_modal_fale_conosco_aplcia_js"
      );
      $(".descricao_text_problema_modal_fale_conosco").removeClass(
        "descricao_text_problema_modal_fale_conosco_aplcia_animacao_encolhe_js"
      );
      $(".descricao_text_problema_modal_fale_conosco").addClass(
        "descricao_text_problema_modal_fale_conosco_aplcia_animacao_cresce_js"
      );
    }
  });

  // quebra de linha da textarea de forma responsiva do descrever problema
  var textarea = document.querySelector(
    ".textarea_campo_problema_modal_fale_conosco"
  );
  textarea.addEventListener("keydown", autosize);
  function autosize() {
    var el = this;
    setTimeout(function() {
      el.style.cssText = "height:auto; padding: 0";
      el.style.cssText = "height:" + el.scrollHeight + "px";
      $(".modal_fale_conosco").animate(
        { scrollTop: 9999999999999999999999 },
        0
      );
    }, 0);
  }

  // cancelar o envio de fale conosco
  $(".butoon_cancelar_campo_segura_butoons_modal_fale_conosco").click(
    function() {
      $("body").removeAttr("style", "overflow");
      $(".fale_conosco").fadeOut(0);
      $(".descricao_text_endereco_email_modal_fale_conosco").addClass(
        "descricao_text_endereco_email_modal_fale_conosco_aplcia_js"
      );
      $(".descricao_text_endereco_email_modal_fale_conosco").removeClass(
        "descricao_text_endereco_email_modal_fale_conosco_aplcia_animacao_encolhe_js"
      );
      $(".descricao_text_endereco_email_modal_fale_conosco").addClass(
        "descricao_text_endereco_email_modal_fale_conosco_aplcia_animacao_cresce_js"
      );
      $(".input_campo_endereco_email_modal_fale_conosco").val("");
      document.getElementById(
        "status_text_endereco_email_modal_fale_conosco"
      ).innerHTML = "";
      $(".descricao_text_confirma_endereco_email_modal_fale_conosco").addClass(
        "descricao_text_confirma_endereco_email_modal_fale_conosco_aplcia_js"
      );
      $(
        ".descricao_text_confirma_endereco_email_modal_fale_conosco"
      ).removeClass(
        "descricao_text_confirma_endereco_email_modal_fale_conosco_aplcia_animacao_encolhe_js"
      );
      $(".descricao_text_confirma_endereco_email_modal_fale_conosco").addClass(
        "descricao_text_confirma_endereco_email_modal_fale_conosco_aplcia_animacao_cresce_js"
      );
      $(".input_campo_confirma_endereco_email_modal_fale_conosco").val("");
      document.getElementById(
        "status_text_confirma_endereco_email_modal_fale_conosco"
      ).innerHTML = "";
      $(".descricao_text_sobre_modal_fale_conosco").addClass(
        "descricao_text_sobre_modal_fale_conosco_aplcia_js"
      );
      $(".descricao_text_sobre_modal_fale_conosco").removeClass(
        "descricao_text_sobre_modal_fale_conosco_aplcia_animacao_encolhe_js"
      );
      $(".descricao_text_sobre_modal_fale_conosco").addClass(
        "descricao_text_sobre_modal_fale_conosco_aplcia_animacao_cresce_js"
      );
      $(".input_campo_sobre_modal_fale_conosco").val("");
      document.getElementById(
        "status_text_sobre_modal_fale_conosco"
      ).innerHTML = "";
      $(".descricao_text_problema_modal_fale_conosco").addClass(
        "descricao_text_problema_modal_fale_conosco_aplcia_js"
      );
      $(".descricao_text_problema_modal_fale_conosco").removeClass(
        "descricao_text_problema_modal_fale_conosco_aplcia_animacao_encolhe_js"
      );
      $(".descricao_text_problema_modal_fale_conosco").addClass(
        "descricao_text_problema_modal_fale_conosco_aplcia_animacao_cresce_js"
      );
      $(".textarea_campo_problema_modal_fale_conosco").val("");
      $(".textarea_campo_problema_modal_fale_conosco").css("height", "22px");
    }
  );

  // confirmando o envio de fale conosco
  $(".butoon_remover_campo_segura_butoons_modal_fale_conosco").click(
    function() {
      $("body").removeAttr("style", "overflow");
      $(".fale_conosco").fadeOut(0);
      $(".descricao_text_endereco_email_modal_fale_conosco").addClass(
        "descricao_text_endereco_email_modal_fale_conosco_aplcia_js"
      );
      $(".descricao_text_endereco_email_modal_fale_conosco").removeClass(
        "descricao_text_endereco_email_modal_fale_conosco_aplcia_animacao_encolhe_js"
      );
      $(".descricao_text_endereco_email_modal_fale_conosco").addClass(
        "descricao_text_endereco_email_modal_fale_conosco_aplcia_animacao_cresce_js"
      );
      $(".input_campo_endereco_email_modal_fale_conosco").val("");
      document.getElementById(
        "status_text_endereco_email_modal_fale_conosco"
      ).innerHTML = "";
      $(".descricao_text_confirma_endereco_email_modal_fale_conosco").addClass(
        "descricao_text_confirma_endereco_email_modal_fale_conosco_aplcia_js"
      );
      $(
        ".descricao_text_confirma_endereco_email_modal_fale_conosco"
      ).removeClass(
        "descricao_text_confirma_endereco_email_modal_fale_conosco_aplcia_animacao_encolhe_js"
      );
      $(".descricao_text_confirma_endereco_email_modal_fale_conosco").addClass(
        "descricao_text_confirma_endereco_email_modal_fale_conosco_aplcia_animacao_cresce_js"
      );
      $(".input_campo_confirma_endereco_email_modal_fale_conosco").val("");
      document.getElementById(
        "status_text_confirma_endereco_email_modal_fale_conosco"
      ).innerHTML = "";
      $(".descricao_text_sobre_modal_fale_conosco").addClass(
        "descricao_text_sobre_modal_fale_conosco_aplcia_js"
      );
      $(".descricao_text_sobre_modal_fale_conosco").removeClass(
        "descricao_text_sobre_modal_fale_conosco_aplcia_animacao_encolhe_js"
      );
      $(".descricao_text_sobre_modal_fale_conosco").addClass(
        "descricao_text_sobre_modal_fale_conosco_aplcia_animacao_cresce_js"
      );
      $(".input_campo_sobre_modal_fale_conosco").val("");
      document.getElementById(
        "status_text_sobre_modal_fale_conosco"
      ).innerHTML = "";
      $(".descricao_text_problema_modal_fale_conosco").addClass(
        "descricao_text_problema_modal_fale_conosco_aplcia_js"
      );
      $(".descricao_text_problema_modal_fale_conosco").removeClass(
        "descricao_text_problema_modal_fale_conosco_aplcia_animacao_encolhe_js"
      );
      $(".descricao_text_problema_modal_fale_conosco").addClass(
        "descricao_text_problema_modal_fale_conosco_aplcia_animacao_cresce_js"
      );
      $(".textarea_campo_problema_modal_fale_conosco").val("");
      $(".textarea_campo_problema_modal_fale_conosco").css("height", "22px");
    }
  );
});
