
/*start compatible browser coding*/
function check_browser(){
	"use strict";
	
	if(navigator.userAgent.indexOf("MSIE") != -1)
	   {
	   web.style.display = "none";
	   document.body.style.background = "black";
	   document.body.style.color = "white";
	   document.body.innerHTML = "<h1 align='center' style='font-size:80px;'>Please open the website in chrome browser</h1>";
	   }
	
}

	check_browser();

/*end compatible browser coding*/


/*start cookie enabled coding*/

function check_cookie(){
	var web = document.getElementById("webpage");
	if(navigator.cookieEnabled == false){
		
		web.style.display = "none";
	   document.body.style.background = "black";
	   document.body.style.color = "white";
	   document.body.innerHTML = "<h1 align='center' style='font-size:80px;'>Please enabled cookies and try again</h1>";
	}
}

check_cookie();



/*start cookie enabled coding*/


