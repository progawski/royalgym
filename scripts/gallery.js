$(document).ready(function(){
    var imageIndex;

    $('.gallery-link').click(function(){
        imageIndex = $(this).index();
        $('#galleryImage').attr('src', $(this).children().attr('src'));
        $('#modalGallery').modal();
        console.log(imageIndex);
    });

    $('.btnPreviousImage').click(function(){
        imageIndex--;
        if(imageIndex < 0){
            imageIndex = 11;
        }
        console.log(imageIndex);
        $('#galleryImage').attr('src', $('.gallery-link:nth-child('+(imageIndex+1)+')').children().attr('src'));
    });
    $('.btnNextImage').click(function(){
        imageIndex++;
        if(imageIndex > 11){
            imageIndex = 0;
        }
        console.log(imageIndex);
        $('#galleryImage').attr('src', $('.gallery-link:nth-child('+(imageIndex+1)+')').children().attr('src'));
    });
});