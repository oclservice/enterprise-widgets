// Global variable holding the college for which URLs should be displayed
var targetCollege;
$J(document).ready(function(){
     //document.cookie = "college=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

	 


	var drop = "<select id='college' onchange='getCookie()'>";
	drop += "<option value='dis' disabled selected>Select your college</option>";
	drop += "<option value='algo'>Algonquin</option>";
	drop += "<option value='bore'>Boreal</option>";
	drop += "<option value='camb'>Cambrian</option>";
	drop += "<option value='cent'>Centennial</option>";
	drop += "<option value='cone'>Conestoga</option>";
	drop += "<option value='conf'>Confederation</option>";
	drop += "<option value='durh'>Durham</option>";
	drop += "<option value='fans'>Fanshawe</option>";
	drop += "<option value='flem'>Fleming</option>";
	drop += "<option value='georb'>George Brown</option>";
	drop += "<option value='georg'>Georgian</option>";
	drop += "<option value='fans'>Fanshawe</option>";
	drop += "<option value='humb'>Humber</option>";
	drop += "<option value='lacite'>Lacite</option>";
	drop += "<option value='lamb'>Lambton</option>";
	drop += "<option value='loya'>Loyalist</option>";
	drop += "<option value='moha'>Mohawk</option>";
	drop += "<option value='niag'>Niagara</option>";
	drop += "<option value='nort'>Northern</option>";
	drop += "<option value='saul'>Sault</option>";
	drop += "<option value='sene'>Seneca</option>";
	drop += "<option value='sher'>Sheridan</option>";
	drop += "<option value='stcl'>St. Clair</option>";
	drop += "<option value='stla'>St. Lawrence</option>";
	drop += "</select>";

	$J('#adaNav').append(drop);
	
	 	 var keyValuePairs = document.cookie.split(';');
	      	for(var i = 0; i < keyValuePairs.length; i++) {
	      	    var name = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('='));
	      	    var value = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=')+1);
	             name = name.replace(/^\s+|\s+$/g, '');
	             if(name == "college"){
	             	console.log(value);
                        targetCollege = value;
	             	$J("#college").val(value);
	             }
	      	}

	
	
	
});

	function getCookie() {
		    var college = document.getElementById("college").value;
		    //console.log(college);
		    checkCookie(college);
		    document.cookie = "college="+college+"; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/";
		    targetCollege = college;

		    
		   
	}
	function checkCookie(coll) {
	    var check=coll;
	    var keyValuePairs = document.cookie.split(';');
	   for(var i = 0; i < keyValuePairs.length; i++) {
	       var name = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('='));
	       var value = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=')+1);
	       if(value == coll){

	       }else{
	       		document.cookie = "college=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	       }
	   }
	}	