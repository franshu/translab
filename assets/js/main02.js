//Este js es para revisar localStorage en la consola mostrando un texto concatenando el item
//asociado a la key
$(document).ready(function() {
	  // codigo
	  console.log('correo: ' + localStorage.getItem('email'));
	  console.log('contraseña: ' + localStorage.getItem('password'));
});