/*吸顶*/
	$(window).scroll(function(){
		var oTop = $(window).scrollTop();
		$(window).scroll(function(){
		var oTop = $(window).scrollTop();
		if (oTop>=15000) {
			$(".hideNav").css({"position":"fixed","top":"0","left":"0"})
		} else{
			$(".hideNav").css("position","static")
		}
	});
		if(oTop>=515){
			$(".GIIP_content .nav").css({"position":"fixed","left":"0","top":"0","background":"#ffffff"})
		}else{
			$(".GIIP_content .nav").css("position","static")
		}
		
	});

	$(".GIIP_content .nav li").click(function(){
		$(this).addClass("nav_changeStyle").siblings().removeClass("nav_changeStyle");
	})
/*吸顶END*/


/*导师切换*/
$(".inside").click(function(){
			$(this).addClass("change_style");
			$(".in").css("display","block");
			$(".out").css("display","none");
			$(".outside").removeClass("change_style");

		})

		$(".outside").click(function(){
			$(this).addClass("change_style");
			$(".in").css("display","none");
			$(".out").css("display","block");
			$(".inside").removeClass("change_style")
		})
/*导师切换END*/
		/*经理切换*/
	 	var div0=document.getElementById('div0');
		var div1=document.getElementById('div1');
		var divwidth=340;
		var index=0;
		
		function movL1(){
			clearInterval(timer);
			movL();
			timer=setInterval(movL,3000);
		}
		function movR1(){
			clearInterval(timer);
			movR();
			timer=setInterval(movR,3000);
		}
		timer=setInterval(movL,3000);
		function movL(){
			if(index<4)
			{index++;
			 startMove(div1,{left:-divwidth*index});
			}
			else
			{div1.style.left='0px';
			 index=1;
			 startMove(div1,{left:-divwidth*index})
			};
			
		}
		function movR(){
			if(index>=1)
			{index--;
			 startMove(div1,{left:-divwidth*index});}
			else
			{div1.style.left='-2150px';
			 index=3.2;
			 startMove(div1,{left:-divwidth*index});
			}
			
			
		}
		div1.onmouseover=function(){
			clearInterval(timer)
		}
		div1.onmouseout=function(){
			clearInterval(timer);
			timer=setInterval(movL,3000)
		}

		/*经理切换END*/
		/*产品分类切换*/
		var div2=document.getElementById('div2');
		var div3=document.getElementById('div3');
		var liWidth=320;
		
		var num = 0

		var flag = false;
		$(".train_item .right").click(function(){
			if(!flag){
				flag = true;
				var $first = $('li', div3).first();
				$first.clone(false).appendTo($(div3));
				$(div3).stop(true).animate({left:-liWidth * 2}, "slow", function(){
					$first.remove();
					$(div3).css({left:-liWidth+'px'});
					flag = false;
				});
			}
		});
		$(".train_item .left").click(function(){
			if(!flag){
				flag = true;
				$(div3).stop(true).animate({left: 0}, "slow", function(){
					$('li', div3).last().prependTo($(div3));
					$(div3).css({left:-liWidth+'px'});
					flag = false;
				});
			}
		});
/*产品分类切换END*/

$('[data-action="RLBtn"]').hover(function(){
	var $img = $('img', $(this));
	$img.attr('data-src-ori', $img.attr('src'));
	$img.attr('src', $img.attr('data-src-fd'));
	
	var $parent = $(this).parent();
	if($parent.hasClass('daoshi')){
		$(this).toggleClass('manager_change');
	}else if($parent.hasClass('train_item')){
		$(this).toggleClass('train_item_change');
	}
}, function(){
	var $img = $('img', $(this));
	$img.attr('src', $img.attr('data-src-ori'));
	
	var $parent = $(this).parent();
	if($parent.hasClass('daoshi')){
		$(this).toggleClass('manager_change');
	}else if($parent.hasClass('train_item')){
		$(this).toggleClass('train_item_change');
	}
});