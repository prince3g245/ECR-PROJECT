$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>60){
        $("#fixed_navbar").addClass("nav_bar_fixed_top");
      }
      else{
        $("#fixed_navbar").removeClass("nav_bar_fixed_top");
      }
    });
});
$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>300){
        $("#product_icon").addClass("main");
          $("#home_icon").removeClass("main");
      }
      else{
          $("#product_icon").removeClass("main");
          $("#home_icon").addClass("main");
      }
          });
});
$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>4000){
        $("#mall_icon").addClass("main");
           $("#product_icon").removeClass("main");
      }
            else{
      	    $("#mall_icon").removeClass("main");
      }
    });
});
$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>5000){
        $("#about_icon").addClass("main");
           $("#mall_icon").removeClass("main");
      }
            else{
      	    $("#about_icon").removeClass("main");
      }
    });
});
$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>5800){
        $("#team_icon").addClass("main");
         $("#about_icon").removeClass("main");
      }
            else{
      	    $("#team_icon").removeClass("main");
      }
    });
});
$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>6500){
        $("#contact_icon").addClass("main");
         $("#team_icon").removeClass("main");
      }
            else{
      	    $("#contact_icon").removeClass("main");
      }
    });
});


