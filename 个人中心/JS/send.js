	var xx=document.getElementsByTagName("textarea")[0];
	var btn=document.getElementsByTagName("button")[2];
	var insert=document.getElementById("wdxx1");
	var x=1;
	btn.onclick=function(){
		var newEle=document.createElement("p");
		if(xx.value!=""){
				newEle.innerHTML=xx.value;
			insert.appendChild(newEle);
			xx.value="";
		}else{
			alert("mei")
		}
	}
	function del(a){
		insert.removeChild(a.parentNode);
	}
	var cz=document.getElementById("cz1");
	var czfs=document.getElementById("wdzh-cz");
	var qx=document.getElementById("qx");
	cz.onclick=function(){
		cz.style.display="block";
		czfs.style.display="block"
	}
	qx.onclick=function(){
		cz.style.display="block";
		czfs.style.display="none";
	}
	var yhkzf=document.getElementById("yhkzf");
	var xzyh=document.getElementById("wdzh-czyh");
	var acbc=document.getElementById("acbc");
	var cbc=document.getElementById("cbc");
	var abc=document.getElementById("abc");
	var pc=document.getElementById("pc");
	var bc=document.getElementById("bc");
	var ibc=document.getElementById("ibc");
	var bocm=document.getElementById("bocm");
	var cmbc=document.getElementById("cmbc");
	var bdyhk=document.getElementById("bdzh-yhk");
	var wdbftzh=document.getElementById("wdbtfzh");
	var bd=document.getElementById("btnd");
	yhkzf.onclick=function(){
		czfs.style.display="none";
		xzyh.style.display="block";
	}
	acbc.onclick=function(){
		bdyhk.style.display="block";
		xzyh.style.display="none";
		wdbftzh.style.display="none";
	}
	cbc.onclick=function(){
		bdyhk.style.display="block";
		xzyh.style.display="none";
		wdbftzh.style.display="none";
	}
	abc.onclick=function(){
		bdyhk.style.display="block";
		xzyh.style.display="none";
		wdbftzh.style.display="none";
	}
	pc.onclick=function(){
		bdyhk.style.display="block";
		xzyh.style.display="none";
		wdbftzh.style.display="none";
	}
	bc.onclick=function(){
		bdyhk.style.display="block";
		xzyh.style.display="none";
		wdbftzh.style.display="none";
	}
	ibc.onclick=function(){
		bdyhk.style.display="block";
		xzyh.style.display="none";
		wdbftzh.style.display="none";
	}
	bocm.onclick=function(){
		bdyhk.style.display="block";
		xzyh.style.display="none";
		wdbftzh.style.display="none";
	}
	cmbc.onclick=function(){
		bdyhk.style.display="block";
		xzyh.style.display="none";
		wdbftzh.style.display="none";
	}
	bd.onclick=function(){
		zhbd.style.display="none";
		wdbftzh.style.display="none";
	}
	var zfb=document.getElementById("zfb");
	var zhbd=document.getElementById("zhbd");
	var btns=document.getElementById("btn");
	zfb.onclick=function(){
		zhbd.style.display="block";
		czfs.style.display="none";
		wdbftzh.style.display="none";
	}
	btns.onclick=function(){
		zhbd.style.display="none";
		wdbftzh.style.display="block";
	}
	var grzx1=document.getElementById("grzx1");
	var grzx=document.getElementById("grzx");
	grzx1.onclick=function(){
		grzx.style.display="block";
		wdbftzh.style.display="none";
	}