$(document).ready(function(){
    $(window).scroll(countOnScroll);

    var viewed = false;

    function isScrolledIntoView(elem) {
        // Distance between the top of the view and the top of the page
        var docViewTop = $(window).scrollTop();
         // Distance between the bottom of the view and the top of the page
        var docViewBottom = docViewTop + $(window).height();
        // Distance between the top of the element and the top of the page
        var elemTop = $(elem).offset().top;
        // Distance between the bottom of the element and the top of the page
        var elemBottom = elemTop + $(elem).height();
        // Return TRUE if element is in view
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    // Start counting animation of each value if it is in view
    function countOnScroll() {
        if (isScrolledIntoView($(".numbers")) && !viewed) {
            // Set viewed to TRUE so it is only counted once
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

