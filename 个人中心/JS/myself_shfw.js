var lis=document.getElementsByClassName("left_in2")[0].getElementsByTagName("li");
var odiv=document.getElementsByClassName("center_right");
var right2=document.getElementsByClassName("right_2");
// var grzx=document.document.getElementById("grzx");
var grzx=document.getElementsByClassName("grzx")[0];
//alert(odiv.length);

// 个人中心—售后服务
var right0=document.getElementsByClassName("center_righta")[0];
var spans=document.getElementsByClassName("conTap")[0].getElementsByTagName("span");
spans[4].onclick=function(){
	spans[4].style.color="red";
	spans[0].style.color="";
	right0.style.display="block";
	odiv[4].style.display="none";
};
// 个人中心部分的Tab切换
	for(var i=0;i<lis.length;i++){//遍历
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				if(lis[j]==this){//匹配
					if(j==5){
						right2[0].style.display="block";
						right2[1].style.display="none";
						right2[2].style.display="none";
					}
					lis[j].style.backgroundColor="#ccc";
					odiv[j].style.display="block";
				}else{
					lis[j].style.backgroundColor="";
					odiv[j].style.display="none";
					grzx.style.display="none";
					right0.style.display="none";
					spans[4].style.color="black";
				}
			}
		}
	}
var conn=document.getElementsByClassName("conn");
conn[0].onclick=function(){
	right0.style.display="block";
	odiv[4].style.display="none";
}
conn[1].onclick=function(){
	right0.style.display="block";
	odiv[4].style.display="none";
}
conn[2].onclick=function(){
	right0.style.display="block";
	odiv[4].style.display="none";
}
