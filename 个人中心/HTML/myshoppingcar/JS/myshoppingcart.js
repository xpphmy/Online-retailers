var del=document.getElementById("del");
var yes=document.getElementById("yes");
var no=document.getElementById("no");
del.onclick=function(){
	yes.style.display="none";
	no.style.display="block";
}
var img1=document.getElementById("closeimg1");
var img2=document.getElementById("closeimg2");
img1.onclick=function(){
	img1.style.display="none";
	img2.style.display="block";
}
img2.onclick=function(){
	img2.style.display="none";
	img1.style.display="block";
}
var img3=document.getElementById("closeimg3");
var img4=document.getElementById("closeimg4");
img3.onclick=function(){
	img3.style.display="none";
	img4.style.display="block";
}
img4.onclick=function(){
	img4.style.display="none";
	img3.style.display="block";
}

var allture1=document.getElementById("allture1");
var allture2=document.getElementById("allture2");
allture1.onclick=function(){
	allture1.style.display="none";
	allture2.style.display="block";
	img1.style.display="block";
	img2.style.display="none";
	img4.style.display="block";
	img3.style.display="none";
}
allture2.onclick=function(){
	allture2.style.display="none";
	allture1.style.display="block";
	img1.style.display="none";
	img2.style.display="block";
	img4.style.display="none";
	img3.style.display="block";
}

var allture3=document.getElementById("allture3");
var allture4=document.getElementById("allture4");
allture3.onclick=function(){
	allture3.style.display="none";
	allture4.style.display="block";
	img1.style.display="block";
	img2.style.display="none";
	img4.style.display="block";
	img3.style.display="none";
}
allture4.onclick=function(){
	allture4.style.display="none";
	allture3.style.display="block";
	img1.style.display="none";
	img2.style.display="block";
	img4.style.display="none";
	img3.style.display="block";
}