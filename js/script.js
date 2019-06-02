
$(function(){
	//loading
	$("#Logo01").fadeIn(1000);
	$("#Load").delay(4000).fadeOut(1000).queue(function (next) { 
		$("#Slogan > :nth-child(1)").show();
		$("#Slogan > :nth-child(1)").addClass("SloganAnimate").delay(2500).queue(function (next){
			$("#Slogan > :nth-child(2)").show();
			$("#Slogan > :nth-child(2)").addClass("SloganAnimate")
			next();
		});
		next();
	});
	//url
	var HashTag = location.hash.substr(1);
	$(".nav-pills #v-pills-"+HashTag+"-tab").click();
});
function TopScroll(){
	window.scrollTo(0,0)
}

