$(document).ready(function(){
    var root = 'https://swapi.co/api/films'
    
    loadHome(root);

    function loadHome(url){
        $.ajax({
            url:        url,
            method:     'GET',
            success:    function(data){
                var homeList = document.getElementById('home');
                var homeData = '';

                for(var film in data.results){
                    var resto = (+film+1) % 2;
                    var filmSynopsis = data.results[film].opening_crawl;
                    // console.log(resto);
                    // console.log(url);
                    // console.log(data.results[film].episode_id);
                    // console.log(filmSynopsis.substring(0,150)+'...');
                    if(resto == 0){
                        homeData += '<article id="home-ep-'+data.results[film].episode_id+'" class="film d-flex align-items-center flex-wrap flex-row-reverse no-gutters">';
                    }else{
                        homeData += '<article id="home-ep-'+data.results[film].episode_id+'" class="film d-flex align-items-center flex-wrap flex-row no-gutters">';
                    }
                    homeData += '<div class="col-lg-5 col-film-image">';
                    homeData += '    <img src="img/film-episode-'+data.results[film].episode_id+'.jpg" alt="Episode '+data.results[film].episode_id+'" class="img-fluid">';
                    homeData += '</div>';
                    homeData += '<div class="col-lg-7 col-film-info">';
                    homeData += '    <div class="col-10 offset-1">';
                    homeData += '        <header class="header-light">';
                    homeData += '            <h2 class="film-name">'+data.results[film].title+'</h2>';
                    homeData += '            <h5 class="film-episode">Episode '+data.results[film].episode_id+': <small class="film-director"><i class="fa fa-bullhorn" aria-hidden="true"></i> '+data.results[film].director+'</small> | <small class="film-producer"><i class="fa fa-ticket" aria-hidden="true"></i> '+data.results[film].producer+'</small> | <small class="film-date"><i class="fa fa-calendar" aria-hidden="true"></i> '+data.results[film].release_date+'</small></h5>';
                    homeData += '        </header>';
                    homeData += '        <p class="film-synopsis">'+filmSynopsis.substring(0,200)+'... <a href="'+data.results[film].url+'" id="btn-ep-'+data.results[film].episode_id+'" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#swModal" data-title="'+data.results[film].title+'" data-cover="'+data.results[film].episode_id+'" data-crawler="'+filmSynopsis+'" data-episode="Episode '+data.results[film].episode_id+'" data-director="'+data.results[film].director+'" data-producer="'+data.results[film].producer+'" data-release="'+data.results[film].release_date+'">Ver mas...</a></p>';
                    homeData += '    </div>';
                    homeData += '</div>';
                    homeData += '</article>';
                }
                $('#home').html(homeData);
                $('#home').fadeIn('slow');
                $('#swModal').on('show.bs.modal', function (eModal) {
                    $(this).find('.modal-episode').html($(eModal.relatedTarget).data('episode'));
                    $(this).find('.modal-cover').html('<img src="img/film-episode-'+$(eModal.relatedTarget).data('cover')+'.jpg" alt="Episodio '+$(eModal.relatedTarget).data('cover')+'" class="img-fluid">');
                    $(this).find('.modal-crawler').html($(eModal.relatedTarget).data('crawler'));
                    $(this).find('.modal-title').html($(eModal.relatedTarget).data('title'));
                    $(this).find('.modal-director').html($(eModal.relatedTarget).data('director'));
                    $(this).find('.modal-producer').html($(eModal.relatedTarget).data('producer'));
                    $(this).find('.modal-release').html($(eModal.relatedTarget).data('release'));
                });
                
                $('#btn-all-films').on('click',function(e){
                    $('#placeholder').load('films.html');
                    $('#main-nav .nav-item').removeClass('active');
                    $('#btn-films').addClass('active');
                });
            },
            error:      function(e){

            }
        });
    }
});