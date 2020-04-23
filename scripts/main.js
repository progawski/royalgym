$(document).ready(function(){
    $(window).scroll(countOnScroll);

    var viewed = false;

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    // Start counting 
    function countOnScroll() {
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

    // Toggle text of feedback button on click
    $('.feedbackBtn').click(function(){
        if($(this).text() == 'Read more...'){
            $(this).text('Hide comment');
        } else{
            $(this).text('Read more...');
        }
    });

});

