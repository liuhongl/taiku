
//显示提示
var mark = true;
 $(".BPcontent select").change(function(){
 	mark = true;
        $(".ProLoca").hide();
        
        
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
		
		$(".ProLoca").show();
	}else{
	
		$(".ProLoca").hide();
		
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
		$(".ProLoca").hide();
	})
})



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
 new PCAS("P1","C1","A1");