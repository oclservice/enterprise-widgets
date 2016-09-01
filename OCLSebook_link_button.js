function getEbookLink(rId){
var wsBaseUrl="http://bibc.ocls.ca:8080/symws/";
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
 success: parse856Links,
 error: function (xhr, ajaxOptions, thrownError) {
        console.log("API status: "+xhr.status);
        console.log("API error: "+thrownError);
      }
});//end ajax()
}

function parse856Links(sirsijson){
	// This function is called by jQuery.ajax with the results of the API call
	console.log("API call successful");
	
	// Set this to true for testing
	var OCLStestMode = true;

	if (OCLStestMode) {
		var urlTestSuffix='&noipcheck=true';
	} else {
	var urlTestSuffix='';
	}
	
	// The 'targetCollege' global variable is set by the OCLS_COLLEGE_DROPDOWN widget
	// Map this value to full college name as in the 856 entries
	collegeNameMappings = { "algo": "Algonquin College", 
						"bore": "Collège Boréal", 
						"camb": "Cambrian College", 
						"cent": "Centennial College",
						"cone": "Conestoga College",
						"conf": "Confederation College",
						"durh": "Durham College",
						"fans": "Fanshawe College",
						"flem": "Fleming College",
						"georb": "George Brown College",
						"georg": "Georgian College",
						"humb": "Humber College",
						"lacite": "La Cité collégiale",
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
						}
	var targetCollegeName = collegeNameMappings[targetCollege];
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
	console.log("Ebook URL: "+ebookUrl);
	window.open(bookUrl , '_blank');
}
