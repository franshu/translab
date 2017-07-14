//Validadcion Start-page
$(document).ready(function(){
  $(".iniciar").click(function(evento) {
    evento.preventDefault();//Si se llama a este método, la acción predeterminada del evento no se activará.
   
    var mail= 
    var password = /[0-9]/;



    var mail = $('.validate').val();
    function validarMail(){
      if (mail == ""){
        $(validarMail).text("Debe ingresar e-mail");
      }else if
      
    });
});