$(document).ready(function(){
    var root = 'https://swapi.co/api/vehicles/'

    loadVehicles(root);

    function loadVehicles(url){
        $.ajax({
            url:        url,
            method:     'GET',
            success:    function(data){
                console.log(data.results);
                var swVehicles = data.results;
                var vehicleData = '';
                for(i=0;i<swVehicles.length;i++){
                    vehicleData += '<div id="vehicle-id-'+[i]+'" class="col-sm-6">';
                    vehicleData += '    <table class="table">';
                    vehicleData += '        <thead>';
                    vehicleData += '        <th colspan="2">';
                    vehicleData += '            <h4>'+swVehicles[i].name+'</h4>';
                    vehicleData += '        </th>';
                    vehicleData += '        </thead>';
                    vehicleData += '        <tbody>';
                    vehicleData += '            <tr>';
                    vehicleData += '                <th>Modelo:</th>';
                    vehicleData += '                <td>'+swVehicles[i].model+'</td>';
                    vehicleData += '            </tr>';
                    vehicleData += '            <tr>';
                    vehicleData += '                <th>Longitud:</th>';
                    vehicleData += '                <td>'+swVehicles[i].length+' m</td>';
                    vehicleData += '            </tr>';
                    vehicleData += '            <tr>';
                    vehicleData += '                <th>Tripulacion:</th>';
                    vehicleData += '                <td>'+swVehicles[i].crew+'</td>';
                    vehicleData += '            </tr>';
                    vehicleData += '            <tr>';
                    vehicleData += '                <th>Pasajeros:</th>';
                    vehicleData += '                <td>'+swVehicles[i].passengers+'</td>';
                    vehicleData += '            </tr>';
                    vehicleData += '            <tr>';
                    vehicleData += '                <th>Clase de vehiculo:</th>';
                    vehicleData += '                <td>'+swVehicles[i].vehicle_class+'</td>';
                    vehicleData += '            </tr>';
                    vehicleData += '        </tbody>';
                    vehicleData += '    </table>';
                    vehicleData += '</div>';
                }
                $('#vehicles .container .row').html(vehicleData);
                $('#vehicles').fadeIn('slow');
                $('#prev-vehicles').on('click',function(e){
                    e.preventDefault();
                    if(data.previous!=null){
                        loadVehicles(data.previous);
                    }
                });
                $('#next-vehicles').on('click',function(e){
                    e.preventDefault();
                    if(data.next!=null){
                        loadVehicles(data.next);
                    }
                });

            },
            error:      function(e){
                alert('Ha ocurrido un error cargando los vehiculos');
            }
        });
    }
})