$(document).ready(function(){
	$(document).on('click', '.duplicate', function(){
		$(this).after('<input class="duplicate" type="button" value="Click" />');
	});
});
