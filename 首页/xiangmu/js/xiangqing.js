$("#goodsshow_b1").on("click",function(){
	$("#goodsshow_a1").attr("src","images/show11.png");
})
$("#goodsshow_b2").on("click",function(){
	$("#goodsshow_a1").attr("src","images/show1.png");
})
var goodsnum_1=document.getElementById('goodsnum_1');
var add=document.getElementById('add');
var minus=document.getElementById('minus');
var num=1;
goodsnum_1.innerHTML=num;
add.onclick=function(){
	num+=1;
	goodsnum_1.innerHTML=num;
}
minus.onclick=function(){
	if(num>1){
		num-=1;
		goodsnum_1.innerHTML=num;
	}	
}
var buygoods=document.getElementById('buygoods');
var btn=buygoods.getElementsByTagName("button");
for(var i=0;i<btn.length;i++){
	btn[i].onclick=function(){
		for(j=0;j<btn.length;j++){
			if(btn[j]==this){
				btn[j].className="buyshow";
			}else{
				btn[j].className="";
			}
		}
	}
}
var goodscolor_1=document.getElementById('goodscolor_1');
var lia=goodscolor_1.getElementsByTagName("li");
for(var i=0;i<lia.length;i++){
	lia[i].onclick=function(){
		for(j=0;j<lia.length;j++){
			if(lia[j]==this){
				lia[j].className="buyselect";
			}else{
				lia[j].className="";
			}
		}
	}
}
var goodssize_1=document.getElementById('goodssize_1');
var lib=goodssize_1.getElementsByTagName("li");
for(var i=0;i<lib.length;i++){
	lib[i].onclick=function(){
		for(j=0;j<lib.length;j++){
			if(lib[j]==this){
				lib[j].className="buyselect";
			}else{
				lib[j].className="";
			}
		}
	}
}

