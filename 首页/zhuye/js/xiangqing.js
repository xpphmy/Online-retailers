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
				lib[j].className="buyselects";			
			}else{
				lib[j].className="";
			}
		}
	}
}
var buygoods=document.getElementById('buygoods');
var btn=buygoods.getElementsByTagName("button");
var goodsname=document.getElementById('goodsname');
for(var i=0;i<btn.length;i++){
	btn[i].onmouseover=function(){
		for(j=0;j<btn.length;j++){
			if(btn[j]==this){
				btn[j].className="buyshow";
			}else{
				btn[j].className="";
			}
		}
	}
}
btn[0].onclick=function(){
	if(confirm("是否购买"+goodsname.innerText+" "+$(".buyselect").html()+" "+$(".buyselects").html()+" "+goodsnum_1.innerHTML+"件")){
		alert("购买成功")
	};
}
var xxx=document.getElementById('xxx');
btn[1].onclick=function(){
	alert("成功加入购物车");
	var xxx1=document.createElement("div");
	var xxx2=document.createTextNode(goodsname.innerText+" "+$(".buyselect").html()+" "+$(".buyselects").html()+" "+goodsnum_1.innerHTML+"件");
	xxx1.appendChild(xxx2);
	xxx.appendChild(xxx1);
}
var comment_a1=document.getElementById('comment_a1');
var lic=comment_a1.getElementsByTagName('li');
for(var i=0;i<lic.length;i++){
	lic[i].onclick=function(){
		for(j=0;j<lic.length;j++){
			if(lic[j]==this){
				lic[j].firstChild.style.background="red";
			}else{
				lic[j].firstChild.style.background="";
			}
		}
	}
}
var outer=document.getElementById("outer");//获取用于存放数据的父级对象
	var pagination=document.getElementById("pagination");//获取分页器的最外层对象
	var pageList=pagination.getElementsByClassName("pages")[0];
	var pages=pageList.getElementsByClassName("page");//获取分页器的10个用于存放页数的对象集合
	var oNum=pagination.getElementsByClassName("num")[0];//获取用于显示总页数的对象
	var btn_fanye=pagination.getElementsByClassName("fanye");//获取向前翻||向后翻的对象集合
	var tempNum=10;//定义变量，用于设置显示的页码；
	var x=0;//用于控制分页器页数对象集合的索引。
	var jsonData=null;//定义全局变量用于接收响应数据
	var totalPage=0;//计算总页数,向上取整,全局变量。
	var partData="";
	var flag=false;
	//分页方法，根据tempNum设置分页器页数显示
	function fn_pagination(){
		if(tempNum>=10){
			var a=(tempNum/10-1)*10;
		}else{
			tempNum=totalPage;
			var a=0;
		}
		for(var i=0;i<pages.length;i++){
			pages[i].innerHTML=a+i+1;
		}
		fn_style(x);
		insertData(pageNumber(x));
	}
	

	//点击向前翻页
	btn_fanye[0].onclick=function(){
		console.log(tempNum);
		if(totalPage<10){
			tempNum=totalPage;
			x--;
			if(x<=0){
				x=0;
			}
		}else{
			x--;
			if(x<=0){
				if(tempNum==10){
					x=0;
				}
				if(tempNum>10){
					if(tempNum%10==0){
						x=pages.length-1;
						tempNum-=10;
						fn_pagination();
					}else{
						x=totalPage%10-1;
						tempNum=totalPage-(totalPage%10);
						fn_pagination();
					}
				}
			}
		}
		insertData(pageNumber(x));
		fn_style(x);
	}
	//点击向后翻页
	btn_fanye[1].onclick=function(){
		if(tempNum>totalPage&&tempNum===10){
			tempNum=totalPage;
			x++;
			if(x>=pages.length){
				x=pages.length-1;
			}
		}else{
			x++;
			if(x>=pages.length){
				if(tempNum==10){
					x=pages.length-1;
				}
				if(totalPage>tempNum){
					tempNum+=10;
					if(tempNum>=totalPage){
						x=tempNum-totalPage;
						tempNum=totalPage;
						console.log(tempNum);
					}else{
						x=0;
					}
					fn_pagination();
				}
				if(tempNum==totalPage&&x>=pages.length){
					x=pages.length-1;
				}
			}
		}
		console.log(x,jsonData.length);
		insertData(pageNumber(x));
		fn_style(x);
	}
	//当前页样式处理的方法
	function fn_style(num){
		for(var i=0;i<pages.length;i++){
			if(i==parseInt(num)){
				pages[i].style.background="orange";
			}else{
				pages[i].style.background="none";
			}
		}
	}
	//根据当前页码讲对应数据集合插入到数据显示区域
	function insertData(partData){
		if(partData==totalPage){
			var x=Math.floor(jsonData.length/10).toString();
			var y=(jsonData.length%10).toString();
			var aa=parseInt(partData-1+"0");
			var bb=parseInt(x+y);
		}else{
			var aa=2*(partData-1);
			var bb=2*partData;//控制每页的长
		}
		outer.innerHTML="";
		for(var i=aa;i<bb;i++){
			var newElement=document.createElement("div");
			newElement.className="inner";
			newElement.innerHTML="<li class='produceId'>用户： "+jsonData[i].produceId+"</li><li class='produceId'>评价："+jsonData[i].produceName+"</li>";
			outer.appendChild(newElement);
		}
	}
	//返回当前页码的方法
	function pageNumber(num){
		return pages[num].innerHTML;
	}

	//文档就绪后向后台发起数据请求
	window.onload=function(){
		
		if(window.XMLHttpRequest){
			var xhr=new XMLHttpRequest();
		}else{
			var xhr=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhr.open("post","produceData1.json",true);
		xhr.setRequestHeader("Content-type","application/json");
		xhr.send("");
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					var jsonStr=xhr.responseText;
					// alert(typeof jsonStr);
					var json=JSON.parse(jsonStr);
					// console.log(json);
					jsonData=json.produce;
					if((jsonData.length/10)>=10){
						totalPage=Math.ceil(json.produce.length/2);
						oNum.innerHTML="共"+totalPage+"页";
						fn_pagination();

					}else{
						pageList.innerHTML="";
						var tmp=Math.ceil(jsonData.length/10);
						var tmpMargin=Math.floor((300-20*tmp)/(tmp*2));
						for(var i=0;i<tmp;i++){
							var newEle=document.createElement("li");
							newEle.className="page";
							newEle.style.marginLeft=tmpMargin+"px";
							newEle.style.marginRight=tmpMargin+"px";
							pageList.appendChild(newEle);
						}
						totalPage=Math.ceil(json.produce.length/2);
						oNum.innerHTML="共"+totalPage+"页";
						fn_pagination();
					}
					//点击某一个页码的事件及处理
					for(var m=0;m<pages.length;m++){
						pages[m].onclick=function(){
							for(var n=0;n<pages.length;n++){
								if(this==pages[n]){
									console.log(n);
									x=n;
									fn_style(x);
									partData=pages[n].innerHTML;
									insertData(partData);
								}
							}
						}
					}
				}
			}
		}
	}