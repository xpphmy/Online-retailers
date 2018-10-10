// var html=document.getElementsByTagName("html")[0];
// 	function fontSizeFormat(){
// 		var width=document.documentElement.clientWidth||document
// 		.body.clientWidth;
// 		var fontSize=(20/1920)*width;
// 		html.style.fontSize=fontSize+"px";
// 	}
// 	window.onload=window.onresize=function(){
// 		fontSizeFormat();
// 	}
  // var btn=document.getElementsByTagName("button");
  // for(var i=0;i<btn.length;i++ ){
 
$("#btn2").click(function() {
       $(".center_2").css("display","none");
       $(".pag2_center").css("display","block");
       $("#line1").css("background","red");
       $(".o2").css("background","red");
       $("#text1").css("color","red");
$("#btn1").click(function() {
       $(".center_2").css("display","block");
       $(".pag2_center").css("display","none");
       $("#line1").css("background","#ccc");
       $(".o2").css("background","#ccc");
       $("#text1").css("color","black");
       });     
$("#btn2").click(function() {
       $(".pag2_center").css("display","none");
       $("#line2").css("background","red");
       $(".o3").css("background","red");
       $("#text2").css("color","red");
       $(".pag3_center").css("display","block");
       $(".center_3").css("display","none");
    });
    });
        

       
      
   
