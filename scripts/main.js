$(document).ready(function(){
    $(window).scroll(testScroll);
        var viewed = false;

        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        function testScroll() {
        if (isScrolledIntoView($(".numbers")) && !viewed) {
            viewed = true;
            $('.value').each(function (){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text("+"+Math.ceil(now));
                }
            });
            });
        }
    }

    // Animation on scroll configuration
    AOS.init({
        once: true,
        duration: 500
    }); 

    // Carousel
    $('.carousel').carousel({
        interval: 8000
    })

    $('.feedbackBtn').click(function(){
        if($(this).text() == 'Read more...'){
            $(this).text('Hide comment');
        } else{
            $(this).text('Read more...');
        }
    });

});

