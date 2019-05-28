$(function () {
	let owlInitiated = false;
	const prevArrow = $('#prev_arrow');
	const nextArrow = $('#next_arrow');
	const owl = $('#publicationsCarouselList');
	const $window = $(window);

	const initCarousel = () => {
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
		owlInitiated = true;
	};
	initCarousel();

	// Remove function on mobile devices

	$window.resize(function(){
		if($window.width() < 960){
			if (owlInitiated) {
				owl.trigger('destroy.owl.carousel');
				owlInitiated = false;
			}
		} else {
			if (!owlInitiated) {
				initCarousel();
			}
		}
	});

	// Filter function
	let publicationsLink = $(".publicationsBlockLinkBox__link");
	publicationsLink.click(function () {
		$(".publicationsBlockLinkBox__link.publicationsBlockLinkBox__link_active")
			.removeClass("publicationsBlockLinkBox__link_active");
		$(this).addClass("publicationsBlockLinkBox__link_active");

		const filter = $(this).data('filter'); // determines which tab is clicked
		owl.trigger('to.owl.carousel', [0, 0]);

		$(".owl-carousel .publicationsCarouselListItem").each(function () {
			// if the picture data attribute 'data-filter' match to the tab attribute 'data-attr' with value 'all', then all pictures are shown
			if (filter === 'all' || $(this).data('attr') === filter) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	});
});
