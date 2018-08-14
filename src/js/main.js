        // Меню
        $(document).ready(function () {

        //     $('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
          
        //     $("#menu-icon").on("click", function(){
        //       $("nav").slideToggle();
        //       $(this).toggleClass("active");
        //   });

        });


            
        //  Меню

        // Баннер

        $(document).ready(function () {

            $("#slider_container").owlCarousel({
                
                autoplay:true,
                items:1,
                dots:true,
                autoplayTimeout:2000,
                singleItem:true,

            });


            $("#slider_partners").owlCarousel({
                
                autoplay:true,
                items:4,
                nav:true,
                autoplayTimeout:2000,
                singleItem:true,

            });

          
        });