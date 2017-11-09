$(document).ready(function(){
    var root = 'https://swapi.co/api/people/';
    
    loadPeople(root);

    function loadPeople(url){
        $.ajax({
            url:        url,
            method:     'GET',
            success:    function(data){
                var peopleData = '';
                for(var people in data.results){
                    var characterName = data.results[people].name;
                    var trimCharacterName = characterName.replace(/ /g,'');
                    peopleData += '<article class="col-sm-6" id="film-id-'+[+people+1]+'">';
                    peopleData += '    <div class="card">';
                    peopleData += '        <img class="card-img-top" src="img/people/'+trimCharacterName+'.jpg" alt="'+data.results[people].name+    '">';
                    peopleData += '        <div class="card-body">';
                    peopleData += '            <h4>'+data.results[people].name+'</h4>';
                    for(j=0;j<data.results[people].species.length;j++){
                        peopleData += loadSpecies(data.results[people].species[j]);
                    };
                    for(k=0;k<data.results[people].species.length;k++){
                        peopleData += loadLanguage(data.results[people].species[k]);
                    };
                    peopleData +=              loadPlanet(data.results[people].homeworld);
                    peopleData += '             <h5>Peliculas:</h5>';
                    peopleData += '            <ul>';
                    for(l=0;l<data.results[people].films.length;l++){
                        peopleData +=  loadFilms(data.results[people].films[l]);
                    };
                    peopleData += '            </ul>';
                    peopleData += '        </div>';
                    peopleData += '    </div>';
                    peopleData += '</article>';
                }
                $('#people .container .row').html(peopleData);
                $('#people').fadeIn('slow');
                $('#prev-people').on('click',function(e){
                    e.preventDefault();
                    if(data.previous!=null){
                        loadPeople(data.previous);
                    }
                });
                $('#next-people').on('click',function(e){
                    e.preventDefault();
                    if(data.next!=null){
                        loadPeople(data.next);
                    }
                });       
            },
            error:      function(e){
                console.log('Hubo un error cargando los personajes.');
            }
        });
    }
    function loadSpecies(url){
        var speciesInfo = '';
        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function(data){
                speciesInfo += '<p><strong>Raza: </strong>'+data.name+' ('+data.classification+')</p>';
            },
            error: function(e){
                console.log(e);
            }
        });
        return speciesInfo;
    }
    function loadLanguage(url){
        var languageInfo = '';
        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function(data){
                languageInfo += '<p class="card-text">Idioma: '+data.language+'</p>';
            },
            error: function(e){
                console.log(e);
            }
        });
        return languageInfo;
    }
    function loadPlanet(url){
        var planetInfo = '';
        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function(data){
                planetInfo += '<p class="card-text">Nativo de: '+data.name+'</p>';
            },
            error: function(e){
                console.log(e);
            }
        });
        return planetInfo;
    }
    function loadFilms(url){
        var filmInfo = '';
        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function(data){
                filmInfo += '<li>Episode '+data.episode_id+': '+data.title+'</li>';
            },
            error: function(e){
                console.log(e);
            }
        });
        return filmInfo;
    }
});