$(document).ready(function () {
   var clientId = "915913404758-er2990h3p7qu1mqt1lvtvfmsq8363mbf.apps.googleusercontent.com";
   var redirect_uri = "http://localhost/elab/upload.html";
   var scope = "https://www.googleapis.com/auth/youtube";
   var url = "";

   $("#login").click(function () {
      signIn(clientId, redirect_uri, scope, url);

   });

   function signIn(clientId, redirect_uri, scope, url) {
      url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=" + redirect_uri
         + "&prompt=consent&response_type=code&client_id=" + clientId + "&scope=" + scope
         + "&access_type=offline";
      window.location = url;

   }

});

