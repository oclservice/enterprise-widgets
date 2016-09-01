function testeBooklink(rId){

var profileLib = com_sirsi_ent_page.friendlyUrl;
profileLib = profileLib.toUpperCase();
console.log('Profile Library: '+profileLib);
console.log('Hit number: '+rId);

// Get first Electronic access URL to use as base
base_url=$J('#'+rId+'_hiddenFields').find('.ELECTRONIC_ACCESS_value').find('a')[0].href.match("&url=(.*)")[1];


// Set this to true for testing
var testing = true;

if (testing) {
   var testing_url='&noipcheck=true';
} else {
   var testing_url='';
}


switch(profileLib) {
 
case 'ALGONQUIN' :
    base_url=base_url.replace('humber','algonquin');
    out_url='http://ra.ocls.ca/ra/login.aspx?inst=algonquin&url='+base_url+testing_url;
    break;
    
  case 'BOREAL' :
    base_url=base_url.replace('humber','boreal');
    out_url='http://ra.ocls.ca/ra/login.aspx?inst=boreal&url='+base_url+testing_url;
    break;
    
   case 'CAMBRIAN' :
    base_url=base_url.replace('humber','cambrian');
    out_url='http://ra.ocls.ca/ra/login.aspx?inst=cambrian&url='+base_url+testing_url;
    break;
    
   case 'CENTENNIAL' :
    base_url=base_url.replace('humber','centennial');
    out_url='http://ra.ocls.ca/ra/login.aspx?inst=centennial&url='+base_url+testing_url;
    break;    

   case 'CONESTOGA' :
    base_url=base_url.replace('humber','conestoga');
    out_url='http://ra.ocls.ca/ra/login.aspx?inst=conestoga&url='+base_url+testing_url;
    break;    

   case 'CONFEDERATION' :
    base_url=base_url.replace('humber','confederation');
    out_url='http://ra.ocls.ca/ra/login.aspx?inst=confederation&url='+base_url+testing_url;
    break;
    
   case 'DURHAM' :
    base_url=base_url.replace('humber','durham');
    out_url='https://login.dproxy.library.dc-uoit.ca/login?url='+base_url;
    break;
    
   case 'FANSHAWE' :
    base_url=base_url.replace('humber','fanshawe');
    out_url='https://login.ezpxy.fanshawec.ca/login?url='+base_url;
    break;
    
   case 'FLEMING' :
    base_url=base_url.replace('humber','fleming');
    out_url='http://ra.ocls.ca/ra/login.aspx?inst=fleming&url='+base_url+testing_url;
    break;
    
   case 'GEORGEBROWN' :
    base_url=base_url.replace('humber','georgebrown');
    out_url='http://gbcprx01.georgebrown.ca/login?url='+base_url;
    break;
    
   case 'GEORGIAN' :
    base_url=base_url.replace('humber','georgian');
    out_url='http://ra.ocls.ca/ra/login.aspx?inst=georgian&url='+base_url+testing_url;
    break;
    
   case 'HUMBER' :
    
    out_url='http://ra.ocls.ca/ra/login.aspx?inst=humber&url='+base_url+testing_url;
    break;
   
   case 'LACITE' :
    base_url=base_url.replace('humber','lacite');
    out_url='http://ra.ocls.ca/ra/login.aspx?inst=lacite&url='+base_url+testing_url;
    break;
 
   case 'LAMBTON' :
    base_url=base_url.replace('humber','lambton');
    out_url='http://ra.ocls.ca/ra/login.aspx?inst=lambton&url='+base_url+testing_url;
    break;
    
   case 'LOYALIST' :
    base_url=base_url.replace('humber','loyalist');
    out_url='http://ra.ocls.ca/ra/login.aspx?inst=loyalist&url='+base_url+testing_url;
    break;
    
   case 'MOHAWK' :
    base_url=base_url.replace('humber','mohawk');
    out_url='https://login.ezproxy.mohawkcollege.ca/login?url='+base_url;
    break;
    
   case 'NIAGARA' :
    base_url=base_url.replace('humber','niagaracollege');
    out_url='http://proxy.library.niagarac.on.ca:8080/login?url='+base_url;
    break;
    
   case 'NORTHERN' :
    base_url=base_url.replace('humber','northernca');
    out_url='http://ra.ocls.ca/ra/login.aspx?inst=northern&url='+base_url+testing_url;
    break;
    
   case 'SAULT' :
    base_url=base_url.replace('humber','sault');
    out_url='http://ra.ocls.ca/ra/login.aspx?inst=sault&url='+base_url+testing_url;
    break;
    
   case 'SENECA' :
    base_url=base_url.replace('humber','seneca');
    out_url='https://libaccess.senecacollege.ca:2443/login?url='+base_url;
    break;
    
   case 'SHERIDAN' :
    base_url=base_url.replace('humber','sheridancc');
    out_url='https://login.library.sheridanc.on.ca/login?url='+base_url;
    break;
    
   case 'STCLAIR' :
    base_url=base_url.replace('humber','stclair');
    out_url='http://ra.ocls.ca/ra/login.aspx?inst=stclair&url='+base_url+testing_url;
    break;
    
   case 'STLAWRENCE' :
    base_url=base_url.replace('humber','algonquin');    
    out_url='http://ra.ocls.ca/ra/login.aspx?inst=stlawrence&url='+base_url+testing_url;
    break;
    
  default:
    base_url=base_url.replace('humber','oclscc');
    out_url='http://ra.ocls.ca/ra/login.aspx?url='+base_url+testing_url;
    
}

console.log('URL: '+out_url);
window.open(out_url , '_blank');

}