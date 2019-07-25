$(document).ready(function() {
    $('.option').hover(function(event) {
        /* Stuff to do when the mouse enters the element */
        
        $(this).toggleClass('active');

        /* Stuff to do when the mouse leaves the element */
    });
    $('.burger').on('click',function(event){
    	event.preventDefault();
    	$('body').toggleClass('show');
    });
});