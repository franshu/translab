//Validadcion Start-page
/*$(document).ready(function(){
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
*/
// al final deje la validación en html5 porque era mucho más facil que usar una expresion regular  
//y en este js guardo los parametros del formulario

/*forma de utilizar on: $(document).on('evento', '#elemento', (function(e) {
   tu código
});*/

$(document).ready(function(){
  //$('#login-form').submit(function(e){
    $('#login-form').on('submit',function(e){
    var email = $('#login-form input[name="email"]').val();
    var password = $('#login-form input[name="password"]').val();

    // If x is Not a Number or less than one or greater than 10 (3wschool)
    //validacion para que sean solo digitos númericos
   
    if (isNaN(password) || parseInt(password) < 0){
        e.preventDefault();

        var text = "La contraseña solo permite números.";
        $('#NaN').html(text);
    }

    //se guarda en local storage con la funcion .setItem guarda las variables,
    //localStorage.setItem(“key”,variable);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  });

});