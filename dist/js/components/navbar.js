$(function () {

	// Function for portfolio submenu demonstration

	$('#portfolioItem').click(function (event) {
		event.stopPropagation();
		$('.navbarNavSubMenu').toggleClass('open');
		$(".navbarNav__arrow").toggleClass('arrowUp');
		$('.navbarLanguageDesktopSubMenu').removeClass("open");
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
		$('.navbarNavSubMenu').removeClass("open");
	});

	$('html').click(function () {
		$('.navbarLanguageDesktopSubMenu').removeClass("open");
		$(".navbarLanguageDesktop__arrow").removeClass('upArrow');
	});
});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL25hdmJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0Ly8gRnVuY3Rpb24gZm9yIHBvcnRmb2xpbyBzdWJtZW51IGRlbW9uc3RyYXRpb25cclxuXHJcblx0JCgnI3BvcnRmb2xpb0l0ZW0nKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0JCgnLm5hdmJhck5hdlN1Yk1lbnUnKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG5cdFx0JChcIi5uYXZiYXJOYXZfX2Fycm93XCIpLnRvZ2dsZUNsYXNzKCdhcnJvd1VwJyk7XHJcblx0XHQkKCcubmF2YmFyTGFuZ3VhZ2VEZXNrdG9wU3ViTWVudScpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcclxuXHR9KTtcclxuXHJcblx0JCgnaHRtbCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoJy5uYXZiYXJOYXZTdWJNZW51JykucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xyXG5cdFx0JChcIi5uYXZiYXJOYXZfX2Fycm93XCIpLnJlbW92ZUNsYXNzKCdhcnJvd1VwJyk7XHJcblx0fSk7XHJcblxyXG5cclxuXHQvLyBGdW5jdGlvbiBmb3IgbGFuZ3VhZ2Ugc3VibWVudSBkZW1vbnN0cmF0aW9uXHJcblxyXG5cdCQoJyNuYXZiYXJMYW5ndWFnZURlc2t0b3BMaW5rJykuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdCQoJy5uYXZiYXJMYW5ndWFnZURlc2t0b3BTdWJNZW51JykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuXHRcdCQoXCIubmF2YmFyTGFuZ3VhZ2VEZXNrdG9wX19hcnJvd1wiKS50b2dnbGVDbGFzcygndXBBcnJvdycpO1xyXG5cdFx0JCgnLm5hdmJhck5hdlN1Yk1lbnUnKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XHJcblx0fSk7XHJcblxyXG5cdCQoJ2h0bWwnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHQkKCcubmF2YmFyTGFuZ3VhZ2VEZXNrdG9wU3ViTWVudScpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcclxuXHRcdCQoXCIubmF2YmFyTGFuZ3VhZ2VEZXNrdG9wX19hcnJvd1wiKS5yZW1vdmVDbGFzcygndXBBcnJvdycpO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcbiJdLCJmaWxlIjoiY29tcG9uZW50cy9uYXZiYXIuanMifQ==
