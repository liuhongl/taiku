
$('[data-action="RLBtn"]').hover(function(){
	var $img = $('img', $(this));
	$img.attr('data-src-ori', $img.attr('src'));
	$img.attr('src', $img.attr('data-src-fd'));

		$(this).toggleClass('train_item_change');
	
}, function(){
	var $img = $('img', $(this));
	$img.attr('src', $img.attr('data-src-ori'));

		$(this).toggleClass('train_item_change');

});
//切换导师
		var div2=document.getElementById('div2');
		var div3=document.getElementById('div3');
		var liWidth=260;
		var num = 0;

		$(".tutor_teacher_wrapper .right").click(function(){

			if(num>=4) {
				//$(div3).stop().animate({"left": -liWidth * 5 + "px"}, 1000);

			}else{
				num++;
				$(div3).stop().animate({"left": -liWidth * num + "px"}, 1000);
			}
		});
		$(".tutor_teacher_wrapper .left").click(function(){
			if(num==0){
				
			}else if(num>0){

				num--;
				$(div3).animate({ "left": -liWidth * num + "px"}, 1000);
			}
		});