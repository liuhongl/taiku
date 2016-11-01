$(function(){
	/*显示二维码*/
	$(".two_code").mouseenter(function(){
    $(".code").css("display","block");
  	});
  	$(".two_code").mouseleave(function(){
    $(".code").css("display","none");
  	});
	
	
	
	/*吸顶*/
	$(window).scroll(function(){
		var oTop = $(window).scrollTop();
		
		if (oTop>=35) {
			$(".hideNav").css({"position":"fixed","top":"0","left":"0"})
		} else{
			$(".hideNav").css("position","static")
		}
	});
	
	/*改变样式*/
	 $(".hideNav ul  li").click(function(){
	$(this).addClass("navChange_style").siblings().removeClass("navChange_style")
   })
	
	
    $(".activeConLnav li a").click(function(){
	$(this).addClass("change_style").parent().siblings().find("a").removeClass("change_style")
   })
	
	
	/*轮播图*/
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay:5000,
	    
	    
	     pagination: '.swiper-pagination',
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	   
		
		
 	})
	/*内容导航*/
	$(".qb").click(function(){
		$(".active_con_ul li").hide(100);
		
		$(".active_con_ul li").show(100);
	})
	
	
	$(".ds").click(function(){
		$(".active_con_ul li").hide(100);
		$(".dasai").show(100);
		
	})
	$(".px").click(function(){
		$(".active_con_ul li").hide(100);
		$(".peixun").show(100);
		
	})
	
	$(".zt").click(function(){
		$(".active_con_ul li").hide(100);
		$(".zhuanti").show(100);
		
	})
	
	$(".ly").click(function(){
		$(".active_con_ul li").hide(100);
		$(".luyan").show(100);
		
	})
	$(".zx").click(function(){
		$(".active_con_ul li").hide(100);
		$(".zixun").show(100);
		
	})
	$(".sl").click(function(){
		$(".active_con_ul li").hide(100);
		$(".shalong").show(100);
		
	})
	
	$(".gkk").click(function(){
		$(".active_con_ul li").hide(100);
		$(".gongkaike").show(100);
		
	})
	
	
	/*日历部分*/
	
	$('#ca').calendar({
		        width: 300,
		        height: 320,
		        data: [
					{
					  date: '2016/8/2',
					  value: 'Christmas Eve'
					},
					{
					  date: '2016/8/12',
					  value: 'Merry Christmas'
					},
					{
					  date: '2016/8/14',
					  value: '<p>深圳</p>'+'<p>2016第十期·在线直播精品路演</p>'
					},
					{
					  date: '2016/8/15',
					  value: 'Happy New Year'
					}
				],
		        onSelected: function (view, date, data) {
		            console.log('view:' + view)
		         
		            console.log('data:' + (data || 'None'));
		        }
		    });
		
		    $('#dd').calendar({
		        trigger: '#dt',
		        zIndex: 999,
				format: 'yyyy-mm-dd',
		        onSelected: function (view, date, data) {
		            console.log('event: onSelected')
		        },
		        onClose: function (view, date, data) {
		            console.log('event: onClose')
		            console.log('view:' + view)
		            console.log('date:' + date)
		            console.log('data:' + (data || 'None'));
		        }
		    });
		/*日历部分END*/	
	
})

