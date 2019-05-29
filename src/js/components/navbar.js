$(function () {

	// Function for portfolio submenu demonstration

	$('#portfolioItem').click(function (event) {
		event.stopPropagation();
		$('.navbarNavSubMenu').toggleClass('open');
		$(".navbarNav__arrow").toggleClass('arrowUp');
	});

	$('html').click(function () {
		$('.navbarNavSubMenu').removeClass("open");
		$(".navbarNav__arrow").removeClass('arrowUp');
	});


	// Function for language submenu demonstration

	$('#navbarLanguageDesktopLink').click(function (event) {
		event.stopPropagation();
		$('.navbarLanguageDesktopSubMenu').toggleClass('open');
		$(".navbarLanguageDesktop__arrow").toggleClass('upArrow');
	});

	$('html').click(function () {
		$('.navbarLanguageDesktopSubMenu').removeClass("open");
		$(".navbarLanguageDesktop__arrow").removeClass('upArrow');
	});
});

