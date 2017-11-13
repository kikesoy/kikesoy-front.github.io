$(document).ready(function(){
    var root = 'https://swapi.co/api/planets/'

    loadPlanets(root);

    function loadPlanets(url){
        $.ajax({
            url:        url,
            method:     'GET',
            success:    function(data){
                var swPlanets = data.results;
                var planetData = '';
                for(i=0;i<swPlanets.length;i++){
                    planetData += '<div id="planet-id-'+[i]+'" class="col-sm-6">';
                    planetData += '    <table class="table">';
                    planetData += '        <thead>';
                    planetData += '        <th colspan="2">';
                    planetData += '            <h4>'+swPlanets[i].name+'</h4>';
                    planetData += '        </th>';
                    planetData += '        </thead>';
                    planetData += '        <tbody>';
                    planetData += '            <tr>';
                    planetData += '                <th>Diametro:</th>';
                    planetData += '                <td>'+swPlanets[i].diameter+'</td>';
                    planetData += '            </tr>';
                    planetData += '            <tr>';
                    planetData += '                <th>Clima:</th>';
                    planetData += '                <td>'+swPlanets[i].climate+'</td>';
                    planetData += '            </tr>';
                    planetData += '            <tr>';
                    planetData += '                <th>Terreno:</th>';
                    planetData += '                <td>'+swPlanets[i].terrain+'</td>';
                    planetData += '            </tr>';
                    planetData += '            <tr>';
                    planetData += '                <th>Superficie de agua:</th>';
                    planetData += '                <td>'+swPlanets[i].surface_water+'</td>';
                    planetData += '            </tr>';
                    planetData += '            <tr>';
                    planetData += '                <th>Poblacion:</th>';
                    planetData += '                <td>'+swPlanets[i].population+'</td>';
                    planetData += '            </tr>';
                    planetData += '        </tbody>';
                    planetData += '    </table>';
                    planetData += '</div>';
                }
                $('#planets .container .row').html(planetData);
                $('#planets').fadeIn('slow');
                $('#prev-planets').on('click',function(e){
                    e.preventDefault();
                    if(data.previous!=null){
                        loadPlanets(data.previous);
                    }
                });
                $('#next-planets').on('click',function(e){
                    e.preventDefault();
                    if(data.next!=null){
                        loadPlanets(data.next);
                    }
                });

            },
            error:      function(e){
                console.log('Ha ocurrido un error cargando los planetas');
            }
        });
    }
})