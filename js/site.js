$(document).ready(function() {

  // initialize scrollto
  $('a.scrollto').click(function(e){
    $('html,body').scrollTo(this.hash, this.hash, {gap:{y: -50}});
    e.preventDefault();

    if ($('.navbar-collapse').hasClass('in')){
      $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
  });

});
