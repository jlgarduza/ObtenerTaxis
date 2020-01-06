<script>
var config = {
            apiKey: "",
            authDomain: "rtu-cliente.firebaseapp.com",
            databaseURL: "https://rtu-cliente.firebaseio.com",
            projectId: "firebase-rtu-cliente",
            storageBucket: "firebase-rtu-cliente.appspot.com",
            messagingSenderId: "324653843509"
        };
        firebase.initializeApp(config);

		var database = firebase.database();
		
		// Fijarse que la ruta de partida ahora es la colección productos:
		var referencia=database.ref("Taxis");
		
		var productos={};

        referencia.on('value',function(datos)
        {
            productos=datos.val();

            //Recorremos los productos y los mostramos
            $.each(productos, function(indice,valor)
            {
				var prevProducto = '<tr>';
                prevProducto += '<td>'+valor.Latitud+'</td>';
                prevProducto += '<td>'+valor.Longitud+'</td>';
                prevProducto += '</tr>';
                $(prevProducto).appendTo('#verDatos');
                    
            });

        },function(objetoError){
            console.log('Error de lectura:'+objetoError.code);
        });
</script>
