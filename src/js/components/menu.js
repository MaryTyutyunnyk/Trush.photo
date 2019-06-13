$(function () {

	$('#navbarBurger').click(function (e) {
		e.stopPropagation();
		$(this).toggleClass('open');
		$('.navbarMenu').toggleClass('navbarMenu_open');
	});


	let navbarNavLink = $(".navbarNav__link");
	navbarNavLink.click(function () {
		$(".navbarNav__link.navbarNav__link_active").removeClass("navbarNav__link_active");
		$(this).addClass("navbarNav__link_active");
	});


	let navbarLanguageLink = $(".navbarLanguage__link");
	navbarLanguageLink.click(function () {
		$(".navbarLanguage__link.navbarLanguage__link_active").removeClass("navbarLanguage__link_active");
		$(this).addClass("navbarLanguage__link_active");
	});
});


// $("#lang").change(function() {
//     translateValidationMessages(this.value);
//     console.log("Setting language to " + this.value);
// });