$(function () {
	let publicationsCarouselListInitiated = false;
	const prevArrow = $('#prev_arrow');
	const nextArrow = $('#next_arrow');
	const owl = $('#publicationsCarouselList');
	const $window = $(window);

	const initPublicationsCarouselList = () => {
		owl.owlCarousel({
			autoWidth: true,
			dots: false,
		});
		prevArrow.click(function () {
			owl.trigger('prev.owl.carousel');
		});
		nextArrow.click(function () {
			owl.trigger('next.owl.carousel');
		});
		owl.on('changed.owl.carousel', function (event) {
			const {item: {count, index}} = event;
			if (index === 0) {
				prevArrow.hide();
				$('.publicationsCarousel').removeClass('active');
			} else {
				prevArrow.show();
				$('.publicationsCarousel').addClass('active');
			}
		});
		publicationsCarouselListInitiated = true;
	};
	initPublicationsCarouselList();

	// Remove function on mobile devices

	$window.resize(function(){
		if($window.width() < 960){
			if (publicationsCarouselListInitiated) {
				owl.trigger('destroy.owl.carousel');
				publicationsCarouselListInitiated = false;
			}
		} else {
			if (!publicationsCarouselListInitiated) {
				initPublicationsCarouselList();
			}
		}
	});

	// Filter function
	let publicationsFilterLink = $(".publicationsFilter__link");
	publicationsFilterLink.click(function () {
		$(".publicationsFilter__link.publicationsFilter__link_active")
			.removeClass("publicationsFilter__link_active");
		$(this).addClass("publicationsFilter__link_active");

		const filter = $(this).data('filter'); // determines which tab is clicked
		owl.trigger('to.owl.carousel', [0, 0]);

		$(".owl-carousel .publicationsCarouselItem").each(function () {
			// if the picture data attribute 'data-filter' match to the tab attribute 'data-attr' with value 'all', then all pictures are shown
			if (filter === 'all' || $(this).data('attr') === filter) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	});
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL3B1YmxpY2F0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcclxuXHRsZXQgcHVibGljYXRpb25zQ2Fyb3VzZWxMaXN0SW5pdGlhdGVkID0gZmFsc2U7XHJcblx0Y29uc3QgcHJldkFycm93ID0gJCgnI3ByZXZfYXJyb3cnKTtcclxuXHRjb25zdCBuZXh0QXJyb3cgPSAkKCcjbmV4dF9hcnJvdycpO1xyXG5cdGNvbnN0IG93bCA9ICQoJyNwdWJsaWNhdGlvbnNDYXJvdXNlbExpc3QnKTtcclxuXHRjb25zdCAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG5cclxuXHRjb25zdCBpbml0UHVibGljYXRpb25zQ2Fyb3VzZWxMaXN0ID0gKCkgPT4ge1xyXG5cdFx0b3dsLm93bENhcm91c2VsKHtcclxuXHRcdFx0YXV0b1dpZHRoOiB0cnVlLFxyXG5cdFx0XHRkb3RzOiBmYWxzZSxcclxuXHRcdH0pO1xyXG5cdFx0cHJldkFycm93LmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0b3dsLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XHJcblx0XHR9KTtcclxuXHRcdG5leHRBcnJvdy5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHRcdG93bC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG5cdFx0fSk7XHJcblx0XHRvd2wub24oJ2NoYW5nZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdGNvbnN0IHtpdGVtOiB7Y291bnQsIGluZGV4fX0gPSBldmVudDtcclxuXHRcdFx0aWYgKGluZGV4ID09PSAwKSB7XHJcblx0XHRcdFx0cHJldkFycm93LmhpZGUoKTtcclxuXHRcdFx0XHQkKCcucHVibGljYXRpb25zQ2Fyb3VzZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cHJldkFycm93LnNob3coKTtcclxuXHRcdFx0XHQkKCcucHVibGljYXRpb25zQ2Fyb3VzZWwnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cHVibGljYXRpb25zQ2Fyb3VzZWxMaXN0SW5pdGlhdGVkID0gdHJ1ZTtcclxuXHR9O1xyXG5cdGluaXRQdWJsaWNhdGlvbnNDYXJvdXNlbExpc3QoKTtcclxuXHJcblx0Ly8gUmVtb3ZlIGZ1bmN0aW9uIG9uIG1vYmlsZSBkZXZpY2VzXHJcblxyXG5cdCR3aW5kb3cucmVzaXplKGZ1bmN0aW9uKCl7XHJcblx0XHRpZigkd2luZG93LndpZHRoKCkgPCA5NjApe1xyXG5cdFx0XHRpZiAocHVibGljYXRpb25zQ2Fyb3VzZWxMaXN0SW5pdGlhdGVkKSB7XHJcblx0XHRcdFx0b3dsLnRyaWdnZXIoJ2Rlc3Ryb3kub3dsLmNhcm91c2VsJyk7XHJcblx0XHRcdFx0cHVibGljYXRpb25zQ2Fyb3VzZWxMaXN0SW5pdGlhdGVkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghcHVibGljYXRpb25zQ2Fyb3VzZWxMaXN0SW5pdGlhdGVkKSB7XHJcblx0XHRcdFx0aW5pdFB1YmxpY2F0aW9uc0Nhcm91c2VsTGlzdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vIEZpbHRlciBmdW5jdGlvblxyXG5cdGxldCBwdWJsaWNhdGlvbnNGaWx0ZXJMaW5rID0gJChcIi5wdWJsaWNhdGlvbnNGaWx0ZXJfX2xpbmtcIik7XHJcblx0cHVibGljYXRpb25zRmlsdGVyTGluay5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHQkKFwiLnB1YmxpY2F0aW9uc0ZpbHRlcl9fbGluay5wdWJsaWNhdGlvbnNGaWx0ZXJfX2xpbmtfYWN0aXZlXCIpXHJcblx0XHRcdC5yZW1vdmVDbGFzcyhcInB1YmxpY2F0aW9uc0ZpbHRlcl9fbGlua19hY3RpdmVcIik7XHJcblx0XHQkKHRoaXMpLmFkZENsYXNzKFwicHVibGljYXRpb25zRmlsdGVyX19saW5rX2FjdGl2ZVwiKTtcclxuXHJcblx0XHRjb25zdCBmaWx0ZXIgPSAkKHRoaXMpLmRhdGEoJ2ZpbHRlcicpOyAvLyBkZXRlcm1pbmVzIHdoaWNoIHRhYiBpcyBjbGlja2VkXHJcblx0XHRvd2wudHJpZ2dlcigndG8ub3dsLmNhcm91c2VsJywgWzAsIDBdKTtcclxuXHJcblx0XHQkKFwiLm93bC1jYXJvdXNlbCAucHVibGljYXRpb25zQ2Fyb3VzZWxJdGVtXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQvLyBpZiB0aGUgcGljdHVyZSBkYXRhIGF0dHJpYnV0ZSAnZGF0YS1maWx0ZXInIG1hdGNoIHRvIHRoZSB0YWIgYXR0cmlidXRlICdkYXRhLWF0dHInIHdpdGggdmFsdWUgJ2FsbCcsIHRoZW4gYWxsIHBpY3R1cmVzIGFyZSBzaG93blxyXG5cdFx0XHRpZiAoZmlsdGVyID09PSAnYWxsJyB8fCAkKHRoaXMpLmRhdGEoJ2F0dHInKSA9PT0gZmlsdGVyKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5zaG93KCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCh0aGlzKS5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59KTtcclxuIl0sImZpbGUiOiJjb21wb25lbnRzL3B1YmxpY2F0aW9ucy5qcyJ9
