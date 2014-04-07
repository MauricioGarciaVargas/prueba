
if(!window.XMLHttpRequest) window.XMLHttpRequest = function(){
    return new ActiveXObject("Msxml2.XMLHTTP")
    || new ActiveXObject("Microsoft.XMLHTTP");
};
 
var ajax;
function ajaxRequest(where) {
	alert("Starting request...");
    ajax = new XMLHttpRequest();
    ajax.onreadystatechange = ajaxListen;
    ajax.open('get', where, true);
     ajax.setRequestHeader("Content-type","application/json");
    ajax.send(null);
}
 
function ajaxListen() {
    if(ajax.readyState === 4)
		var date = ajax.responseText;
		var obj = eval("("+ date +")")
    	document.getElementById("fName").value = obj.fName;
    	document.getElementById("lName").value = obj.lName;
    	document.getElementById("eMail").value = obj.eMail;
    	document.getElementById("address").value = obj.address;
    	document.getElementById("city").value = obj.city;
    	document.getElementById("state").value = obj.state;
    	document.getElementById("zipCode").value = obj.zipCode;

}

function validate()
{
 var frm = document.getElementById("formP");
 var validation = 0
 for (var i=0;i<frm.elements.length;i++)
 {
 	var element =  frm.elements[i];
	switch(element.id){
		case 'fName':
			st = /^[A-Za-z]+$/;
			re = new RegExp(st);
        	if (!document.getElementById(element.id).value.match(re)|| !document.getElementById(element.id).value===""){
        		validation++;
        		alert("Verify Name"); 
        	};
        	break;
		case 'lName':
			st = /^[A-Za-z]+$/;
			re = new RegExp(st);
        	if (!document.getElementById(element.id).value.match(re)|| !document.getElementById(element.id).value===""){
        		validation++;
        		alert("Veriry last Name"); 
        	};
        	break;
		case 'eMail':
			st = "^[a-z]+@[a-z]+\.[a-z]{2,4}$"; 
        	re = new RegExp(st);
        	if (!document.getElementById(element.id).value.match(re)){
        		validation++;
        		alert("no es mail"); 
        	}
        	break;
		case 'address':
			st = /^[A-Za-z]+$/;
			re = new RegExp(st);
        	if (!document.getElementById(element.id).value.match(re)|| !document.getElementById(element.id).value===""){
        		validation++;
        		alert("Veriry address"); 
        	};
        	break;
		case 'city':
			st = /^[A-Za-z]+$/;
			re = new RegExp(st);
        	if (!document.getElementById(element.id).value.match(re)|| !document.getElementById(element.id).value===""){
        		validation++;
        		alert("Veriry City"); 
        	};
        	break;
		case 'state':
			st = /^[A-Za-z]+$/;
			re = new RegExp(st);
        	if (!document.getElementById(element.id).value.match(re)|| !document.getElementById(element.id).value===""){
        		validation++;
        		alert("Veriry State"); 
        	};
        	break;
		case 'zipcode':
			st = "^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$";
			re = new RegExp(st);
			if (!document.getElementById(element.id).value.match(re)){
        		validation++; 
        	}
        	break;
	}
 }
 if (validation===0){
 	alert("submit");
 	showForm(frm);
 }else{
 	alert("Please check the fields");
 }
}

function showForm(_form){
 	for (var i=0;i<_form.elements.length;i++){
 		var element =  _form.elements[i];
 		document.getElementById("showForm").innerHTML += " " + document.getElementById(element.id).value;
 	}
}