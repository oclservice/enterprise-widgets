function getCitation()
{
   var isbn = jQuery('#isbn0').attr('value');
   var url = 'https://www.worldcat.org/isbn/'+isbn+'?page=citation';
   console.log('Citation URL generated: '+url);
   window.open(url , '_blank');
}