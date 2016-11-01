/*封装图片*/
var count = 0;
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
fadeIn(".filter .tutorC  .box");

fadeIn(" .partner  .bottom");

