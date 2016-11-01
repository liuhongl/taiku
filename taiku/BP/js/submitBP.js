
//显示提示
var mark = true;
 $(".BPcontent select").change(function(){
 	mark = true;
        $(".ProLoacca").hide();
        
        
    });


$(".BPcontent input[type='button']").click(function(){
	mark = false;
	
	var $project = $(".BPcontent input[type='text']");
	var $location = $(".BPcontent select");
	var $file  = $(".BPcontent input[type='file']");

	$($project).blur(function(){
		nameval = $(this).val();
		console.log(nameval.length);
		if(nameval.length<1){
			
			$(".project").show();
		}else{
			$(".project").hide();
		}
	});
	
	if ($project.val()=="") {
		
		$(".project").show();
	}else{
	
		$(".project").hide();
		
	}
	
	
	
	if ($location.val()=="") {
		
		$(".ProLoacca").show();
	}else{
	
		$(".ProLoacca").hide();
		
	}
	
	
	if ($file.val()=="") {
		
		$(".file").show();
	}else{
		$(".file").hide();
	}
	
	
	$project.focusin(function(){
		
		$(".project").hide();
	})
	$file.focusin(function(){
		$(".file").hide();
	})
	
	$location.focusin(function(){
		$(".ProLoacca").hide();
	})
})



$(".BPcontent .present").click(function(){
	mark = false;
	
	var $project = $(".BPcontent input[type='text']");
	var $location = $(".BPcontent select");
	var $file  = $(".BPcontent input[type='file']");

	$($project).blur(function(){
		nameval = $(this).val();
		console.log(nameval.length);
		if(nameval.length<1){
			
			$(".project").show();
		}else{
			$(".project").hide();
		}
	});
	
	if ($project.val()=="") {
		
		$(".project").show();
	}else{
	
		$(".project").hide();
		
	}
	
	
	
	if ($location.val()=="") {
		
		$(".ProLoacca").show();
	}else{
	
		$(".ProLoacca").hide();
		
	}
	
	
	if ($file.val()=="") {
		
		$(".file").show();
	}else{
		$(".file").hide();
	}
	
	
	$project.focusin(function(){
		
		$(".project").hide();
	})
	$file.focusin(function(){
		$(".file").hide();
	})
	
	$location.focusin(function(){
		$(".ProLoacca").hide();
	})
})




$("#name").blur(function(){
		nameval = $("#name").val();
		console.log(nameval.length);
		if(nameval.length<1){
			$("#error_name").text('姓名不能为空');
			$("#error_name").show();
		}else{
			$("#error_name").hide();
		}
	});

 $("select").change(function(){
 	mark = true;
        $(".ProLoacca").hide();
        
        
    });

//改变文字字数
var $textarea = $(".BPcontent textarea");
var $rest = $(".BPcontent .rest");
var $number = $(".BPcontent .number"); 

 $textarea .keyup(function(){
 	var $restC = 200-$textarea.val().length;
 	var num = $textarea.val().length;
 	
 	 if(num>200)
  {    
     
    eval($textarea.val().length=num.substr(0,208));   
    $rest.text("0");
 	$number.text("200");
  }    
 	else{
 		$rest.text($restC);
 		$number.text(num);
 	}
 	
 	
 })

//提交BP


 //省市二级联动
 new PCAS("province3","city3","area3");