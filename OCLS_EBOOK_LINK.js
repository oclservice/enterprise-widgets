function getEbookLink(rId){
	// The 'targetCollege' global variable is set by the college-menu.js script (loaded in custom/web).
	// Map this value to full college name as in the 856 entries
	collegeNameMappings = { "algo": "Algonquin College", 
						"bore": "Collège Boréal", 
						"camb": "Cambrian College",
						"cana": "Canadore College",
						"cent": "Centennial College",
						"cone": "Conestoga College",
						"conf": "Confederation College",
						"durh": "Durham College",
						"fans": "Fanshawe College",
						"flem": "Fleming College",
						"geob": "George Brown College",
						"geog": "Georgian College",
						"humb": "Humber College",
						"laci": "La Cité Collégiale",
						"lamb": "Lambton College",
						"loya": "Loyalist College",
						"moha": "Mohawk College",
						"niag": "Niagara College",
						"nort": "Northern College",
						"saul": "Sault College",
						"sene": "Seneca College",
						"sher": "Sheridan College",
						"stcl": "St. Clair College",
						"stla": "St. Lawrence College"
						};
	try{
		var targetCollegeName = collegeNameMappings[targetCollege];
	}
	catch(e){
		var targetCollegeName = "unknown";
	}
	
	if ((typeof targetCollegeName == 'undefined')||(targetCollegeName=="unknown")){
		// Mapping failed because targetCollege was not set, ask user to specify college.
		// Build a drop down menu with all college names.
		var collegeDropdown = document.createElement("select");
		collegeDropdown.id = "ebookLinkCollegeSelector";
		for (var college in collegeNameMappings){
			var opt = document.createElement("option");
			opt.value = college;
			var text = document.createTextNode(collegeNameMappings[college]);
			opt.appendChild(text);
			collegeDropdown.appendChild(opt);
		};	
		
		console.log("Display drop down menu.")
		
		jQuery(function() {
			jQuery(collegeDropdown).dialog({
			width:500,
			maxHeight:700,
			title:'${CHOOSECOLLEGE}',
			modal:true,
			buttons:{
				Done : function(){
					// Set targetCollege to the selected value
					targetCollege = this.options[this.selectedIndex].value;
					// Update the cookie fo store this selection for future uses
					document.cookie = "college="+targetCollege+"; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/";
					// Get the links and redirect
					get856Links(rId,collegeNameMappings[targetCollege]);
					jQuery(this).dialog("close");
					}
				}
			});
		});
	}
	else{
		// targetCollege was set already, get the links and redirect
		get856Links(rId,targetCollegeName);
	}
	
}

function get856Links(rId,targetCollegeName){
	var wsBaseUrl="https://bibc.ocls.ca:8443/symws/";
	var clientId="DS_CLIENT";

	all_results=jQuery('#results_wrapper').find('.DOC_ID_value');

	var catKey;
	catKey=jQuery('#'+rId+'_DOC_ID').find('.DOC_ID_value').text().split(':')[1];
	var wsUrl=wsBaseUrl+'rest/standard/lookupTitleInfo?clientID='+clientId+'&titleID='+catKey+'&includeOPACInfo=false&marcEntryFilter=856&json=true';
	console.log("API call: "+wsUrl);
	var urlFrom856 = jQuery.ajax({
	 type: 'GET',
	 url: wsUrl,
	 dataType: 'json',
	 success: function(sirsijson){ parse856Links(sirsijson,targetCollegeName); },
	 error: function (xhr, ajaxOptions, thrownError) {
			console.log("API status: "+xhr.status);
			console.log("API error: "+thrownError);
		  },
	 async: false
	});//end ajax()
}


function parse856Links(sirsijson,targetCollegeName){
	// This function is called by jQuery.ajax with the results of the API call
	console.log("API call successful");
	
	// Set this to true for testing
	var OCLStestMode = false;

	if (OCLStestMode) {
		var urlTestSuffix='&noipcheck=true';
	} else {
	var urlTestSuffix='';
	}
	
	console.log("Target college: "+targetCollegeName);
	var ebookUrl;
	
	marcInfo=sirsijson.TitleInfo[0].BibliographicInfo.MarcEntryInfo;
	jQuery.each(marcInfo,function(){
		if (this.text==targetCollegeName){
			ebookUrl = this.url+urlTestSuffix;
			// Return false to break the loop once the college has been found.
			return false;
		}
	});
	
	// Check if a value was found. If not, no 856 was defined for this college.
	if (ebookUrl) {
		console.log("Resource URL: "+ebookUrl);
		window.open(ebookUrl);
	} else {
		console.log("No resource URL found for college "+targetCollegeName);
		
		alert("${NOACCESS} "+targetCollegeName);
	}
}