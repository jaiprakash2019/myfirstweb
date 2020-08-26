// start signup coding

function sign(){
	var name = btoa(document.getElementById("users").value);
	var email = btoa(document.getElementById("emails").value);
	var password = btoa(document.getElementById("passs").value);
	var mobile = btoa(document.getElementById("mobiles").value);
	var user_input = {name:name,email:email,password:password,mobile:mobile};
	var user_data = JSON.stringify(user_input);
	if(name != "" && email != "" && password != "" && mobile != "")
	{

		localStorage.setItem(email,user_data);
		document.getElementById("users").value="";
		document.getElementById("emails").value="";
		document.getElementById("passs").value="";
		document.getElementById("mobiles").value="";
		document.getElementById("succ").innerHTML = "Signup Succses";
		setTimeout(set,2000);
		
		
		
		return false;
		
	} 
	
		
	
}

function set(){
	
		document.getElementById("succ").innerHTML = "";
}

function user_ex()
{
	var sub = document.getElementById("logs");
	var password = document.getElementById("passs");
	var mobile = document.getElementById("mobiles");
	var email = btoa(document.getElementById("emails").value);
	var emaili = document.getElementById("emails");
	if (localStorage.getItem(email) != null) 
		{
			document.getElementById("reg").innerHTML = "User alredy registerd";
			document.getElementById("logs").disabled=true;
			document.getElementById("passs").disabled=true;
			document.getElementById("mobiles").disabled=true;
			emaili.style.background="red";
			emaili.style.color="white";
			emaili.classList.add("pulse");
			password.style.cursor="not-allowed";
			mobile.style.cursor="not-allowed";
			sub.style.cursor="not-allowed";
		document.getElementById("emails").onclick = function()
		
		{

			this.style.background = "white";
			this.style.color="black";
			document.getElementById("reg").innerHTML = "";
			document.getElementById("logs").disabled=false;
			document.getElementById("passs").disabled=false;
			document.getElementById("mobiles").disabled=false;
			password.style.cursor="text";
			mobile.style.cursor="text";
			sub.style.cursor="pointer";


		}


		}

}

function pass_val(){
	var sub = document.getElementById("logs");
	var mobile = document.getElementById("mobiles");
	var pass = document.getElementById("passs").value;
	var num = /[0-9]/g;
	var al = /[a-z]/i;
	if (pass.match(num) && pass.match(al)) 

	{

		return false;
	}

	else{

		if (pass != "") {
		document.getElementById("logs").disabled=true;
		document.getElementById("mobiles").disabled=true;
		mobile.style.cursor="not-allowed";
		sub.style.cursor="not-allowed";
		sub.style.background="#EBEBE4";
		var sp = document.getElementById("spa").innerHTML="Plz enter alphabet and number";

	}
		

		var password = document.getElementById("passs").onclick = function(){
			var sp = document.getElementById("spa").innerHTML="";
			mobile.style.cursor="text";
				sub.style.cursor="pointer";
				sub.style.background="white";
		document.getElementById("logs").disabled=false;
		document.getElementById("mobiles").disabled=false;

	}

	}

	


}

function mob_val(){
	var sub = document.getElementById("logs");
	var mobile = document.getElementById("mobiles").value;

	

	if(mobile.length == 10 && mobile.charAt(0).match(6) || mobile.charAt(0).match(7) || mobile.charAt(0).match(8) || mobile.charAt(0).match(9)) 
	{
		
	document.getElementById("succ").innerHTML = "";
	sub.style.cursor="pointer";
	sub.style.background="white";
	document.getElementById("logs").disabled=false;


	}



	if (mobile.length != 10){

		document.getElementById("succ").innerHTML = "Plz enter 10digit no. ";
		sub.style.cursor="not-allowed";
		sub.style.background="#EBEBE4";
		document.getElementById("logs").disabled=true;

	}



}



//start login coding

function login(){
	var unfo = document.getElementById("unf");
	var pnmo = document.getElementById("pnm");
	var username = btoa(document.getElementById("user").value);
	var password = btoa(document.getElementById("pass").value);

	var user_input = {username:username,password:password};
	var user_data = JSON.stringify(user_input);
	sessionStorage.setItem(username,user_data);
	var session_data = sessionStorage.getItem(username);
	var user_details = JSON.parse(session_data);
	if(localStorage.getItem(user_details.username) == null)
	{
		
			unfo.innerHTML = "User not found";
			return false;
	}
	
	else
	{
		if(localStorage.getItem(user_details.username).match(user_details.password))
		{
			location.replace("profile/profile.html");
			sessionStorage.setItem('u_mail',username);
			return false;
		
		}

		else
		{
			pnmo.innerHTML= "Password not matched";
			return false;
		}
	}


	
}




