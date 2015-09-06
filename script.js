$(document).ready(function(){
	var hours;
	var augustDays;
	var septdays;
	var left = $('.left');
	var right = $('.right');
	var A = 0;
	var dayCount= 0;
	for(hours = 1; hours < 25; hours++){
		$('.hoursWrap').append(
			'<div class="hour"><span class="hourNum">'+ hours +'</span></div>'
			)
	}
	for(augustDays =1; augustDays < 32; augustDays++){
		$('.august').append(
			'<div class="dayWrap">'+
				'<div class="date">Aug '+ augustDays + '</div>'+
				'<div class="day"></div>'+
			'</div>')
		dayCount += 102; //adds 102px for dynamic week container width
	}
	for(septDays =1; septDays < 31; septDays++){
		$('.september').append(
			'<div class="dayWrap">'+
				'<div class="date">Sept '+ septDays + '</div>'+
				'<div class="day"></div>'+
			'</div>')
		dayCount += 102;  //adds 102px for dynamic week container width
	}

	(function(){
		$('.weekWrap').width(dayCount); //this function creates the container width
	})();  

	left.on('click', function(){
		if(A < 0){
			$('.weekWrap').css('left','+=808px');
			A = A +808;
			console.log('going left');
		};
	});
	right.on('click', function(){
		if(A > (-dayCount)+1000){
			$('.weekWrap').css('left','-=808px');
			A = A -808;
			console.log('going right');
		};
	});
});