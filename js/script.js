$(function(){
	$("#Logo01").fadeIn(1000);
	$("#Load").delay(3000).fadeOut(1000).queue(function (next) { 
		$("#Slogan > :nth-child(1)").show();
		$("#Slogan > :nth-child(1)").addClass("SloganAnimate").delay(2500).queue(function (next){
			$("#Slogan > :nth-child(2)").show();
			$("#Slogan > :nth-child(2)").addClass("SloganAnimate")
			next();
		});
		next();
	});

});