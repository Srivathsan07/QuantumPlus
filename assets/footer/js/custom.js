$(document).ready(function(){
	$('.menu_icon').click(function(){
		$(".navlist").toggleClass("open");
		$(this).toggleClass('opened').setAttribute('aria-expanded', this.classList.contains('opened'));
	
	});
});