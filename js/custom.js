
  var user = document.querySelector('.user_icon');
  var userContent = document.querySelector('.user_icon_popup');
  var adds = document.querySelector('.adds_close');
  var adds_close = document.querySelector('.mobile_add');

// menu toggule 
$(document).ready(function(){
	$('.menu_icon').click(function(){
		$(".navlist").toggleClass("open");
		userContent.classList.remove('shadow');
		$(this).toggleClass('opened').setAttribute('aria-expanded', this.classList.contains('opened'));
	
	});
});

//user_icon_popup 
user.addEventListener('click',()=>{
    userContent.classList.toggle('shadow');
	document.querySelector(".navlist").classList.remove("open");
	document.querySelector(".menu_icon").classList.remove("opened");
	
});

// decrease increase 
$(function() {
	$('[data-decrease]').click(decrease);
	$('[data-increase]').click(increase);
	$('[data-value]').change(valueChange);
});

function decrease() {
	var value = $(this).parent().find('[data-value]').val();
	if(value > 1) {
		value--;
		$(this).parent().find('[data-value]').val(value);
		$('[data-decrease]').removeAttr('disabled');
	} else if (value <= 1) {
		$('[data-decrease]').attr('disabled','disabled')
		
	}
}

function increase() {
	var value = $(this).parent().find('[data-value]').val();
	if(value < 100) {
		value++;
		$(this).parent().find('[data-value]').val(value);
		$('[data-decrease]').removeAttr('disabled');
	}
}

function valueChange() {
	var value = $(this).val();
	if(value == undefined || isNaN(value) == true || value <= 0) {
		$(this).val(1);
	
	} else if(value >= 101) {
		$(this).val(100);
	}
} 

// adds section 
adds.addEventListener('click',()=>{
	adds_close.classList.add('hide');
});

setTimeout(function() {
	$('.adds_close').addClass('highlight');
  }, 6000);

