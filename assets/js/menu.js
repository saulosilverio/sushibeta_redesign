/* Scripts menu e busca */
initMenu = function(idMenu) {
  $('#'+idMenu).toggleClass('open-menu');
}
$('html').click(function(event) {
	var target = $( event.target );
	if( !$(target).hasClass('i-filter') && $('#menu').hasClass('open-menu') ){
	    $('#menu').removeClass('open-menu');
    }
});