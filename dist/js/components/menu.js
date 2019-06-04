$(function () {
	$('#navbarBurger').click(function (e) {
		e.stopPropagation();
		$(this).toggleClass('open');
		$('.navbarMenu').toggleClass('navbarMenu_open');
	});
});

$(function () {
	let navbarNavLink = $(".navbarNav__link");
	navbarNavLink.click(function () {
		$(".navbarNav__link.navbarNav__link_active").removeClass("navbarNav__link_active");
		$(this).addClass("navbarNav__link_active");
	});
});


$(function () {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XHJcblx0JCgnI25hdmJhckJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG5cdFx0JCgnLm5hdmJhck1lbnUnKS50b2dnbGVDbGFzcygnbmF2YmFyTWVudV9vcGVuJyk7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblx0bGV0IG5hdmJhck5hdkxpbmsgPSAkKFwiLm5hdmJhck5hdl9fbGlua1wiKTtcclxuXHRuYXZiYXJOYXZMaW5rLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoXCIubmF2YmFyTmF2X19saW5rLm5hdmJhck5hdl9fbGlua19hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJuYXZiYXJOYXZfX2xpbmtfYWN0aXZlXCIpO1xyXG5cdFx0JCh0aGlzKS5hZGRDbGFzcyhcIm5hdmJhck5hdl9fbGlua19hY3RpdmVcIik7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cdGxldCBuYXZiYXJMYW5ndWFnZUxpbmsgPSAkKFwiLm5hdmJhckxhbmd1YWdlX19saW5rXCIpO1xyXG5cdG5hdmJhckxhbmd1YWdlTGluay5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHQkKFwiLm5hdmJhckxhbmd1YWdlX19saW5rLm5hdmJhckxhbmd1YWdlX19saW5rX2FjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcIm5hdmJhckxhbmd1YWdlX19saW5rX2FjdGl2ZVwiKTtcclxuXHRcdCQodGhpcykuYWRkQ2xhc3MoXCJuYXZiYXJMYW5ndWFnZV9fbGlua19hY3RpdmVcIik7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vICQoXCIjbGFuZ1wiKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbi8vICAgICB0cmFuc2xhdGVWYWxpZGF0aW9uTWVzc2FnZXModGhpcy52YWx1ZSk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgbGFuZ3VhZ2UgdG8gXCIgKyB0aGlzLnZhbHVlKTtcclxuLy8gfSk7Il0sImZpbGUiOiJjb21wb25lbnRzL21lbnUuanMifQ==
