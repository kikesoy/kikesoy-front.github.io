$(document).ready(function(){
    var root = 'https://swapi.co/api/starships/'

    loadStarships(root);

    function loadStarships(url){
        $.ajax({
            url:        url,
            method:     'GET',
            success:    function(data){
                //console.log(data.results);
                //console.log(url);
                var swStarships = data.results;
                var starshipData = '';
                for(i=0;i<swStarships.length;i++){
                    starshipData += '<div id="starship-id-'+[i]+'" class="col-sm-6">';
                    starshipData += '    <table class="table">';
                    starshipData += '        <thead>';
                    starshipData += '        <th colspan="2">';
                    starshipData += '            <h4>'+swStarships[i].name+'</h4>';
                    starshipData += '        </th>';
                    starshipData += '        </thead>';
                    starshipData += '        <tbody>';
                    starshipData += '            <tr>';
                    starshipData += '                <th>Modelo:</th>';
                    starshipData += '                <td>'+swStarships[i].model+'</td>';
                    starshipData += '            </tr>';
                    starshipData += '            <tr>';
                    starshipData += '                <th>Fabricante:</th>';
                    starshipData += '                <td>'+swStarships[i].manufacturer+' m</td>';
                    starshipData += '            </tr>';
                    starshipData += '            <tr>';
                    starshipData += '                <th>Tripulacion:</th>';
                    starshipData += '                <td>'+swStarships[i].crew+'</td>';
                    starshipData += '            </tr>';
                    starshipData += '            <tr>';
                    starshipData += '                <th>Pasajeros:</th>';
                    starshipData += '                <td>'+swStarships[i].passengers+'</td>';
                    starshipData += '            </tr>';
                    starshipData += '        </tbody>';
                    starshipData += '    </table>';
                    starshipData += '</div>';
                }
                $('#starships .container .row').html(starshipData);
                $('#starships').fadeIn('slow');
                $('#prev-starships').on('click',function(e){
                    e.preventDefault();
                    if(data.previous!=null){
                        loadStarships(data.previous);
                    }
                });
                $('#next-starships').on('click',function(e){
                    e.preventDefault();
                    if(data.next!=null){
                        loadStarships(data.next);
                    }
                });

            },
            error:      function(e){
                console.log('Ha ocurrido un error cargando los cruceros');
            }
        });
    }
})