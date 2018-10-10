var x=0;
var timer=null;
function a (){
	timer=setInterval(function(){
		if(x<$(".imgList li").length-1){
			x++;
		}else{
			x=0;
		}
		changeTo(x);
	},2000)
}
a();
function changeTo(a){
	$(".imgList").find("li").removeClass("imgOn").hide().
	eq(a).fadeIn().addClass("imgOn");
}
$("#toLeft").on("click",function(){
	clearInterval(timer);
	if(x<=0){
		x=$(".imgList li").length-1;
	}
	x--;
	a();
	changeTo(x);
});
$("#toRight").on("click",function(){
	clearInterval(timer);
	if(x>=$(".imgList li").length-1){
		x=0;
	}
	x++;
	a();
	changeTo(x);
})
var st=document.getElementsByTagName("a");
	function fontSizeFormat(){
		var width=document.documentElement.clientWidth;
		var fontSize=(20/640)*width;
		for (var i = 0; i < st.length; i++) {
			st[i].style.fontSize=fontSize+"px";
		}
	}
var addto=document.getElementsByClassName('add_to')[0]
var condition=document.getElementsByClassName('condition')[0]
var conditionli=condition.getElementsByTagName('li')
var screenresults=document.getElementsByClassName('screening_results')[0]
var flag=false;
addto.onmouseover=function(){
	condition.style.display="block";
	flag=true;
}
addto.onmouseout=function(){
	if (flag==true) {
		condition.style.display="none";
	}
}
condition.onmouseover=function(){
	condition.style.display="block";
	flag=true;
}
condition.onmouseout=function(){
	condition.style.display="none";
}
for (var i = 0; i < conditionli.length; i++) {
		conditionli[i].onclick=function(){
		screenresults.innerHTML=this.innerHTML;	
	}
}
	var parentscroll=document.getElementsByClassName("parent_scroll")[0];
	var recommendimg=document.getElementsByClassName("recommend_img")[0];
	var leftfloat=document.getElementsByClassName("left_float")[0];
	var rightfloat=document.getElementsByClassName("right_float")[0];
	var timer=null;
	var timer1=null;

function stop(){
 		clearInterval(timer);
 		clearTimeout(timer1);
 	}	
function fn_moveLeft(){
		parentscroll.scrollLeft++;
			if(parentscroll.scrollLeft>=recommendimg.offsetWidth){
				parentscroll.scrollLeft=0;
			}
			if (parentscroll.scrollLeft%recommendimg.offsetWidth==0) {
 			stop();
 			timer1=setTimeout(function(){
 				timer=setInterval('fn_moveLeft()',10)
 			},2000)
 		}
 	} 	
leftfloat.onclick=function(){
	stop();
	timer=setTimeout('fn_moveLeft()',1000);
} 	
rightfloat.onclick=function(){
	
} 	

