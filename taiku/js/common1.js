$(function(){
	/*吸顶*/
	$(window).scroll(function(){
		var oTop = $(window).scrollTop();
		if (oTop>=35) {
			$(".hideNav").css({"position":"fixed","top":"0","left":"0"})
		} else{
			$(".hideNav").css("position","static")
		}
	});
	
	 //太库出品下拉
	$(".Pd_parent").mouseover(function(){
		$(".Pd_parent div").show();
	}).mouseout(function(){
		$(".Pd_parent div").hide();
	});
	$(".Pd_parent div").mouseleave(function(){
		$(this).hide();
	});
	//二维码hide/show
	$(".two_code").mouseover(function(){
		$(".two_code div").show();
	}).mouseout(function(){
		$(".two_code div").hide();
	});
	$(".two_code div").mouseleave(function(){
		$(this).hide();
	});
	
})
	