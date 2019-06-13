$(function () {

	let publicationsCarouselListInitiated = false;
	const prevArrow = $('#prev_arrow');
	const nextArrow = $('#next_arrow');
	const owlPublicationsCarouselList = $('#publicationsCarouselList');
	const $window = $(window);

	const initPublicationsCarouselList = () => {
		owlPublicationsCarouselList.owlCarousel({
			autoWidth: true,
			dots: false,
		});
		prevArrow.click(function () {
			owlPublicationsCarouselList.trigger('prev.owl.carousel');
		});
		nextArrow.click(function () {
			owlPublicationsCarouselList.trigger('next.owl.carousel');
		});
		owlPublicationsCarouselList.on('changed.owl.carousel', function (event) {
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

	$window.resize(function () {
		if ($window.width() < 960) {
			if (publicationsCarouselListInitiated) {
				owlPublicationsCarouselList.trigger('destroy.owl.carousel');
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
		owlPublicationsCarouselList.trigger('to.owl.carousel', [0, 0]);

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
