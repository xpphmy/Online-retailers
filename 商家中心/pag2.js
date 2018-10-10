var Topk=document.getElementsByClassName("Topcilck");
var c3r =document.getElementsByClassName("center3_right");
var c2r =document.getElementsByClassName("center2_right");
var c0r =document.getElementsByClassName("center_right");
var c4r =document.getElementsByClassName("center4_right");
var c5r =document.getElementsByClassName("main-right12");
var c6r =document.getElementsByClassName("main-right17");
var c7r =document.getElementsByClassName("main-right18");
var c8r =document.getElementsByClassName("main-right21");

 var bon=document.getElementById("bon");
  // alert(Topk[6]);
  Topk[6].onclick=function () {
  	fn_clean();
  	  c2r[0].style.display="block";
  }
  
  Topk[2].onclick=function () {
        fn_clean();
  	  c0r[0].style.display="block";	
  }
  Topk[8].onclick=function () {
        fn_clean();
  	  c4r[0].style.display="block";	
  }
  Topk[11].onclick=function () {
        fn_clean();
      c5r[0].style.display="block"; 
  }
   Topk[3].onclick=function () {
        fn_clean();
      c6r[0].style.display="block"; 
  }
  //  Topk[3].onclick=function () {
  //       fn_clean();
  //     c7r[0].style.display="block"; 
  // }
   Topk[12].onclick=function () {
        fn_clean();
      c8r[0].style.display="block"; 
  }
  
    bon.onclick=function () {
  	fn_clean();
  	  c3r[0].style.display="block";
  }
   function fn_clean() {
   	  c2r[0].style.display="none";
   	  c0r[0].style.display="none";
   	  c4r[0].style.display="none";
   	  c3r[0].style.display="none";
      c5r[0].style.display="none";
      c6r[0].style.display="none";
      c7r[0].style.display="none";
      c8r[0].style.display="none";

   }
 
 