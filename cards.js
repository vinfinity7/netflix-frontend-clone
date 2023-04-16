$(document).ready(() => {
	$('.movies-section').on('mouseenter', function(){
		$(this).nextAll().addClass('has-positive-translate')
		$(this).prevAll().addClass('has-negative-translate')

	}).on('mouseleave', function() {
		removeHasClasses()
	})
	
	function removeHasClasses() {
		$('.movies-section').removeClass('has-negative-translate has-positive-translate')
	}
})