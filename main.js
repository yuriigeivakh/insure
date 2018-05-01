$(document).ready(function(){
	//card-list switcher
	$('.lines').click(function(){
		
		$('.table').toggle();
		$('#cardboard').toggleClass('none');
		//$('.rectangles').removeClass('rectangle');
		
		$('.lines').toggleClass("lines_active");
		$( ".rectangles > .rectangle" ).toggleClass('active');
	});
	$('.four-rectangles').click(function(){
		$('#cardboard').toggleClass('none');
		$('.table').toggle();
		$( ".rectangles > .rectangle" ).toggleClass('active');
		$('.lines').toggleClass("lines_active");
		//$('#rectangle').removeClass('rectangle');
		//$('#rectangle').addClass('active');
		
	});
	//menu
	$('#menu').click(function(){
		$('nav > .section > ul').addClass('menu');
		$(document).bind( "mouseup touchend", function(e){
			$('nav > .section > ul').removeClass('menu');
			});	
		$(window).resize(function() {		
					if (  $(window).width() > 1100 ) {			
						$('nav > .section > ul').removeClass('menu');
						
					}	
		});
	});
	
});