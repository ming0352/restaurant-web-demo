$(document).ready(function() {
    $('.menu').hover(function(event) {
        /* Stuff to do when the mouse enters the element */
        
        $(this).toggleClass('active');

        /* Stuff to do when the mouse leaves the element */
    });
});