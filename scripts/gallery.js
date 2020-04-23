$(document).ready(function(){
    var imageIndex;

    // Get src from chosen image and put it to src of modal image
    $('.gallery-link').click(function(){
        imageIndex = $(this).index();
        $('#galleryImage').attr('src', $(this).children().attr('src'));
        $('#modalGallery').modal();
    });

    // Show previous image in modal
    $('.btnPreviousImage').click(function(){
        imageIndex--;
        if(imageIndex < 0){
            imageIndex = 11;
        }
        $('#galleryImage').attr('src', $('.gallery-link:nth-child('+(imageIndex+1)+')').children().attr('src'));
    });
    // Show next image in modal
    $('.btnNextImage').click(function(){
        imageIndex++;
        if(imageIndex > 11){
            imageIndex = 0;
        }
        $('#galleryImage').attr('src', $('.gallery-link:nth-child('+(imageIndex+1)+')').children().attr('src'));
    });
    // Close modal
    $('.btnCloseImage').click(function(){
        $('#modalGallery').modal('hide')
    });
});