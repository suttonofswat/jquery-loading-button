'use strict';

var $submitBtn = $('#submitBtn');

$submitBtn.click(function() {
	$('button').prop('disabled', true);
	$submitBtn.html('Loading...');
	setTimeout(function() {
     $submitBtn.html('Submit');
     $('button').prop('disabled', false);
     }, 4000);

	
});


