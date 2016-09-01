function getBib(rId){
var wsBaseUrl="http://bibc.ocls.ca:8080/symws/";
var clientId="DS_CLIENT";
var catKey;
catKey=jQuery('#'+rId+'_DOC_ID').find('.DOC_ID_value').text().split(':')[1];
var wsUrl=wsBaseUrl+'rest/standard/lookupTitleInfo?clientID='+clientId+'&titleID='+catKey+'&includeOPACInfo=false&marcEntryFilter=all&json=true&callback=?';
getFullBib(catKey,wsUrl);
}

function getFullBib(catKey,wsUrl){
jQuery.ajax({
 type: 'GET',
 url: wsUrl,
 dataType: 'json',
 success: function(data) {
 marcInfo=data.TitleInfo[0].BibliographicInfo.MarcEntryInfo;
var marcOutput='<div id="marc_output">';
jQuery.each(marcInfo,function(){
marcOutput+= this.entryID + '    ' + this.indicators + '    ' + this.text + '</br>'}); //end each
marcOutput+='</div>';


jQuery(function() {
jQuery(marcOutput).dialog({
width:500,
maxHeight:700,
hide: { effect: "scale", duration: 750 },
title:'MARC for record #'+catKey,
modal:true,
buttons:{
Ok: function(){
jQuery(this).dialog("close");
}
}
});
});
 }//end success function
,
error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
});//end ajax()
}