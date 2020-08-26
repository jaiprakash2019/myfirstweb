
//start url copy paste profile page security

function psecure(){
    if(sessionStorage.length <= 0){
        var pp = document.getElementById("profile_page");
        pp.style.display = "none";
        document.body.style.background = "black";
        document.body.innerHTML = "<h1 style='color:white;font-size:50px;text-align:center;'>illigal action proforme</h1>";

    }

}

psecure();

// start profile page coding


function profile(){
   
    var input = document.getElementById("upload_img");
    var al = document.getElementById("alert");
    if(input.files[0].size<1000000){
    var freader = new FileReader();
    freader.readAsDataURL(input.files[0]);
    freader.onloadend = function(event){

         var image_url = event.target.result;
        var show = document.getElementById("profile_con");
        show.style.background="url("+event.target.result+")";
        show.style.backgroundRepeat="no-repeat";
        show.style.backgroundSize="cover";
        var icon = document.getElementById("up");
        icon.style.display = "none";
        var icono = document.getElementById("faaa");
        icono.style.display = "none";
        var nicon = document.getElementById("next");
        nicon.style.display = "block";
        al.innerHTML = "";
        nicon.onclick = function()
        {
            localStorage.setItem(sessionStorage.getItem("u_mail")+"image_url",image_url);
            var phide = document.getElementById("main_con");
            phide.style.display = "none";
            window.location=location.href;
        }

    }
    
    }
    else{

       
       al.innerHTML = "Plz upload img less then 1 mb";

    }

    

  

}




function pname()
{
var uname = document.getElementById("input_uname");
var u_mail = sessionStorage.getItem("u_mail");
var user_details = localStorage.getItem(u_mail);
var user_input = JSON.parse(user_details);
var pname = user_input.name;
uname.innerHTML= atob(user_input.name);
    

}

pname();


function pupload(){

    if(localStorage.getItem(sessionStorage.getItem("u_mail")+"image_url") != null)
    {
        var phide = document.getElementById("main_con");
        phide.style.display = "none";
    }

}

pupload();

// logout program 

var log = document.getElementById("menufi");
log.onclick = function (){
    var pl = document.getElementById("plz");
    sessionStorage.clear();
    setTimeout(function(){
        
    pl.style.display = "none";
        window.location.replace("../index.html");
    }, 2000);

    pl.style.display = "block";

}


//pp imgage showing

function ppname(){

var pn = document.getElementById("pname");
var user_mail = sessionStorage.getItem("u_mail");
var u_input = localStorage.getItem(user_mail);
var u_d = JSON.parse(u_input);
var name = u_d.name;
pn.innerHTML = atob(name);


var image = document.getElementById("pp");

var image_name = localStorage.getItem(user_mail+"image_url");
image.style.background="url("+image_name+")";
image.style.backgroundRepeat = "no-repeat";
image.style.backgroundSize = "cover";

}


ppname();

function t(){

    var date = new Date();
    var tim = date.toLocaleTimeString();
    var ti = document.getElementById("time");
    ti.innerHTML = tim;
    
}


setInterval(t,100);

 function m()
{
    var x = new Audio();
    x.src= "audio/audi.mp3";
    
    x.play();
   
}
