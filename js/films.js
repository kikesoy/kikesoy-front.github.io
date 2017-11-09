$(document).ready(function(){
    var root = 'https://swapi.co/api/films/'
    console.log(root);
    
    loadFilms(root);

    function loadFilms(url){
        $.ajax({
            url:        url,
            method:     'GET',
            success:    function(data){
                var filmList = document.getElementById('film-list');
                var filmData = '';
                for(i=0;i < data.results.length;i++){
                    // console.log(+[i]+1);
                    $('.carousel-indicators').append('<li data-target="#swCarousel" data-slide-to="'+[i]+'" id="film-indicator-'+[i]+'"></li>');
                };
                $('#film-indicator-0').addClass('active');
                for(var film in data.results){
                    filmData += '<article class="carousel-item" id="film-id-'+[film]+'">';
                    filmData += '     <header class="film-cover header-light" style="background-image:url(img/film-bg-ep-'+data.results[film].episode_id+'.jpg);">';
                    filmData += '        <h1 class="container">'+data.results[film].title+'</h1>';             
                    filmData += '    </header>';
                    filmData += '    <div class="container content">';
                    filmData += '        <div class="row">';
                    filmData += '            <aside class="col-md-4">';
                    filmData += '                <ul class="list-group">';
                    filmData += '                    <li class="list-group-item list-header"><h4 class="film-episode">Episode '+data.results[film].episode_id+'</h4></li>';
                    filmData += '                    <li class="list-group-item"><i class="fa fa-bullhorn" aria-hidden="true"></i> '+data.results[film].director+'</li>';
                    filmData += '                    <li class="list-group-item"><i class="fa fa-ticket" aria-hidden="true"></i> '+data.results[film].producer+'</li>';
                    filmData += '                    <li class="list-group-item"><i class="fa fa-calendar" aria-hidden="true"></i>  '+data.results[film].release_date+' Fecha</li>';
                    filmData += '                </ul>';
                    filmData += '            </aside>';
                    filmData += '            <div class=col-md-8>';
                    filmData += '                <h3>Sinopsis</h3>';
                    filmData += '                <p>'+data.results[film].opening_crawl+'</p>';
                    filmData += '                <h3>Personajes</h3>';
                    filmData += '                <ul class="row">';
                    for(j=0;j<data.results[film].characters.length;j++){
                        filmData +=  loadCharacterFilm(data.results[film].characters[j]);
                    };
                    filmData += '                </ul>';
                    filmData += '            </div>';
                    filmData += '        </div>';
                    filmData += '    </div>';
                    filmData += '</article>';
                }
                $('#film-list').html(filmData);
                $('#film-id-0').addClass('active');
                $('#films').fadeIn('slow');
            },
            error:      function(e){
                console.log('Hubo un error cargando los films.');
            }
        });
    }
    function loadCharacterFilm(url){
        var filmCharacter = '';
        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function(data){
                filmCharacter += '<li class="col-md-6 col-lg-4">'+data.name+'</li>';
            },
            error: function(e){
                console.log(e);
            }
        });
        return filmCharacter;
    }


});



/*$(document).ready(function(){
    var root = 'https://swapi.co/api/';

    // METODO 1
    $.ajax({
        url: root,
        method: 'GET',
    }).then(function(data){
        for(var i=0;i<data.results.length;i++){

        }
    });

    // METODO 2

    $.ajax({
        url:    root + 'films/',
        method: 'GET',
        success: function(data){
            var tarjeta = '';
            for(var i=0;i<data.results.length;i++){
                tarjeta += ''

            }
        },
        error: function(e){

        },
    });
});
*/