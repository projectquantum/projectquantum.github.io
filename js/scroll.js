    $("document").ready(function(){
        $('#button1').click(function(){
            $('html, body').animate({
                scrollTop: $("#the-project").offset().top-300
            }, 2000);
        });
        $('#button2').click(function(){
            $('html, body').animate({
                scrollTop: $("#the-team").offset().top-300
            }, 2000);
        });
        $('#button3').click(function(){
            $('html, body').animate({
                scrollTop: $("#get-involved").offset().top-300
            }, 112);
        });
    });