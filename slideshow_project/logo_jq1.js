$(function() {
	
	// related examples and more: http://jquery.malsup.com/cycle/browser.html
	
	for (var i = 1; i <= 2; i++) {
	  $('div').append('<img src="logo1.png"/>');
	}

	$('.up').cycle({
	  fx : 'scrollUp',
	  speed: 2500,
	  timeout: 5000,
	  delay: 5000
	});

	$('.down').cycle({
	  fx : 'scrollDown',
	  speed: 2300,
	  timeout: 4500,
	  delay: 4600
	});

	$('.left').cycle({
	  fx : 'scrollLeft',
	  speed: 2100,
	  timeout: 4000,
	  delay: 4200
	});

	$('.right').cycle({
	  fx : 'scrollRight',
	  speed: 1900,
	  timeout: 3500,
	  delay: 3800
	});

	$('.zoom').cycle({
	  fx : 'zoom',
	  speed: 1700,
	  timeout: 3000,
	  delay: 3400
	});

	$('.toss').cycle({
	  fx : 'toss',
	  speed: 1500,
	  timeout: 2500,
	  delay: 3000
	});

	$('.blindZ').cycle({
	  fx : 'blindZ',
	  speed: 1300,
	  timeout: 2000,
	  delay: 2600
	});
				
	$('.slideX').cycle({
	  fx : 'slideX',
	  speed: 1100,
	  timeout: 1500,
	  delay: 2200
	});
				
	$('.slideY').cycle({
	  fx : 'slideY',
	  speed: 900,
	  timeout: 1000,
	  delay: 1800
	});
				
	$('body').dblclick(function(){
	  $('.up').cycle('stop');
	  $('.down').cycle('stop');
	  $('.left').cycle('stop');
	  $('.right').cycle('stop');
	  $('.zoom').cycle('stop');
	  $('.toss').cycle('stop');
	  $('.blindZ').cycle('stop');
	  $('.slideX').cycle('stop');
	  $('.slideY').cycle('stop');
	});
});
