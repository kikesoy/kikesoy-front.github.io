$(document).ready(function(){
    var navHeight = $('#nav');
    $('body').css({'padding-top':navHeight.height()});
    function removeActive(){
        $('#main-nav .nav-item').removeClass('active');
    };
    $('#btn-home a, .navbar-brand').on('click',function(e){
        e.preventDefault();
        removeActive();
        $('#placeholder').load('home.html');
        $('#btn-home').addClass('active');
    });
    $('#btn-films a').on('click',function(e){
        e.preventDefault();
        removeActive();
        $('#placeholder').load('films.html');
        $('#btn-films').addClass('active');
    });
    $('#btn-people a').on('click',function(e){
        e.preventDefault();
        removeActive();
        $('#placeholder').load('people.html');
        $('#btn-people').addClass('active');
    });
    $('#btn-planets a').on('click',function(e){
        e.preventDefault();
        removeActive();
        $('#placeholder').load('planets.html');
        $('#btn-planets').addClass('active');
    });
    $('#btn-vehicles a').on('click',function(e){
        e.preventDefault();
        removeActive();
        $('#placeholder').load('vehicles.html');
        $('#btn-vehicles').addClass('active');
    });
    $('#btn-starships a').on('click',function(e){
        e.preventDefault();
        removeActive();
        $('#placeholder').load('starships.html');
        $('#btn-starships').addClass('active');
    });
});