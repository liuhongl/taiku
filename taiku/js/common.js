
function lodeTW(URL,targetld){
		$.ajax({
		type:"get",
		dataType:"html",
		url:URL,
		async:false,
		success:function(msg){
			$("."+targetld).html(msg);
		}
	});
	}

