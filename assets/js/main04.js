$(document).ready(function() {
	
    // tengo un arreglo con los números de tarjetas bip
	var bips = [];

	// si en local storage hay bips, entonces la variable bips, 
	// es lo que esté en local storage 
	if(localStorage.getItem('bips') != null) {
		// JSON.parse transforma el string (texto) en un array 
		bips = JSON.parse(localStorage.getItem('bips'));
	}

	// esta función es para imprimir los números de tarjetas bip
	var printBipOptions = function(numerosBips) {
		numerosBips.forEach(function(b){
		    $('#bip-select-list').append("<option value='"+b+"'>" + b + "</option>");
	    });
	};

	// tengo que poner las bips como opciones cuando cargue la página
	printBipOptions(bips);

	$('#rate').on('change', function(){
		$('#tarifa').html($(this).find(':selected').val());
	});

    // cuando hago click en el botón calcular
	$('#calculate-balance').on('click', function() {

		// capturo el número del select
		var bip = $('#bip-select-list').val();
		// si el imput tiene un valor, remplaza el valor del select
		//también veo si es un numero 
		if($('#bip-input').val() && isNaN($('#bip-input').val()) == false){
			bip = $('#bip-input').val();
		}
		
		var rate = $('#rate').find(':selected').val();
		if(bip && rate != "") {
			$('table').show(); //muestro la tabla
			$('#bip-number').html(bip);
			// muestro 'cargando...', hasta que la llamada ajax termine
            $('#total-tarifa').html('cargando...');

			$.ajax({
				url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + bip,
				type: 'GET',
				dataType: 'json',
				//data:{bip:bip} parametro y valor se los paso en en la url, arriba 
			})
			.success(function(data) {
				//multiplico rate por 1 para que se transforeme a numero el valor
				rate = rate * 1;
				//expresion regular para reemplazar caracteres '$' '.' y multiplico por 1 para transformar el string en número 
				saldoTarjeta= data.saldoTarjeta.replace(/\D/g,'') *1;
    			// ahora que la llamada terminó, muestro el saldo en vez de 'cargando...'
    			$('#total-tarifa').html('$'+(saldoTarjeta - rate));

			})
			.error(function(data){
    			$('#total-tarifa').html('no disponible');

			});
		}else{
			$('table').show(); //muestro la tabla
			$('#tarifa').html('Ingrese o Seleccione una Tarjeta Bip y la Tarifa.')
		}
	});
});