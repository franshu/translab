$(document).ready(function() {
	$('#profile-form #email').val(localStorage.getItem("email"));

    // tengo un arreglo con los números de tarjetas bip
	var bips = [];
	// si en local storage hay bips, entonces la variable bips, 
	// es lo que esté en local storage 
	if(localStorage.getItem('bips') != null){
		// JSON.parse transforma el string (texto) en un array 
		bips = JSON.parse(localStorage.getItem('bips'));
	}

	// esta función es para imprimir los números de tarjetas bip
	var printBips = function(numerosBips){
		numerosBips.forEach(function(b){
		    $('#bip-list').append("<li>" + b + "</li>");
	    });
	};

    // cuando hago click en el botón add bip
	$('#add-bip').on('click', function(){
		// capturo el número del input
		var bip = $('#bip').val();
		// lo guardo en local storage
		if(bip != "" && isNaN(bip) == false) {
			// verifico que la tarjeta bip no está en mi arreglo de bips
			if(bips.indexOf(bip) === -1) { // si es -1 significa que no está
				// si no está, la agrego
    			bips.push(bip);

    			// actualizo el local storage
                // tengo que guardar las bips como string, no como array
			    localStorage.setItem('bips', JSON.stringify(bips));
    			
    			// y la imprimo en la lista
    			$('#bip-list').append("<li>" + bip + "</li>");
			} else {
				// si la tarjeta estaba en bips
				alert('la tarjeta número ' + bip + ' ya fue agregada.')
			}
		}else{
			alert('La tarjeta debe tener formato de número.')
		}
	});
	printBips(bips);
});