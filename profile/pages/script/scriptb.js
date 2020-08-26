// hover animation coding btn

function hover(){
	var con = document.getElementById("com_con");
	var btn = con.getElementsByTagName("BUTTON");
	var i;
	for(i=0;i<btn.length;i++){
		
		var parr = btn[i].parentElement;
		parr.onmouseover = function(){
		this.className = "animated pulse";
			
		}
		parr.onmouseout = function(){
		this.className = "";
			
		}
	}
	
}

hover();



function show_companylogo(){
	
	var input = document.getElementById("uploadph").files[0];
	var reader = new FileReader();
	reader.readAsDataURL(input);
	reader.onload = function(){
		localStorage.setItem("comp_logo",reader.result);
			
	}
	
}

function show_pic(){
		var img_con = document.getElementById("com_logo");
		var photo_url = localStorage.getItem("comp_logo");
		img_con.style.background = "url("+photo_url+")";
		var con = document.getElementById("logoph");
		if(localStorage.getItem("comp_logo") != null){
			con.style.display="none";
		}
		img_con.style.backgroundSize = "cover";
		img_con.style.backgroundRepeat = "norepeat";
}

show_pic();

//show model coding 

function show_form()
{
	var hei = document.getElementById("creat_model");
	hei.style.height = "100vh";
	hei.className = "animated fadeInDown";
	
}

function close_form()
{
	var hei = document.getElementById("creat_model");
	hei.style.height = "0";
	hei.className = "animated fadeInOut";
	
}


// form validation


function form_val(){
	
	var com_name = document.getElementById("companyname");
	var malling_name = document.getElementById("mallingname");
	var address_m = document.getElementById("textarea");
	var phone_n = document.getElementById("phonenumber");
	var fax_n = document.getElementById("faxnumber");
	var email_i = document.getElementById("email");
	var web = document.getElementById("website");
	var date_d = document.getElementById("date");
	var choo = document.getElementById("choose");
	com_name.onchange = function()
	{
		
		if(isNaN(this.value)){
		   
			malling_name.onchange = function(){
				
				if(this.value == com_name.value){
			this.className = "animated infinite pulse";
			this.style.border = "1px solid red";
			this.value = "Whoops! Companyname and Mallingname shouldn`t same";
			this.style.color = "red";
					
				this.onclick  = function(){
				this.className = "";
				this.value = "";
				this.style.color = "black";
				this.style.borderTop = "5px solid red";
				this.style.borderLeft = "none";
				this.style.borderRight = "none";
				this.style.borderBottom = "none";
					}
					
				}
				
				
				else{
					
					if(this.value.indexOf(com_name.value+".pvt.ltd") != -1 ||this.value.indexOf(com_name.value+".pvt.ltd") != -1){
						
						var date_data = document.getElementById("date");
						date_data.onchange = function(){
							
							var current_data = new Date();
							var select_date = new Date(date_data.value);
							if(select_date.getFullYear() >= current_data.getFullYear()){
								
								if(select_date.getMonth()+1 == 4){
								   
									if(select_date.getDay() == 1){
									   
										var sub = document.getElementById("form_data");
										sub.onsubmit = function (){
											
											
var company = {company:com_name.value,malling:malling_name.value,address:address_m.value,phone:phone_n.value,fax:fax_n.value,email:email_i.value,website:web.value,date:date_d.value,choose:choo.value};
											var company_info = JSON.stringify(company);
											localStorage.setItem("company",company_info);
										
					
									
										
										}
										
										
											
											
									   
									   }
								   	else{
			this.type = "text";
			this.className = "animated infinite pulse";
			this.style.border = "1px solid red";
			this.value = "plz write 1 first date";
			this.style.color = "red";
			this.onclick = function(){
					this.className = "";
					this.style.borderTop = "5px solid red";
				this.style.borderLeft = "none";
				this.style.borderRight = "none";
				this.style.borderBottom = "none";
					this.value = "";
					this.style.color = "black";
					this.type = "date";
					}
									}
									
									
								   }
								
								else{
				this.type = "text";
			this.className = "animated infinite pulse";
			this.style.border = "1px solid red";
			this.value = "plz write 4rth month";
			this.style.color = "red";
			this.onclick = function(){
					this.className = "";
					this.style.borderTop = "5px solid red";
				this.style.borderLeft = "none";
				this.style.borderRight = "none";
				this.style.borderBottom = "none";
					this.value = "";
					this.style.color = "black";
					this.type = "date";
					}
									
								}
								
								
							}
							
							else{
								this.type = "text";
			this.className = "animated infinite pulse";
			this.style.border = "1px solid red";
			this.value = "plz write current year";
			this.style.color = "red";
			this.onclick = function(){
					this.className = "";
					this.style.borderTop = "5px solid red";
				this.style.borderLeft = "none";
				this.style.borderRight = "none";
				this.style.borderBottom = "none";
					this.value = "";
					this.style.color = "black";
					this.type = "date";
					}
							}
							
						}
					}
					
					else{
						
			this.className = "animated infinite pulse";
			this.style.border = "1px solid red";
			this.value = "company name .pvt.ltd or govt.ltd";
			this.style.color = "red";
			this.onclick = function(){
					this.className = "";
					this.style.borderTop = "5px solid red";
				this.style.borderLeft = "none";
				this.style.borderRight = "none";
				this.style.borderBottom = "none";
					this.value = "";
					this.style.color = "black";
					}
					
					}
				}
		
				
				
		   		
		   }
		
		
	}
		
else{
			
			this.className = "animated infinite pulse";
			this.style.border = "1px solid red";
			this.value = "Whoops ! number is not allowed";
			this.style.color = "red";
			this.onclick = function(){
					this.className = "";
					this.style.borderTop = "5px solid red";
				this.style.borderLeft = "none";
				this.style.borderRight = "none";
				this.style.borderBottom = "none";
					this.value = "";
					this.style.color = "black";
			}
			
			
		}
		
}

}
form_val();


function formclose(){
	if(localStorage.getItem("company") != null){
		
		
		var getname  = localStorage.getItem("company");
		var information = JSON.parse(getname);
		var brand = document.getElementById("creat_btn");
		brand.innerHTML = information.company;
		brand.onclick = function(){
			var taga = document.createElement("A");
		taga.href = "account_only/account_only.html";
		taga.click();
		document.appendChild(taga);
		}
		brand.style.color="red";
		var img = localStorage.getItem("comp_logo");
		var i = document.getElementById("fahome");
		var i_tag = document.getElementById("com_creat");
		i_tag.style.backgroundImage = "url("+img+")";
		i.className="";
		i.style.border = "none";
		i.style.background = "none";
		i_tag.style.backgroundSize = "70px 80px";
		i_tag.style.backgroundRepeat = "no-repeat";

	
		
	}
	

	
}

formclose();


function delete_company(){
	
var delete_div = document.getElementById("com_delete");
	delete_div.onclick = function(){
		if(localStorage.getItem("company") != null){
		
		var hide = document.getElementById("none_hide");
		hide.className = "animated fadeInDown";
		hide.style.display = "block";
		var ok = document.getElementById("ok_btn");
		ok.onclick = function(){
			hide.style.display = "none";
			localStorage.removeItem("company");
			localStorage.removeItem("comp_logo");
			window.location = location.href;
			
		}
		
		var cancl = document.getElementById("cancle_btn");
		cancl.onclick = function(){
			window.location = location.href;
			
			
		}
	
		
	}
	
	
	
	else{
	
		var show = document.getElementById("show_al");
		show.style.display = "block";
		show.innerHTML = "Company not found";
		
		setTimeout(function(){show.style.display="none";},3000);
	}
		
	}
	
}

delete_company();

//logout program

function logout(){
	
	var log = document.getElementById("com_logout");
	
	log.onclick = function()
	{
		
		sessionStorage.clear();
		var notice = document.getElementById("notice_alert");
		notice.style.display= "block";
		setTimeout(function(){window.location = "../../index.html"},3000);
	}
	
}

logout();



