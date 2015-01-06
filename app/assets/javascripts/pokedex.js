/* Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
*/

$( document ).ready(function() {
var $container = $('#container');
$container.isotope({
	itemSelector: '.pokemon',
	layoutMode: 'fitRows',
	getSortData: {
	id: '[data-national-id] parseInt'
	},
	sortBy: 'id'
});



$('#menu a').on('click',function(){
console.log($(this).attr('class'));
var $type = $(this).attr('class');
	
	if($type == 'all'){
	$('#container').isotope({
	filter: '*'
		})
	}else{
	$('#container').isotope({
	filter: '.'+$type
		})
		}
});
});