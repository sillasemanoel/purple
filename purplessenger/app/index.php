<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <title>Purple</title>
    <link rel="icon" type="imagem/png" href="../../img/system/icon/purple.png" />

    <!-- css -->
    <link rel="stylesheet" href="css/style.css" />

    <!-- telas do chat -->
      <!-- perfil -->
      <link rel="stylesheet" href="screens/profile/profile.css" />
      <!-- usuarios -->
      <link rel="stylesheet" href="screens/users/users.css" /> 
      <!-- tela um de novo grupo -->
      <link rel="stylesheet" href="screens/new_screen_group_one/new_screen_group_one.css" /> 
      <!-- tela dois de novo grupo -->
      <link rel="stylesheet" href="screens/new_screen_group_two/new_screen_group_two.css" />
      <!-- configuracoes -->
      <link rel="stylesheet" href="screens/configuration/configuration.css" />
      <!-- papel de parede -->
      <link rel="stylesheet" href="screens/wallpaper/wallpaper.css" />
      <!-- ajuda -->
      <link rel="stylesheet" href="screens/help/help.css" />
      <!-- chat esquerdo -->
      <link rel="stylesheet" href="screens/left_chat/left_chat.css" /> 
      <!-- chat direito -->
      <link rel="stylesheet" href="screens/right_chat/right_chat.css" />
      <!-- conversa com usuario -->
      <link rel="stylesheet" href="screens/conversation_with_user/conversation_with_user.css" />
      <!-- dados do usuario -->
      <link rel="stylesheet" href="screens/user_data/user_data.css" />

    <!-- acoes do perfil -->
      <!-- tela de visualizar perfil -->
      <link rel="stylesheet" href="screens/profile/actions/view_profile/view_profile.css" /> 
      <!-- tela de confirmar alterar perfil -->
      <link rel="stylesheet" href="screens/profile/actions/change_profile/change_profile.css" /> 
      <!-- tela de confirmar remover perfil -->
      <link rel="stylesheet" href="screens/profile/actions/remove_profile/remove_profile.css" /> 

    <!-- acoes da tela dois de novo grupo -->
      <!-- tela de confirmar alterar perfil -->
      <link rel="stylesheet" href="screens/new_screen_group_two/actions/change_profile/change_profile.css" /> 
      <!-- tela de confirmar remover perfil -->
      <link rel="stylesheet" href="screens/new_screen_group_two/actions/remove_profile/remove_profile.css" /> 

    <!-- acoes da tela ajuda -->
      <!-- tela de fale conosco -->
      <link rel="stylesheet" href="screens/help/contact_us/contact_us.css" />
  </head>
  <body>
    
    <div class="tarja_roxa"></div>
    
    <div class="tarja_cinza"></div>

    <div class="chat">
      <?php
        // perfil
        include "screens/profile/profile.html";
        // usuarios
        include "screens/users/users.html";
        // tela um de novo grupo
        include "screens/new_screen_group_one/new_screen_group_one.html";
        // tela dois de novo grupo
        include "screens/new_screen_group_two/new_screen_group_two.html";
        // configuracoes
        include "screens/configuration/configuration.html";
        // papel de parede
        include "screens/wallpaper/wallpaper.html";
        // ajuda
        include "screens/help/help.html";
        // chat esquerdo
        include "screens/left_chat/left_chat.html";
        // chat direito
        include "screens/right_chat/right_chat.html";
        // conversa com usuario
        include "screens/conversation_with_user/conversation_with_user.html";
        // dados do usuario
        include "screens/user_data/user_data.html";
      ?>    
    </div>

    <?php
    // acoes do perfil
      // tela de visualizar perfil
      include "screens/profile/actions/view_profile/view_profile.html";
      // tela de confirmar alterar perfil
      include "screens/profile/actions/change_profile/change_profile.html";
      // tela de confirmar remover perfil
      include "screens/profile/actions/remove_profile/remove_profile.html";

    // acoes da tela dois de novo grupo
      // tela de confirmar alterar perfil
      include "screens/new_screen_group_two/actions/change_profile/change_profile.html";
      // tela de confirmar remover perfil
      include "screens/new_screen_group_two/actions/remove_profile/remove_profile.html";

    // acoes da tela ajuda
      // tela de fale conosco
      include "screens/help/contact_us/contact_us.html";
    ?>

    <!-- fastclick -->
    <script src="https://cdn.jsdelivr.net/npm/fastclick@1.0.6/lib/fastclick.min.js"></script>

    <!-- jquery -->
    <script src="../../js/jquery/jquery.js"></script>
    <script src="../../js/jquery/jquery.nice-select.min.js"></script>  

    <!-- js -->
    <script src="js/js.js"></script>

    <!-- telas do chat -->
      <!-- perfil -->
      <script src="screens/profile/profile.js"></script>
      <!-- usuarios -->
      <script src="screens/users/users.js"></script>
      <!-- tela um de novo grupo -->
      <script src="screens/new_screen_group_one/new_screen_group_one.js"></script>
      <!-- tela dois de novo grupo -->
      <script src="screens/new_screen_group_two/new_screen_group_two.js"></script>
      <!-- configuracoes -->
      <script src="screens/configuration/configuration.js"></script>
      <!-- papel de parede -->
      <script src="screens/wallpaper/wallpaper.js"></script>
      <!-- ajuda -->
      <script src="screens/help/help.js"></script>
      <!-- chat esquerdo -->
      <script src="screens/left_chat/left_chat.js"></script>
      <!-- conversa com usuario -->
      <script src="screens/conversation_with_user/conversation_with_user.js"></script>
      <!-- dados do usuario -->
      <script src="screens/user_data/user_data.js"></script>

    <!-- acoes do perfil -->
      <!-- tela de visualizar perfil -->
      <script src="screens/profile/actions/view_profile/view_profile.js"></script>
      <!-- tela de confirmar alterar perfil -->
      <script src="screens/profile/actions/change_profile/change_profile.js"></script>
      <!-- tela de confirmar remover perfil -->
      <script src="screens/profile/actions/remove_profile/remove_profile.js"></script>

    <!-- acoes da tela dois de novo grupo -->
      <!-- tela de confirmar alterar perfil -->
      <script src="screens/new_screen_group_two/actions/change_profile/change_profile.js"></script>
      <!-- tela de confirmar remover perfil -->
      <script src="screens/new_screen_group_two/actions/remove_profile/remove_profile.js"></script>

    <!-- acoes da tela ajuda -->
      <!-- tela de fale conosco -->
      <script src="screens/help/contact_us/contact_us.js"></script>
  </body>
</html>
