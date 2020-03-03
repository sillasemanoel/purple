$(document).ready(function() {
  // fechando ver perfil
  $(".icone_fechat_no_menu_ver_perfil, .conteudo_ver_perfil").click(function() {
    $(".ver_perfil").fadeOut(0);
    $("body").removeAttr("style", "overflow");
  });
});
