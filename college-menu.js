// Global variable holding the college for which URLs should be displayed
var targetCollege;
$J(document).ready(function(){
     //document.cookie = "college=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    
	var coll_url = getParameterByName('college');   	
	//console.log(coll_url);
	if(coll_url !== null){
		if(coll_url == 'georgebrown' || coll_url == 'Georgebrown'){
			coll_url = 'geob';
		}
		if(coll_url == 'georgian' || coll_url == 'Georgian' ){
			coll_url = 'geog';
		}
		if(coll_url !== 'georgian' || coll_url !== 'Georgian' || coll_url !== 'georgebrown' || coll_url !== 'Georgebrown'){

			coll_url = coll_url.substr(0,4);
			coll_url = coll_url.toLowerCase();
		}
		
		targetCollege = coll_url;
		document.cookie = "college="+coll_url+"; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/";

		$J("#college").val(coll_url);
	}else{

		document.cookie = "college=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	}
	

	var drop = "<select id='college' onchange='getCookie()'>";
	if(window.location.href.indexOf("fr_CA") > -1) {
	    
	       
	       $J('.logo_container').prepend('<a href="/client/fr_CA/ebooks/"><img src="/custom/web/ocls_collect_ebooks_logo_fra_final.png" alt="Collect eBooks logo" border="0"></a>');
	       
	       drop += "<option value='dis' disabled selected>Choisir votre collège</option>";
	}else{
		 $J('.logo_container').prepend('<a href="/client/en_US/ebooks/"><img src="/custom/web/ocls_collect_ebooks_logo_eng_final.png" alt="Collect eBooks logo" border="0"></a>');	
		 drop += "<option value='dis' disabled selected>Select your college</option>";
	}
	
	drop += "<option value='algo'>Algonquin</option>";
	drop += "<option value='bore'>Boréal</option>";
	drop += "<option value='camb'>Cambrian</option>";
	drop += "<option value='cent'>Centennial</option>";
	drop += "<option value='cone'>Conestoga</option>";
	drop += "<option value='conf'>Confederation</option>";
	drop += "<option value='durh'>Durham</option>";
	drop += "<option value='fans'>Fanshawe</option>";
	drop += "<option value='flem'>Fleming</option>";
	drop += "<option value='geob'>George Brown</option>";
	drop += "<option value='geog'>Georgian</option>";
	drop += "<option value='fans'>Fanshawe</option>";
	drop += "<option value='humb'>Humber</option>";
	/*drop += "<option value='laci'>La Cité</option>";*/
	drop += "<option value='lamb'>Lambton</option>";
	drop += "<option value='loya'>Loyalist</option>";
	drop += "<option value='moha'>Mohawk</option>";
	drop += "<option value='niag'>Niagara</option>";
	drop += "<option value='nort'>Northern</option>";
	/*drop += "<option value='saul'>Sault</option>";*/
	drop += "<option value='sene'>Seneca</option>";
	drop += "<option value='sher'>Sheridan</option>";
	/*drop += "<option value='stcl'>St. Clair</option>";*/
	drop += "<option value='stla'>St. Lawrence</option>";
	drop += "</select>";

	

	

	$J('#mainMenuContainer').append(drop);
	
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

	var years = new Array($J( "#facetPUBDATE" ).find('span').length);
	var count = new Array($J( "#facetPUBDATE" ).find('span').length);
	var check = new Array($J( "#facetPUBDATE" ).find('span').length);
	
	/*$J( "#facetPUBDATE" ).find('span').each(function( index ) {
	  years[index] = $J( this ).attr('title');
	  
	});	
	$J( "#view_all_facets_div" ).hide();
	$J( "#facetPUBDATE" ).find('.navigatorCount').each(function( index ) {
		//console.log($J(this).text());
		count[index] =  years[index] + ":" + $J(this).text();
	});	
	$J( "#facetPUBDATE" ).find('.navigatorCheckBox').each(function( index ) {
		 console.log($J( this ).find('input').attr('title'));
		 check[index] =$J( this ).find('input').attr('title');
	});
	
	years.sort(function(a, b){return b-a});	
	$J( "#facetPUBDATE" ).find('span').each(function( index ) {
	
	  $J( this ).attr('title',years[index]);
	  $J( this ).find('a').attr('title',years[index]);
	  $J( this ).find('a').text(years[index]);
	  var search = getParameterByName('qu');
	  $J( this ).find('a').attr('href','/client/en_US/ebooks/search/results.limitcolumn.navigatorclick?qu='+search+'&qf=PUBDATE%09Publication+Date%09'+years[index]+'%09'+years[index]);
	  
	});	
	$J( "#facetPUBDATE" ).find('.navigatorCheckBox').each(function( index ) {
		$J( this ).find('input').attr('title',years[index]);
		$J( this ).find('input').attr('value',years[index]+"@@NAVDELIM@@"+years[index]);
	});*/
/*

	$J( "#allLinkPUBDATE" ).click(function() {
	  	if($J("#facet_navigators_table").is(":visible")){

	  		console.log('OPEN');
	  	}
	  
	});*/

	

	
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

	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

		
	
