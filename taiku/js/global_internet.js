$(".GIbanner > div").mouseenter(function(){
	$(this).find("dl").slideDown().show(500).parent().siblings().find("dl").hide();
})
$(".GIbanner > div").mouseleave(function(){
	$(".GIbanner dl").hide()
})

$(".pic1 div").mouseenter(function(){
		$(this).find(".title").css("display","none");
	})
$(".pic1 div").mouseleave(function(){
		$(this).find(".title").css("display","block");
	})
//techccode国内外切换
	$(".sort .left").click(function(){
		$(this).addClass("changestyle").siblings().removeClass("changestyle");
		$(".Tksite .in").show().siblings().hide();
	})
	$(".sort .center").click(function(){
		$(this).addClass("changestyle").siblings().removeClass("changestyle");
		$(".Tksite .foreign").show().siblings().hide();
	})
	$(".sort .right").click(function(){
		$(this).addClass("changestyle").siblings().removeClass("changestyle");
		$(".Tksite .openSoon").show().siblings().hide();
	})

//techccode国内外切换END
/*site切换*/
		var div2=document.getElementById('div2');
		var div3=document.getElementById('div3');
		var liWidth=1158;
		var num = 0;

		$(".Tksite .pic_Rbtn").click(function(){

			if(num>=1) {

			}else{
				num++;
				$(div3).stop().animate({"left": -liWidth * num + "px"}, 500);
			}
		});
		$(".Tksite .pic_Lbtn").click(function(){
			if(num==0){
				
			}else if(num>0){

				num--;
				$(div3).animate({ "left": -liWidth * num + "px"}, 500);
			}
		});
		
/*site切换END*/