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
var meme=document.getElementById('meme');
meme.onmouseover=function(){
	meme.style.animation="aaa 0.3s linear 1 alternate";
}
meme.onmouseout=function(){
	meme.style.animation="bbb 0.3s linear 1 alternate";
}
var momo=document.getElementById('momo');
momo.onmouseover=function(){
	momo.style.animation="aaa 0.3s linear 1 alternate";
}
momo.onmouseout=function(){
	momo.style.animation="bbb 0.3s linear 1 alternate";
}
// var html=document.getElementsByTagName("html")[0];
// function fontSizeFormat(){
// 	var width=document.documentElement.clientWidth||document.body.clientWidth;
// 	var fontSize=(20/640)*width;
// 	html.style.fontSize=fontSize+"px";
// }
// window.onload=window.onresize=function(){
// 	fontSizeFormat();
// }