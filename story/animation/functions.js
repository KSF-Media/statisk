(function(){
    jQuery(document).ready(function(){
        jQuery('.fp-controlArrow').click(function(){
	    setTimeout(updateArrows, 500);
        });
	setTimeout(updateArrows, 500);
    });
})();

function updateArrows(){
    switch( jQuery('.slide.fp-slide.fp-table.active').attr('id') ){
        case 'slide1':
	    jQuery('.fp-controlArrow.fp-prev').addClass('disabled');
	    jQuery('.fp-controlArrow.fp-next').removeClass('disabled');
	    break;
        case 'slide3':
	    jQuery('.fp-controlArrow.fp-next').addClass('disabled');
	    jQuery('.fp-controlArrow.fp-prev').removeClass('disabled');
  	    break;
	default:
	    jQuery('.fp-controlArrow.fp-prev').removeClass('disabled');
	    jQuery('.fp-controlArrow.fp-next').removeClass('disabled');
	    break;
    }
}
