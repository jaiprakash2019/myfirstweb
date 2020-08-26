
// play pause coding

var pp = document.getElementById("play");

pp.onclick = function()
{
    var video = document.getElementById("video");
    if(this.className == "fa fa-play"){
        
        video.play();
        this.className = "fa fa-pause";
        this.title = "Pause";

    }
    
    else{

        video.pause();
        this.className = "fa fa-play";
        this.title = "Play";
    }

}

//progress coding 
var videoo = document.getElementById("video");
videoo.ontimeupdate = function()
{
    var progress = document.getElementById("progres");
    var width = (100/this.duration)*this.currentTime;
    progress.style.width = width+"%";
    var fd = this.duration/60;
    var ct = this.currentTime/60;
    progress.innerHTML = ct.toFixed(2)+"/"+fd.toFixed(2);
    progress.style.color="white";
    progress.style.textAlign = "center";
    progress.style.fontSize = "14px";
    videoo.onended = function(){
    if(this.duration/60 == this.currentTime/60)
    {
        pp.className = "fa fa-play";
        pp.title = "Play";
        video.title = "Play";

    }

    else{
        pp.className = "fa fa-pause";
        pp.title = "pause";
        video.title = "Pause";
        videoo.play();
    }

}


}



// play pause coding




onkeydown = function(event){

    if(event.keyCode == 32)
    {

    var video = document.getElementById("video");
    if(pp.className == "fa fa-play"){
        
        video.play();
        pp.className = "fa fa-pause";
        pp.title = "Pause";

    }
    
    else{

        video.pause();
        pp.className = "fa fa-play";
        pp.title = "Play";
    }


}
}

// fullscreen coding

var fullscreen = document.getElementById("full");
fullscreen.onclick = function(){

    if(videoo.requestFullscreen){
        videoo.requestFullscreen()
    }

    else if(videoo.webkitRequestFullscreen){
                videoo.webkitRequestFullscreen();
    }

    else if(videoo.mozRequestFullscreen){
        videoo.mozRequestFullscreen();
}

    else if(videoo.msRequestFullscreen){
    videoo.msRequestFullscreen();
    }
  
}

videoo.ondblclick = function(){

    if(videoo.requestFullscreen){
        videoo.requestFullscreen()
    }

    else if(videoo.webkitRequestFullscreen){
                videoo.webkitRequestFullscreen();
    }

    else if(videoo.mozRequestFullscreen){
        videoo.mozRequestFullscreen();
}

    else if(videoo.msRequestFullscreen){
    videoo.msRequestFullscreen();
    }
  
}

// stop coding 

function stop()
{
        videoo.currentTime = 0;
        
        videoo.pause();
        pp.className = "fa fa-play";
        pp.title = "Play";
        videoo.title = "Play";

}

// replay coding

var rep = document.getElementById("refresh");
rep.onclick = function()
{
    videoo.currentTime = 0;
    videoo.play();
    pp.className = "fa fa-pause";
    pp.title = "Pause";
    videoo.title = "Pause";

}

//volume coding 

var volume = document.getElementById("volume");
volume.onclick  = function()
{
    var slider = document.getElementById("range_slider");
     if(slider.style.display == "none")
     {
         slider.style.display = "block";
         slider.oninput = function(){
             videoo.volume = this.value;
             if(this.value == 0)
             {
                 volume.setAttribute("class","fas fa-volume-down");
                 volume.title = this.value*100+"%";
             }

             else{
                volume.setAttribute("class","fas fa-volume-up");
                volume.title = this.value*100+"%";
             }
         }
     }
     else{
        slider.style.display = "none";
     }

}

// progres backward forward coding

    var pro = document.getElementById("p_con");
    pro.onclick = function(event){
		
		var pre = event.offsetX/this.offsetWidth;
			
		videoo.currentTime = pre*videoo.duration;
		videoo.play();
		 pp.className = "fa fa-pause";
        pp.title = "pause";
        video.title = "Pause";
     	
		
    }
	
//video download coding
	
var down = document.getElementById("download");
down.onclick = function()
{
	var video = document.getElementById("srcv").src;
	var a_tag = document.createElement("A");
	a_tag.href = video;
	a_tag.download= video;
	a_tag.click();
	document.body.appendChild(a_tag);
	
}

var se = document.getElementById("setting");

se.onclick = function()

{
	var box = document.getElementById("set");
	if(box.offsetHeight == 0){
		
		box.style.height = "300px";
		box.style.transition="0.8s";
		
	
	}
	
	else{
		box.style.height = "0";
		box.style.transition="0.8s";
	}


}

var sp = document.getElementById("speed");
sp.oninput = function()
{
	videoo.playbackRate = this.value;
	this.title = this.value;
	var span = document.getElementById("spans");
	span.innerHTML = "Speed "+this.value;

	
}

	var ress = document.getElementById("rests");
ress.onclick = function()
{
	var span = document.getElementById("spans");
	videoo.playbackRate = 1;
	span.innerHTML = "Speed 1";
	sp.value = "1";
	
}


var mini = document.getElementById("minicon");

mini.onclick = function(){
	var mini_c = document.getElementById("mini_con");
	if(mini_c.offsetHeight == 0){
		videoo.pause();
		mini_c.style.height = "200px";
		mini_c.style.transition="0.8s";
		var sour = document.getElementById("srcv").src;
		var tim = videoo.currentTime;
		
		
		var con = document.getElementById("main_con");
		con.style.display = "none";
		
        var mini_p = document.getElementById("mini_player");
        mini_p.load();
       if(pp.className == "fa fa-pause"){
		mini_p.currentTime = tim;
		document.getElementById("minisr").src=sour;
        mini_p.play();

        mini_p.onmouseover = function(){
            this.controls = true;
        }

            
       var miniclose = document.getElementById("mini_close");
       miniclose.onclick = function (){

        var con = document.getElementById("mini_con");
        con.style.display = "none";
        var cono = document.getElementById("main_con");
        cono.style.display = "block";
        mini_p.pause();
        videoo.play();
        videoo.currentTime =  mini_p.currentTime;

        var minisrc  = document.getElementById("minisr").src;
        var largesrc = document.getElementById("srcv");
        largename = minisrc;

       }
        
       }

       else{
        mini_p.currentTime = tim;
		document.getElementById("minisr").src=sour;
        mini_p.onmouseover = function(){
            this.controls = true;
        }
        mini_p.pause();

        
       var miniclose = document.getElementById("mini_close");
       miniclose.onclick = function(){
        videoo.load();
        var con = document.getElementById("mini_con");
        con.style.display = "none";
        var cono = document.getElementById("main_con");
        cono.style.display = "block";
        mini_p.pause();
        videoo.currentTime =  mini_p.currentTime;

        var minisrc  = document.getElementById("minisr").src;
        var largesrc = document.getElementById("srcv");
        largename = minisrc;

       }

       }

       

		
	}
	

}

//video progress coding 

videoo.onprogress = function(){
var prece = videoo.buffered.end(0)/videoo.duration*100;

var prop = document.getElementById("progrest");
prop.style.width = prece+"%";

}

var videoe = document.getElementById("video");
if(videoe.networkState == 3){

  videoe.setAttribute("poster","images/upload_pic.jpg");
  videoe.onclick = function(){


var fil = document.getElementById("vidup");
fil.click();

fil.onchange = function(){


var url = URL.createObjectURL(this.files[0]);

var srce = document.getElementById("srcv");
srce.src = url;

videoo.load();
videoe.play();
pp.title = "Pause";
pp.className = "fa fa-pause";


}

  }
    


}
