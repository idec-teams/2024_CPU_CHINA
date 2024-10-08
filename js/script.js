       $(function(){
          var str = '#len'; //increment by 1 up to 1-nelemnts
          $(document).ready(function(){
            var i, stop;
            i = 1;
            stop = 5; //num elements
            setInterval(function(){
              if (i > stop){
                return;
              }
              $('#len'+(i++)).toggleClass('bounce');
            }, 500)
          });
        });


        window.onload=function(){
            var s=skrollr.init();
        }

        window.addEventListener('resize', function() {
  
            s.refresh();
        });


        new WOW().init();

    

        var btn = $('#button');

        $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
        });
    
        btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
        });

