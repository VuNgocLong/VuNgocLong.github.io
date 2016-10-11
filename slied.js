$(document).ready(function(){
	var stt = 0;
	startImg = parseInt($("img:first").attr("stt"));
	endImg = parseInt($("img:last").attr("stt"));
	alert(startImg);

	$("img").each(function(){
		if ($(this).is(':visible')){
			stt = parseInt($(this).attr("stt"));
		}
	})
	$("#next").click(function(){
		next = ++stt;
		if(next	== endImg){
			stt=(startImg-1);
		}
		$("img").hide();	
		$("img").eq(next).show();
		$("li").removeClass('active');
		$("li").eq(next).addClass('active');
	});

	$("#prev").click(function(){
		if (stt == 0) {
			stt=(endImg+1);
		};
		prev = --stt;

		$("img").hide();
		$("img").eq(prev).show();
		$("li").removeClass('active');
		$("li").eq(prev).addClass('active');
	});

	setInterval(function () {
		$("#next").click();
	},5000);
});