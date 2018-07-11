//Crosses off list items, or uncrosses them
$('ul').on('click', 'li', function () {
	$(this).toggleClass('completed');
});
//Removes list items from page
$('ul').on('click', 'span', function (event) {
	event.stopPropagation();
	$(this).parent().fadeOut(300, function () {
		$(this).remove();
	});
});
//Inserts new To-Do entry at the bottom of the list
$('input[type="text"]').on('keypress', function (event) {
	if (event.which === 13) {
		if ($(this).val() !== "") {
			var content = $(this).val();
			$('ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span>' + content + '</li>');
			$('input[type="text"]').val("");
		}
	}
});
//Toggles the presence of the To-Do input box 
$('.fa-plus-circle').on('click', function () {
	$('input[type="text"]').fadeToggle(300);
});