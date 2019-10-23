$(document).ready(function(){
	//Question 13
	$("html").click(function(){
		$("p:contains(I am a hidden secret)").slideUp(2000);
	});

	// Question 12
	$("button").click(function(){
		var userName = $("input").val();
		$("span").text("Good day " + userName + "!");
		$("input").val("");
	});
});