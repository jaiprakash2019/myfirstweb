


function psecure(){

    var pp = document.getElementById("cpage");
    if(sessionStorage.length <= 0){
       
        pp.style.display = "none";
        document.body.style.background = "black";
        document.body.innerHTML = "<h1 style='color:white;font-size:50px;text-align:center;'>illigal action proforme</h1>";

    }

}

psecure();



/* contact image showing coding*/

function imgsh()
{
    var image = document.getElementById("img_con");
    var user_mail = sessionStorage.getItem("u_mail");
    
    var image_name = localStorage.getItem(user_mail+"image_url");
    image.style.background="url("+image_name+")";
    image.style.backgroundRepeat = "no-repeat";
    image.style.backgroundSize = "cover";
    image.style.transform = "rotate(140deg)";

}

imgsh();


// contact saved coding

function add_btn(){
    var un = document.getElementById("ucontact").value;
    var ufn = document.getElementById("ufnumber").value;
    var usn = document.getElementById("usnumber").value;
    var war = document.getElementById("nsaved");
    var form = document.getElementById("form_rest");


    if(un != "" && ufn != "" && usn != "")

  
    {
        if(isNaN(ufn) || ufn.length != 10)
        {
            war.innerHTML = "Plz enter only 10 digit number ";
            war.style.color="red";
            


        }


        else{

              
            if(isNaN(usn)  || usn.length != 10)
            {
            war.innerHTML = "Plz enter only 10 digit number ";
            war.style.color="red";

          
            }


            else{

               
                
                var store = {un:un,ufn:ufn,usn:usn};
                var user_d = JSON.stringify(store);
                localStorage.setItem(un+" contact",user_d);
                
                form.reset();
                
                war.innerHTML = "Successfully saved";
                war.style.color="green";
                setTimeout(function(){ war.innerHTML = "";}, 2000);
                window.location=location.href;

                }


              
            
            


        }



        
         
    
    
    }

    else{

        war.innerHTML = "Some fields are empty";
        war.style.color="red";
        var cli = document.getElementById("sub");
        cli.onblur = function(){
            var war = document.getElementById("nsaved");
            war.innerHTML = "";
        }
    }

}

var i;
function show_li()
{


for(i=1;i<=localStorage.length;i++) 
{
   
 var keys = localStorage.key(i);
   
    if(keys.match("contact"))
                    
        {

     
       var u_i = localStorage.getItem(keys);
       var u_d = JSON.parse(u_i);
       var conte = document.getElementById("contact_list");
        var fieldsete = document.createElement("FIELDSET");
        var legende = document.createElement("LEGEND");
        var ole = document.createElement("OL");
        var  li_one = document.createElement("LI");
        var  li_two = document.createElement("LI");
        
        var id = document.createElement("I");
        id.setAttribute("class","fa fa-trash");
        id.setAttribute("id","delete_icon");
        id.setAttribute("title","Delete contact");
        var is = document.createElement("I");
        is.setAttribute("class","fa fa-save");
        is.setAttribute("id","save_icon");
        is.setAttribute("title","Save contact");
        var ie = document.createElement("I");
        ie.setAttribute("class","fa fa-edit");
        ie.setAttribute("id","edit_icon");
        ie.setAttribute("title","Edit contact");
        conte.appendChild(fieldsete);   
        fieldsete.appendChild(legende);
        fieldsete.appendChild(ole);
        ole.appendChild(li_one);
        ole.appendChild(li_two);
        ole.appendChild(id);
        ole.appendChild(is);
        ole.appendChild(ie);
        legende.appendChild(document.createTextNode(u_d.un));
        li_one.appendChild(document.createTextNode(u_d.ufn));
        li_two.appendChild(document.createTextNode(u_d.usn));
            del_con(keys,id);
       
           es_fun(ie,is,keys,legende,li_one,li_two);
            
    }
   
   
}



}


show_li();


function es_fun(edit,save,keys_n,lege,lio,lit)
{
    edit.onclick = function(){
    var conf = confirm("are you sure to edit contact");
    if(conf == true)
    {
        lege.style.outline = "none";
        lege.setAttribute("spellcheck","false");
        lege.setAttribute("contenteditable","true");
        lege.style.color="white";
        lege.focus();
        lio.style.outline = "none";
        lio.setAttribute("spellcheck","false");
        lio.setAttribute("contenteditable","true");
       
        lio.style.color="white";
        lio.focus();
        lit.style.outline = "none";
        lit.setAttribute("spellcheck","false");
        lit.setAttribute("contenteditable","true");
        lit.style.color="white";
        lit.focus();


    }

    save.onclick = function()
    {
        lege.setAttribute("contenteditable","false");
        lege.style.color="black";
        lio.setAttribute("contenteditable","false");
        lio.style.color="white";
        lit.setAttribute("contenteditable","false");
        lit.style.color="white";
        var legend_d = lege.innerHTML;
        var lio_d = lio.innerHTML;
        var lit_d = lit.innerHTML;
        var edit_data = {un:legend_d,ufn:lio_d,usn:lit_d};
        var us_json = JSON.stringify(edit_data);
       
        
        var txt = localStorage.getItem(keys_n);
        localStorage.setItem(keys_n,txt.replace(txt,us_json));

        alert("Successfully Updated Your Name");
        
        
       


        

    }

}
    

}




function del_con(k_name,r_btn)
{
    r_btn.onclick = function(){
        var sure = confirm("Are you want to sure delete contact");
        if(sure == true){
        var ol = r_btn.parentElement;
       var fild = ol.parentElement;
       document.cookie = k_name+"="+localStorage.getItem(k_name)+";max-age:2592000";
       fild.remove();
       localStorage.removeItem(k_name);   
       var lent = document.getElementById("contact_list").children.length;
       if(lent == 0){
   
           var c = document.getElementById("c_list");
           c.style.color="black";
           c.innerHTML="No contacts found";
        
       }
            
        }  
        

    }

   

}

function c_show(s_input)
{
    var keyword = s_input.value.toUpperCase();
    var con  = document.getElementById("contact_list");
    var legend  = con.getElementsByTagName("LEGEND");
    var i;
    for(i=0;legend.length;i++){

        if(legend[i].innerHTML.toUpperCase().indexOf(keyword) != -1)
        {
            legend[i].parentElement.style.display = "";
        }
        else{
            legend[i].parentElement.style.display="none";
        }
    }
   
}

function s_logout()
{
    var pl = document.getElementById("lop");
  sessionStorage.clear();
  setTimeout(function(){
    pl.style.display ="none";
    window.location.replace("../../index.html");

  },2000);

    pl.style.display ="block";
  
}

function r_restore(){

    var ani = document.getElementById("r_contact");
    ani.style.animation = "wap 1s";
    ani.style.animationFillMode = "forwards";

     var page = document.getElementById("r_contact");
     var h_name = document.getElementById("list_n");
     var r_table = document.getElementById("restore_table");
     if(document.cookie.length != 0)
     {

        h_name.innerHTML = "Deleted contacts";
        var d_cookie = document.cookie.split(";");
        var i,j;
        for(i=0;i<=d_cookie.length;i++){

            var key_value = d_cookie[i].split("=");
            for(j=0;j<=key_value.length;j++){
                if(key_value[j].indexOf(" contact") == -1)
                {

                    var extract = JSON.parse(key_value[j]);
                    var row = document.createElement("TR");
                    var u_name = document.createElement("TD");
                    var u_fnum = document.createElement("TD");
                    var u_lnum = document.createElement("TD");
                    var u_res = document.createElement("TD");
                    var res_icon = document.createElement("I");
                    res_icon.setAttribute("class","fa fa-refresh");
                    res_icon.setAttribute("id","refresh");
                    res_icon.style.color="red";
                    page.appendChild(r_table);
                    r_table.appendChild(row);
                    row.appendChild(u_name);
                    row.appendChild(u_fnum);
                    row.appendChild(u_lnum); 
                    row.appendChild(res_icon);
                    u_name.appendChild(document.createTextNode(extract.un));
                    u_fnum.appendChild(document.createTextNode(extract.ufn));
                    u_lnum.appendChild(document.createTextNode(extract.usn));
                    
                    res_icon.onclick = function()
                    {
                        var t_td = this.parentElement;
                        var t_tr = t_td.parentElement;
                        var td_all = t_tr.getElementsByTagName("TD");
                        var res_obj = {un:td_all[0].innerHTML,ufn:td_all[1].innerHTML,usn:td_all[2].innerHTML};
                        var jso = JSON.stringify(res_obj);
                        localStorage.setItem(td_all[0].innerHTML+" contact",jso);
                        document.cookie = td_all[0].innerHTML+" contact=;max-age:0";
                        t_tr.remove();
                        h_name.innerHTML = "No deleted contacts";
                        window.location=location.href;

                    }


                }

            }

        }





        
     }

    


}

function close_r(){
    var ani = document.getElementById("r_contact");
    ani.style.animation = "close 1s";
    ani.style.animationFillMode = "forwards";
   
}

