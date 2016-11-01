$(function(){
	var count = 0;
	var mark = false;
    /*头部文字切换*/
   $("#head_wrap .English").click(function(){
   	$(this).css("color","#ffaa3c").siblings().css("color","#555555");

   })
   $("#head_wrap .chinese").click(function(){
   	$(this).css("color","#ffaa3c").siblings().css("color","#555555");

   })
   
   $(".head_wrap .English").click(function(){
   	$(this).css("color","#FFFFFF");
   	$(".head_wrap .chinese").css("color","rgba(255,255,255,0.5)")
   })
   $(".head_wrap .chinese").click(function(){
   	$(this).css("color","#FFFFFF");
   	$(".English").css("color","rgba(255,255,255,0.5)")
   })
   
   /*显示二维码*/
	/*$(".two_code").mouseenter(function(){
    $(".code").css("display","block");
  	});
  	$(".two_code").mouseleave(function(){
    $(".code").css("display","none");
  	});*/
	/*显示二维码END*/
	
	
	/*吸顶*/
	$(window).scroll(function(){
		var oTop = $(window).scrollTop();
		if(oTop>=100){
			$(".hideNav").slideDown().show(1000)
		}else{
			$(".hideNav").slideUp().hide()
		}
	});
	/*吸顶END*/
	
	/*导航改变样式*/
	$(".nav ul li").click(function(){
		$(this).addClass("bottom_style").siblings().removeClass("bottom_style")
	})
	
	$(".hideNav ul li").click(function(){
		$(this).addClass("hideBottom_style").siblings().removeClass("hideBottom_style")
	})

	/*导航改变样式END*/
	/*轮播图*/
	$(".swiper-container").mouseover(function(){
		$(".swiper-button-next").show();
		$(".swiper-button-prev").show();
		
		
	})
	$(".swiper-container").mouseleave(function(){
		$(".swiper-button-next").hide();
		$(".swiper-button-prev").hide();
		
	})
	
	
	
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay:5000,
	    autoplayDisableOnInteraction : false,
		

	    
	    pagination: '.swiper-pagination',
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	   
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    	swiperAnimateCache(swiper); //隐藏动画元素 
    	swiperAnimate(swiper); //初始化完成开始动画
    	
  		}, 
  		
  		onSlideChangeEnd: function(swiper){ 
    	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  		} 	
 	})
	
	/*轮播图END*/
	
	
	/*跳动的小鼠标*/
 	setInterval(function(){
 		$(".mouse img ").animate({"top":"-4px"} ,600);
 		
 		$(".mouse img").animate({"top":"0px"} ,600);
 	},1200)
 	/*跳动的小鼠标END*/
 	
 	
	/*太库图*/

	$(".content .con_2 .L").addClass("bg");
	$(".content .con_2 .L").click(function(){
		$(this).addClass("bg").siblings().removeClass("bg")
		$(".pic1").css("display","block");
		$(".pic3").css("display","none");
		$(".pic2").css("display","none");
		
	})
	$(".content .con_2 .C").click(function(event){
		$(this).addClass("bg").siblings().removeClass("bg");
		
		$(".pic1").css("display","none");
		$(".pic3").css("display","none");
		$(".pic2").css("display","block");
		
	})
	$(".content .con_2 .R").click(function(){
		$(this).addClass("bg").siblings().removeClass("bg");
		
		$(".pic1").css("display","none");
		$(".pic3").css("display","block");
		$(".pic2").css("display","none");
		
	})
	
	$(".pic1 div").mouseenter(function(){
		$(this).find(".title").css("display","none");
	})
	$(".pic1 div").mouseleave(function(){
		$(this).find(".title").css("display","block");
	})
	
	$(".pic2 div").mouseenter(function(){
		$(this).find(".title").css("display","none");
	})
	$(".pic2 div").mouseleave(function(){
		$(this).find(".title").css("display","block");
	})
	$(".pic3 div").mouseenter(function(){
		$(this).find(".title").css("display","none");
	})
	$(".pic3 div").mouseleave(function(){
		$(this).find(".title").css("display","block");
	})
	
	
	/*太库活动图*/
	
// 实现动画的八个图片函数封装

function fadeIn(DOM) {
	
	if(count <=10 ){
		
		$(document).scroll(function() {
		var num = $(document).scrollTop() + $(window).height();
		if (num >= $(DOM).offset().top) {
			$(DOM).addClass('animated fadeInUp');
		}
	})
	}
	count++;
}

fadeIn(" .pic1  .realPicTop");
fadeIn(" .pic1 .realPicBottom");


/*活动图片*/


fadeIn(".con_4c .center");

})


