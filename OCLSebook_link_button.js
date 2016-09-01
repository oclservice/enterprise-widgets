function getLinks(rId){
var wsBaseUrl="http://bibc.ocls.ca:8080/symws/";
var clientId="DS_CLIENT";

all_results=jQuery('#results_wrapper').find('.DOC_ID_value');

var catKey;
catKey=jQuery('#'+rId+'_DOC_ID').find('.DOC_ID_value').text().split(':')[1];
var wsUrl=wsBaseUrl+'rest/standard/lookupTitleInfo?clientID='+clientId+'&titleID='+catKey+'&includeOPACInfo=false&marcEntryFilter=856&json=true';
console.log(wsUrl);
}