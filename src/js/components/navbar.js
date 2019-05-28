// Function for portfolio submenu

$(function () {
	$('#portfolioItem').click(function (e) {
		e.stopPropagation();
		$('.navbarNavSubMenu').toggleClass('open');
	});
});