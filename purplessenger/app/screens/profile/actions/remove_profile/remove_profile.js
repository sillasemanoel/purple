$(document).ready(function() {
  // cancelar o remover perfil
  $(".butoon_cancelar_no_campo_segura_butoons_no_modal_remover_perfil").click(
    function() {
      $("body").removeAttr("style", "overflow");
      $(".remover_perfil").fadeOut(0);
    }
  );

  // confirmando remover perfil
  $(".butoon_remover_no_campo_segura_butoons_no_modal_remover_perfil").click(
    function() {
      $("body").removeAttr("style", "overflow");
      $(".remover_perfil").fadeOut(0);
      $(
        ".foto_de_perfil_no_campo_segura_perfil_no_conteudo_perfil, .foto_perfil_no_menu_chat_esquerdo, .foto_de_perfil_no_menu_ver_perfil, .foto_perfil_no_meu_perfil_conteudo_configuracao"
      ).css("background-image", "url(" + "" + ")");
      $(".img_perfil_no_conteudo_ver_perfil").attr("src", "");
      $(".input_recebe_foto_que_sera_aplicada_ao_perfil").val("");
    }
  );
});
