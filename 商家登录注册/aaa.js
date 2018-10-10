$(".tab").on("click",function(){
	var x=$(".tab").index(this);
	$(".content").eq(x).css("display","block");
	if(x==0){
		$(".content").eq(x+1).css("display","none");
				$(".tab").eq(x).css("height","45px");
				$(".tab").eq(x).css("background","red");
				$(".tab").eq(x-1).css("background","white");
				// $(".tab").eq(x).css("width","210px");
	}
	if(x==1){
		$(".content").eq(x-1).css("display","none");
				$(".tab").eq(x).css("height","45px");
				$(".tab").eq(x).css("background","red");
				$(".tab").eq(x-1).css("background","white");
					// $(".tab").eq(x).css("width","210px");

	}
});