var add1=document.getElementById("add1");
var add2=document.getElementById("add2");
var ld1=document.getElementById("ld1");
var ld2=document.getElementById("ld2");
var l21=document.getElementById("l21");
var l22=document.getElementById("l22");
var qa3=document.getElementById("qa3");
var qa4=document.getElementById("qa4");
var qa5=document.getElementById("qa5");
var qa6=document.getElementById("qa6");
var qa7=document.getElementById("qa7");
var qa8=document.getElementById("qa8");
add1.onclick=function(){
	ld1.style.display="block";
	ld2.style.display="none";
	l21.style.backgroundColor="#e1e1e1";
	l22.style.backgroundColor="white";
	qa3.style.display="block";
	qa4.style.display="block";
	qa5.style.display="block";
	qa6.style.display="none";
	qa7.style.display="none";
	qa8.style.display="none";
}
add2.onclick=function(){
	ld1.style.display="none";
	ld2.style.display="block";
	l21.style.backgroundColor="white";
	l22.style.backgroundColor="#e1e1e1";
	qa3.style.display="none";
	qa4.style.display="none";
	qa5.style.display="none";
	qa6.style.display="block";
	qa7.style.display="block";
	qa8.style.display="block";
}

var bank1=document.getElementById("bank1");
var bank2=document.getElementById("bank2");
var bank3=document.getElementById("bank3");
var bank4=document.getElementById("bank4");
bank1.onclick=function(){
	clearcolor();
	bank1.style.backgroundColor="#ccc";
}
bank2.onclick=function(){
	clearcolor();
	bank2.style.backgroundColor="#ccc";
}
bank3.onclick=function(){
	clearcolor();
	bank3.style.backgroundColor="#ccc";
}
bank4.onclick=function(){
	clearcolor();
	bank4.style.backgroundColor="#ccc";
}
function clearcolor(){
	bank1.style.backgroundColor="white";
	bank2.style.backgroundColor="white";
	bank3.style.backgroundColor="white";
	bank4.style.backgroundColor="white";
}

var newaddd=document.getElementById("newaddd");
var newadd=document.getElementById("newadd");
var button=document.getElementById("button");
newaddd.onclick=function(){
	newadd.style.display="block";
}
button.onclick=function(){
	newadd.style.display="none";
}
var qa5=document.getElementById("qa5");
var qa8=document.getElementById("qa8");
var add1=document.getElementById("add1");
var add2=document.getElementById("add2");
qa5.onclick=function(){
	add1.style.display="noen";
}
qa8.onclick=function(){
	add2.style.display="noen";
}