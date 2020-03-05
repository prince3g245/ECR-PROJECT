$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>50){
        $("#fixed_navbar").addClass("prince");
      }
      else{
        $("#fixed_navbar").removeClass("prince");
      }
    });
});


