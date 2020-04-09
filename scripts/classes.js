$(document).ready(function(){
    var dayOfWeek;
    $('.btnPreviousDay').click(function(){
        dayOfWeek = $(this).closest('td').index()+1;
        console.log(dayOfWeek);
        dayOfWeek--;
        if(dayOfWeek < 2){
            dayOfWeek = 8;
        }
        console.log(dayOfWeek);
        $('table td:not(:nth-child(1)):not(:nth-child('+dayOfWeek+'))').hide();
        $('table td:nth-child('+dayOfWeek+'):not(.empty)').show();
    });
    $('.btnNextDay').click(function(){
        dayOfWeek = $(this).closest('td').index()+1;
        console.log(dayOfWeek);
        dayOfWeek++;
        if(dayOfWeek > 8){
            dayOfWeek = 2;
        }
        console.log(dayOfWeek);
        $('table td:not(:nth-child(1)):not(:nth-child('+dayOfWeek+'))').hide();
        $('table td:nth-child('+dayOfWeek+'):not(.empty)').show();
    });

    // Animation on scroll configuration
    AOS.init({
        once: true,
        duration: 500
    }); 

});