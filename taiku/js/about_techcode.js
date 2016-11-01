$(function(){
	
	
	
	 	/*头部文字切换*/
   $("#head_wrap .English").click(function(){
   	$(this).css("color","#ffaa3c");
   	$("#head_wrap .chinese").css("color","#555555")
   })
   $("#head_wrap .chinese").click(function(){
   	$(this).css("color","#ffaa3c");
   	$(".English").css("color","#555555")
   })
   
   $(".head_wrap .English").click(function(){
   	$(this).css("color","#FFFFFF");
   	$(".head_wrap .chinese").css("color","rgba(255,255,255,0.5)")
   })
   $(".head_wrap .chinese").click(function(){
   	$(this).css("color","#FFFFFF");
   	$(".English").css("color","rgba(255,255,255,0.5)")
   })
   
   /*吸顶*/
	$(window).scroll(function(){
		var oTop = $(window).scrollTop();
		
		if (oTop>=35) {
			$(".hideNav").css({"position":"fixed","top":"0","left":"0"})
		} else{
			$(".hideNav").css("position","static")
		}
	});
   /*显示二维码*/
	$(".two_code").mouseenter(function(){
    $(".code").css("display","block");
  	});
  	$(".two_code").mouseleave(function(){
    $(".code").css("display","none");
  	});
 	
 	
	/*导航改变样式*/
	$(".nav ul li").click(function(){
		$(this).addClass("bottom_style").siblings().removeClass("bottom_style")
	})
	
	$(".hideNav ul li").click(function(){
		$(this).addClass("hideBottom_style").siblings().removeClass("hideBottom_style")
	})

	/*导航改变样式END*/
	
})
