// profile pic coding

function ppic(){
var picc = document.getElementById("logo");
picc.style.background = "url("+localStorage.getItem("comp_logo")+")";
picc.style.backgroundSize="cover";
picc.style.backgroundRepeat="no-repeat";

}

ppic();

// name showing coding

function name_sh(){
var companye = localStorage.getItem("company");
var ex_d = JSON.parse(companye);
var name_con = document.getElementById("name");
name_con.innerHTML= ex_d.company;

}

name_sh();

// show measure_unit 

function unit_measure(){
var show_button = document.getElementById("unit_of_measure");
var sec_c = document.getElementById("secondary_content");
var pri_c = document.getElementById("primary_content");
var close = document.getElementById("close-icon");
 show_button.onclick = function(){
document.getElementById("vou_search_con").style.display = "none";
   this.style.webkitTransform = "rotateX(180deg)";
   this.style.webkitTransition = "1s";
   this.style.transform = "rotateX(180deg)";
   this.style.transition = "1s";
   pri_c.style.display = "none";
   setTimeout(function(){

    sec_c.style.display = "block";
    sec_c.style.webkitTransform = "rotateX(-180deg)";
    sec_c.style.transform = "rotateX(-180deg)";

    close.onclick = function(){
        document.getElementById("vou_search_con").style.display = "block";
        show_button.className = "animated flipInX";
        show_button.innerHTML =" <i class='fa fa-balance-scale' style='font-size:25px;float:left'></i> &nbspUnit of measure";
        window.location = location.href;
    };

    var sub  = document.getElementById("unit_form");
    sub.onsubmit = function(){
        var sec_d = document.getElementById("secondary_content");
        var input = sec_d.getElementsByTagName("INPUT");
        var symbol = input[0].value;
        var formal = input[1].value;
        var unit_ob = {symbol:symbol,formal:formal};
        var data = JSON.stringify(unit_ob);
        localStorage.setItem("unit_measure_"+symbol,data);


    }

   },100);

};



}

unit_measure();

//voucher showing coding

function voucher_sh(){
var sales = document.getElementById("sales-btn");
var voucher = document.getElementById("voucher_con");
sales.onclick = function(){
    document.getElementById("vou_search_con").style.display = "none";
voucher.style.display = "block";
voucher.className ="animated slideInDown";
var pre_show = document.getElementById("show_tax_p")
var i;
for(i=0;i<localStorage.length;i++){

    all_keys = localStorage.key(i);
    if(all_keys.match("voucher_no_")){

        var sp  = all_keys.split("_");
        all_voucher_no = sp[2];
        all_voucher_no++;
        document.getElementById("num").innerHTML = "Voucher no "+all_voucher_no;
    }

    else if(all_keys.match("voucher_no_") == null)
    {

        document.getElementById("num").innerHTML = "Voucher no "+all_voucher_no;
    }
}
for(i=0;i<localStorage.length;i++){

    var keys = localStorage.key(i);
    if(keys.indexOf("tax") != -1){

        var local_data = localStorage.getItem(keys);
        var string  = JSON.parse(local_data);
        pre_show.innerHTML += string.tax_name+"("+string.tax_pre+")<br>";
        pre_show.style.textTransform = "capitalize";
        var sub_icon = document.getElementById("sub").innerHTML;
        
       document.getElementById("pre_symbol").innerHTML += sub_icon+"<br><br>";
        

    }
}

var parr_input = document.getElementById("form_co");
var fo_index = parr_input.getElementsByTagName("INPUT");
fo_index[0].focus();
fo_index[0].onkeyup = function(event){
    if(event.keyCode == 13){
    fo_index[1].focus();
}
}

fo_index[1].onkeyup = function(event){
    if(event.keyCode == 13){
    fo_index[2].focus();
}
}

fo_index[2].onkeyup = function(event){

    if(event.keyCode == 13){
    fo_index[3].focus();
}
}

fo_index[3].onkeyup = function(event){
    if(event.keyCode == 13){
        add_item_in();
    var form_input = document.getElementById("first_item_input");
    form_input.getElementsByTagName("INPUT");
    form_input[0].focus();
    
}
}

}
}

voucher_sh();



function voucher_cl(){
    var close = document.getElementById("close_btn");
    var voucher = document.getElementById("voucher_con");
    close.onclick = function(){
  
    voucher.className ="animated slideOutUp";
    document.getElementById("vou_search_con").style.display = "block";
    
    }
    }
    
    voucher_cl();

//company voucher address logo showing cioding


function voucher_ad(){
    
    var logo = document.getElementById("company_voucher_logo");
    logo.style.background = "url("+localStorage.getItem("comp_logo")+")";
    logo.style.backgroundSize = "cover";

    var local = localStorage.getItem("company");
    var string = JSON.parse(local);
    var address_con = document.getElementById("voucher_address");
    var add_c = document.getElementById("address_c");
    var add_ad = document.getElementById("address_ad");
    var add_p = document.getElementById("address_ph");
    var add_web = document.getElementById("address_web");
    add_c.innerHTML = string.company;
    add_ad.innerHTML = "Venue : "+string.address;
    add_p.innerHTML = "Call : "+string.phone;
    add_web.innerHTML = "Website : "+string.website;
    var date = new Date();
    var date_sh = date.toDateString();
    var date_v = document.getElementById("date_vo");
    date_v.innerHTML = "Date : &nbsp"+date_sh;
    s_datev = date_sh;
    
    }
    
    voucher_ad();
    var s_datev; 

var d_val,s_add,s_subtotal,s_paid,s_pre = [],all_voucher_no = 1;

function add_item_in(){

    var table = document.getElementById("table_inp");
    var row = document.createElement("TR");
    var td_item = document.createElement("TD");
    var td_price = document.createElement("TD");
    var td_quantity = document.createElement("TD");
    var td_unit = document.createElement("TD");
    var td_amount = document.createElement("TD");
    var td_delete = document.createElement("TD");
    
    var input_item = document.createElement("INPUT");
    input_item.type = "text";
    input_item.className = "itemc";
    input_item.placeholder = "Item Desciption";
    var input_price = document.createElement("INPUT");
    input_price.disabled = true;
    input_price.className = "itemp";
    input_price.type = "number";
    input_price.placeholder = "0.00";
    var input_quantity = document.createElement("INPUT");
    input_quantity.disabled = true;
    input_quantity.className = "itemq";
    input_quantity.type="number";
    input_quantity.placeholder = "1";
    var sele_op = document.createElement("SELECT");
    var sele_class = sele_op.className = "sele_classname";

    var u;
    for(u=0;u<localStorage.length;u++){

        all_keys = localStorage.key(u);
        if(all_keys.match("unit_measure") != null){

            var local_data = localStorage.getItem(all_keys);
            var local_ex = JSON.parse(local_data);
            var creat_op = document.createElement("OPTION");
            creat_op.appendChild(document.createTextNode(local_ex.formal));
            sele_op.appendChild(creat_op);
            
        }
    }


    var input_amount = document.createElement("INPUT");

    input_amount.type="number";
    input_amount.className ="amount_class";
    input_amount.placeholder = "0.00";
    var i_delete = document.createElement("I");
    i_delete.className = "fa fa-trash";
    i_delete.style.fontSize="20px";
    i_delete.style.padding="5px";
    i_delete.style.color="red";
    table.appendChild(row);
    row.appendChild(td_item);
    row.appendChild(td_price);
    row.appendChild(td_quantity);
    row.appendChild(td_unit);
    row.appendChild(td_amount);
    row.appendChild(td_delete);
    
    td_item.appendChild(input_item);
    td_price.appendChild(input_price);
    td_quantity.appendChild(input_quantity);
    td_unit.appendChild(sele_op);
    td_amount.appendChild(input_amount);
    td_delete.appendChild(i_delete);
    
    i_delete.onclick = function(){

        var td_con = this.parentElement;
        var del_tr = td_con.parentElement;
        del_tr.remove();
        
    }

   


    input_item.oninput = function(){
this.onkeydown = function(event){
        if(event.keyCode == 13){
         var item_p = this.parentElement;
        var parrent_tr = item_p.parentElement;
        parrent_tr.getElementsByTagName("INPUT")[1].focus();
    
        }

}
        input_price.disabled = false;
       

        input_price.oninput = function(){
            this.onkeyup = function(event){
                if(event.keyCode == 13){
                 var item_p = this.parentElement;
                var parrent_tr = item_p.parentElement;
                parrent_tr.getElementsByTagName("INPUT")[2].focus();
            
                }
        
        }

            input_quantity.disabled = false;

        }

    }

    input_quantity.oninput = function(){
       
      

        input_amount.disabled = true;
        input_amount.style.background = "white";
        input_amount.style.color = "black";
        input_amount.value =input_price.value*this.value;
        var subto = document.getElementById("sub");
      var class_in = document.getElementsByClassName("amount_class");  
      var i;
      var store_add = 0;
      for(i=0;i<class_in.length;i++){

        store_add = store_add + Number(class_in[i].value);
        subto.innerHTML = "<i class='fa fa-rupee'></i> "+ store_add.toFixed(2);
        s_subtotal = store_add;

      }


     this.onkeyup = function(event){

        if(event.keyCode == 13){
            add_item_in();
            var classh = document.getElementsByClassName("itemc");
            classh[classh.length -1].focus();
        }
        }

      var x;
      var add_tax = 0;
      for(x=0;x<localStorage.length;x++){
       
        var keysee = localStorage.key(x);
        if(keysee.indexOf("tax") != -1){
            
            var tax_key = localStorage.getItem(keysee);
            var extract = JSON.parse(tax_key);
            add_tax = add_tax+extract.tax_pre+"<br>";
            document.getElementById("pre_symbol").innerHTML = "<div id='precenteg' style='display:none;'>"+add_tax.replace(0,"")+"</div>";
          


        }
      }
      var i;
      var fill_data = document.getElementById('precenteg').innerHTML;
      var split_data = fill_data.split("%<br>");
     
      for(i=0;i<split_data.length-1;i++){
          var total_pre = (store_add*split_data[i])/100;
          document.getElementById("pre_symbol").innerHTML += "<i class='fa fa-rupee'></i> "+total_pre.toFixed(2)+"<br>";
        store_add = store_add+total_pre;
        s_add = store_add.toFixed(2);
        s_pre[i] = total_pre.toFixed(2);
        document.getElementById("full_tax").innerHTML =" "+ store_add.toFixed(2);
    document.getElementById("duese_b").innerHTML="<i class='fa fa-rupee'></i> "+ store_add.toFixed(2);
   
    var dues = document.getElementById("paid_bal");
        dues.oninput = function(){
            s_paid = this.value;
        
            var d_bal = store_add-this.value;
          
            document.getElementById("duese_b").innerHTML = "<i class='fa fa-rupee'><i/> "+d_bal.toFixed(2);
           d_val = d_bal.toFixed(2);
        }

        }   
    
 

    }
    




    



    
}


function add_input(){
var click_btn = document.getElementById("item_add_");
click_btn.onclick = function(){

   add_item_in();

}


}

add_input();

// show tax button 

function show_tax(){

    var tax_text = document.getElementById("i_close");
   
    var show_btn = document.getElementById("tax_btn");
    tax_text.onclick = function(){
        document.getElementById("vou_search_con").style.display = "none";
        if(show_btn.offsetHeight == 66)

        {
            show_btn.style.height = "230px";
            show_btn.webkitTransition = "1s";
            show_btn.transition = "1s";
            document.getElementById("vou_search_con").style.display = "none";

        }

        else{
            
            show_btn.style.height = "66px";
            show_btn.webkitTransition = "1s";
            show_btn.transition = "1s";
            document.getElementById("vou_search_con").style.display = "block";
        }

            var tax_name = document.getElementById("taxname");
            var tax_pre = document.getElementById("taxpre");
            tax_name.onchange = function(){

               if(tax_name.value.indexOf("tax") != -1){

                tax_pre.oninput = function(){
                    if(tax_pre.value.charAt(0).indexOf("%") == -1){
                        var onsub = document.getElementById("form_tax");
                        onsub.onsubmit = function(){
                            if(tax_pre.value.indexOf("%") != -1){

                                var regex = /[a-z!=@#+$_^&*({;:"'|\][?/<,.>})-]/i;
                                var check = tax_pre.value.match(regex);
                                if(check == null){

                                    var tax = {tax_name:tax_name.value,tax_pre:tax_pre.value};
                                    var string = JSON.stringify(tax);
                                    localStorage.setItem(tax_name.value,string);


                                }

                                else
                                {
                                    tax_pre.value = "0-9 and add only % symbol";
                                    tax_pre.onclick = function(){
                                        tax_pre.value = "";
                                    }
                                    return false;
                                }
                            }

                            else{

                                tax_pre.value = "must add % symbol";
                                tax_pre.onclick = function(){
                                    tax_pre.value = "";
                                }
                                return false;
                            }



                        }
                        
                    }

                    else{

                        tax_pre.value = "% not allowed first latter";
                        tax_pre.className = "animated infinite pulse";
                        tax_pre.style.border = "1px solid red";
                   
                        tax_pre.style.color = "red";
                        tax_pre.onclick = function(){
                            tax_pre.value = "";
                        tax_pre.className = "";
                        tax_pre.style.border = "";
                   
                        tax_pre.style.color = "";
                        }

                    }

                }

               }

               else{
                tax_name.value = "must add tax word";
                   tax_name.style.border = "1px solid red";
                   
                   tax_name.style.color = "red";
                   tax_name.className = "animated infinite pulse";
                   tax_name.onclick = function(){
                    tax_name.value = "";
                    tax_name.style.border = "";
                   
                    tax_name.style.color = "";
                    tax_name.className = "";
                   }
               }
            }

        
    }
    
    

}

show_tax();

function getbill(){
var get_bill = document.getElementById("get");
get_bill.onclick = function(){
   
    var i,s_item = [],s_price = [],s_qty = [],s_unit = [],s_amount = [];
    
    this.style.display = "none";
    document.getElementById("close_btn").style.display= "none";
    
    var voucher = document.getElementById("voucher_con");
    var logo = document.getElementById("company_voucher_logo");
    var logo_con = document.getElementById("voucher_address");
    logo_con.style.top="0px";
    logo.style.top = "0px";
    voucher.style.width="100%";
    voucher.style.top="0";
    voucher.style.left="0";
    logo_con.style.position = "relative";
    logo_con.style.right="0";
    logo_con.style.top="0";
    
    var input_con = document.getElementById("form_co");

    var inp = document.getElementById("table_inp");
   
    var in_field = inp.getElementsByTagName("INPUT");
    for(i=0;i<in_field.length;i++){
        in_field[i].style.border = "none";
        in_field[i].style.background = "white";
        in_field[i].style.padding = "0";


    }

   
    document.getElementById("paid_bal").style.border = "none";
    document.getElementById("table_border").border = "1";
    document.getElementById("vou_search_con").style.display = "none";
    document.getElementById("item_add_").style.display = "none";
    document.getElementById("none_del").style.display = "none";
    
    document.getElementById("num_date").style.width = "95.4%";
    var table_id = document.getElementById("table_inp");
    var table_tr = table_id.getElementsByTagName("TR");
    for(i=0;i<table_tr.length;i++){
    
        var i_table_td = table_tr[i].getElementsByTagName("TD");
        i_table_td[i_table_td.length-1].remove();
        


    
    }

    var n_field = document.getElementById("name_field").value;
    var e_field = document.getElementById("email_field").value;
    var a_field = document.getElementById("address_field").value;
    var p_field = document.getElementById("phone_field").value;
    var store_item = document.getElementsByClassName("itemc");
    for(i=0;i<store_item.length;i++)
    {
        s_item[i] = store_item[i].value;
    }
    var store_price = document.getElementsByClassName("itemp");
    for(i=0;i<store_price.length;i++)
    {
        s_price[i] = store_price[i].value;

    }

    var store_unit = document.getElementsByClassName("sele_classname");
    for(i=0;i<store_unit.length;i++)
    {
        s_unit[i] = store_unit[i].value;
    }

    var store_qty = document.getElementsByClassName("itemq"); 

    for(i=0;i<store_qty.length;i++)
    {
        s_qty[i] = store_qty[i].value;
    }
    var store_amount = document.getElementsByClassName("amount_class");
    for(i=0;i<store_amount.length;i++){
        s_amount[i] = store_amount[i].value;
    }


var store_object = {n_field:n_field,e_field:e_field,a_field:a_field,p_field:p_field,s_item:s_item,s_price:s_price,s_qty:s_qty,s_amount:s_amount,d_val:d_val,s_add:s_add,s_subtotal:s_subtotal,s_paid:s_paid,s_pre:s_pre,s_datev:s_datev,s_unit:s_unit};
var store_de = JSON.stringify(store_object);
localStorage.setItem("voucher_no_"+all_voucher_no,store_de);


input_con.getElementsByTagName("INPUT");
    

for(i=0;i<input_con.length;i++)
{

input_con[i].style.border = "none";
input_con[i].style.background = "white";
input_con[i].style.padding = "0";

}

var y;
for(y=0;y<store_unit.length;y++){

    store_unit[y].style.border = "none";
    store_unit[y].style.webkitAppearance = "none";
    store_unit[y].style.mozAppearance = "none";
    store_unit[y].style.appearance = "none";

}

document.getElementById("delete_btn").style.display= "none";




}

}

getbill();


   
function search_voucher(){

    var search_inp = document.getElementById("voucher_num_input");
    search_inp.onkeyup = function(event){
        if(event.keyCode == 13){
            var v_adjust = document.getElementById("voucher_address");
            v_adjust.style.position = "relative";
            v_adjust.style.top = "-35px";
            var del_vo = document.getElementById("del_inv");
            del_vo.style.display = "block";
            del_vo.onclick = function(){
                var allow = window.confirm("are you want to sure ?");
                if(allow == true){
                localStorage.removeItem("voucher_no_"+search_inp.value);
                window.location = location.href;
                }
            }
            var user_input = "voucher_no_"+this.value;
            
            var i;
            for(i=0;i<localStorage.length;i++){

             var all_keyse = localStorage.key(i);
             if(all_keyse == user_input){
                
                var buyer_string = localStorage.getItem(all_keyse);
                var buyer_extract = JSON.parse(buyer_string);
                document.getElementById("sales-btn").click();
                var sitem = buyer_extract.s_item.length;
                document.getElementById("num").innerHTML = "Voucher no "+this.value;
                document.getElementById("name_field").value = buyer_extract.n_field;
                document.getElementById("email_field").value = buyer_extract.e_field;
                document.getElementById("address_field").value = buyer_extract.a_field;
                document.getElementById("phone_field").value = buyer_extract.p_field;
                var item_c = document.getElementsByClassName("itemc");
               var item_p =  document.getElementsByClassName("itemp");
                var item_q = document.getElementsByClassName("itemq");
                var amo_c = document.getElementsByClassName("amount_class");
                var unit = document.getElementsByClassName("sele_classname");
                var j;
                for(j=0;j<sitem;j++){

                    document.getElementById("item_add_").click();
                    item_c[j].value = buyer_extract.s_item[j]; 
                    item_p[j].value = buyer_extract.s_price[j];
                    item_p[j].disabled = false;
                    item_q[j].value = buyer_extract.s_qty[j];
                    unit[j].value = buyer_extract.s_unit[j];
                    item_q[j].disabled = false;
                    amo_c[j].value = buyer_extract.s_amount[j];
                }

                document.getElementById("duese_b").innerHTML= " "+buyer_extract.d_val;
                document.getElementById("paid_bal").value = buyer_extract.s_paid;
                all_voucher_no = this.value;
                document.getElementById("date_vo").innerHTML = "Date : &nbsp"+buyer_extract.s_datev;


                
                 var subto = document.getElementById("sub");
              var class_in = document.getElementsByClassName("amount_class");  
              var j;
              var store_add = 0;
              for(j=0;j<class_in.length;j++){
        
                store_add = store_add + Number(class_in[j].value);
                subto.innerHTML = "<i class='fa fa-rupee'></i> "+ store_add.toFixed(2);
                s_subtotal = store_add;
        
              }
        
        
        
        
              var j;
              var add_tax = 0;
              for(j=0;j<localStorage.length;j++){
               
                var keysee = localStorage.key(j);
                if(keysee.indexOf("tax") != -1){
                    
                    var tax_key = localStorage.getItem(keysee);
                    var extract = JSON.parse(tax_key);
                    add_tax = add_tax+extract.tax_pre+"<br>";
                    document.getElementById("pre_symbol").innerHTML = "<div id='precenteg' style='display:none;'>"+add_tax.replace(0,"")+"</div>";
                  
        
        
                }
              }
              var j;
              var fill_data = document.getElementById('precenteg').innerHTML;
              var split_data = fill_data.split("%<br>");
             
              for(j=0;j<split_data.length-1;j++){
                  var total_pre = (store_add*split_data[j])/100;
                  document.getElementById("pre_symbol").innerHTML += "<i class='fa fa-rupee'></i> "+total_pre.toFixed(2)+"<br>";
                store_add = store_add+total_pre;
                s_add = store_add.toFixed(2);
                s_pre[j] = total_pre.toFixed(2);
                document.getElementById("full_tax").innerHTML =" "+ store_add.toFixed(2);
            document.getElementById("duese_b").innerHTML="<i class='fa fa-rupee'></i> "+ store_add.toFixed(2);
           
            var dues = document.getElementById("paid_bal");
                dues.oninput = function(){
                    s_paid = this.value;
                
                    var d_bal = store_add-this.value;
                  
                    document.getElementById("duese_b").innerHTML = "<i class='fa fa-rupee'><i/> "+d_bal.toFixed(2);
                   d_val = d_bal.toFixed(2);
                }
        
                }  
      
     
            
                
    }




            }

            var date = document.getElementById("date_vo");
            date.onclick = function(){

                var date_pr = window.prompt("edit voucher date",buyer_extract.s_datev);
                this.innerHTML = "Date : "+date_pr;
                s_datev = date_pr;

                if(date_pr == null){

                    this.innerHTML = "Date : "+buyer_extract.s_datev;
                }
            }

        }
    }    

}
search_voucher();


// manage voucher coding

function managee_voucher(){

    var i;
    for(i=0;i<localStorage.length;i++){

        var allkey = localStorage.key(i);
        if(allkey.indexOf("voucher_no") != -1)
        {
            
            document.getElementById("manage_vou_se").style.display = "block";
            
        }

        else{

            document.getElementById("manage_vou_se").style.display = "block";
        }
    }



}

managee_voucher();

function shut_company(){

    var shut_c = document.getElementById("shut_company_id");
    shut_c.onclick = function(){

        location.assign("../bussines.html");
    }
}

shut_company();

function manage_tax(){

    var man_tax = document.getElementById("manage_tax");
    var i;
    for(i=0;i<localStorage.length;i++){

        var allkeys = localStorage.key(i);
        if(allkeys.match("tax")){
            document.getElementById("manage_tax_s").style.display = "block";

            var opt = document.createElement("OPTION");
            opt.appendChild(document.createTextNode(allkeys));
            man_tax.appendChild(opt);

        }
    }

    man_tax.onchange  = function(){
        var reserve = this.value;
       document.getElementById("i_close").click();
        var icon_calss = document.getElementById("calcu");
        icon_calss.className="fa fa-trash";
        icon_calss.onclick = function(){

            var conform = window.confirm("are you want to sure delete tax");
            if(conform == true){

                localStorage.removeItem(reserve);
                window.location = location.href;
            }
        }


      this.onclick = function(){
        document.getElementById("i_close").click();
       }

       var tax_ob = localStorage.getItem(this.value);
       var tax_stri = JSON.parse(tax_ob);
       document.getElementById("taxname").value = tax_stri.tax_name;
       document.getElementById("taxpre").value = tax_stri.tax_pre;
       document.getElementById("lsave").onclick = function(){
           
        var tax_name = document.getElementById("taxname").value;
        var tax_pre = document.getElementById("taxpre").value;
        if(tax_name == reserve){
        var tax_obj = {tax_name:tax_name,tax_pre:tax_pre};
        var tax_str = JSON.stringify(tax_obj);
        localStorage.setItem(tax_name,tax_str);

        }

        else{
            localStorage.removeItem(reserve);
            var tax_obj = {tax_name:tax_name,tax_pre:tax_pre};
            var tax_str = JSON.stringify(tax_obj);
            localStorage.setItem(tax_name,tax_str);
        }

       }

    }

}

manage_tax();