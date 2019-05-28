// Function for portfolio submenu demonstration

$(function () {
	$('#portfolioItem').click(function (event) {
		event.stopPropagation();
		$('.navbarNavSubMenu').toggleClass('open');
	});

	$('html').click(function () {
		$('.navbarNavSubMenu').removeClass("open");
	});
});