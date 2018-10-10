//修改密码
var btn=document.getElementsByClassName("right_4");
var rit=document.getElementsByClassName("right_2");
btn[0].onclick=function(){
	rit[0].style.display ="none";
	rit[1].style.display ="block";
	rit[2].style.display ="none";
}
btn[1].onclick=function(){
	rit[0].style.display ="none";
	rit[1].style.display ="none";
	rit[2].style.display ="block";
}