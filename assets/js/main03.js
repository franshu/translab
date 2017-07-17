$(document).ready(function() {
	
    // tengo un arreglo con los números de tarjetas bip
	var bips = [];

	// si en local storage hay bips, entonces la variable bips, 
	// es lo que esté en local storage 
	if(localStorage.getItem('bips') != null) {
		// JSON.parse transforma el string (texto) en un array 
		bips = JSON.parse(localStorage.getItem('bips'));
	}

	// esta función es para imprimir los números de tarjetas bip en el select
	var printBipOptions = function(numerosBips) {
		numerosBips.forEach(function(b){
		    $('#bip-select-list').append("<option value='"+b+"'>" + b + "</option>");
	    });
	};

	// tengo que poner las bips como opciones cuando cargue la página
	printBipOptions(bips);


    // cuando hago click en el botón ver saldo
	$('#view-balance').on('click', function() {
		// capturo el número del select
		var bip = $('#bip-select-list').val();
		//en el caso de consultar una nueva tarjeta en el imput, sobreescribe la variable de select
		if($('#bip-input').val() != "" && isNaN($('#bip-input').val()) == false){
			bip = $('#bip-input').val();
		}

		//valido que no este vacio el campo antes de hacer el llamado a la Api
		if(bip != null) {
			$('table').show(); //muestro la tabla 
			//le paso el valor de bip
			$('#bip-number').html(bip);
			// muestro 'cargando...', hasta que la llamada ajax termine
            $('#total').html('cargando...');

			$.ajax({
				url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + bip,
				type: 'GET',
				dataType: 'json',
				//data:{bip:bip} parametro y valor se los paso en en la url, arriba 
			})
			.success(function(data) {
    			// ahora que la llamada terminó, muestro el saldo en vez de 'cargando...' la llave del saldo en la Api es saldoTarjeta
    			$('#total').html(data.saldoTarjeta);

			})
			.error(function(data){
    			$('#total').html('No es una Tarjeta válida.');

			});
		}else{
			$('table').show(); //muestro la tabla
			$('#total').html('Ingrese o Seleccione una Tarjeta Bip.')
		}

	});

});