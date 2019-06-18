$(function () {

// portfolioBlockImage carousel initiation
	let carouselListImageInitiated = false;
	const prevArrow = $('#previous_arrow');
	const nextArrow = $('#next_arrow');
	const owlCarouselListImage = $('#carouselListImage');
	const $window = $(window);

	const initCarouselListImage = () => {
		owlCarouselListImage.owlCarousel({
			autoWidth: true,
			loop: true,
			dots: false,
			responsiveClass: true,
			responsive: {
				0: {
					loop: false,
				},
				960: {
					loop: true,
				},
			}
		});
		prevArrow.click(function () {
			owlCarouselListImage.trigger('prev.owl.carousel');
		});
		nextArrow.click(function () {
			owlCarouselListImage.trigger('next.owl.carousel');
		});
		owlCarouselListImage.on('changed.owl.carousel', function (event) {
			const {item: {count, index}} = event;
			if (index === 0) {
				prevArrow.hide();
			} else {
				prevArrow.show();
			}
		});
		carouselListImageInitiated = true;
	};
	initCarouselListImage();

// Remove portfolioBlockImage carousel on mobile devices

	$window.resize(function () {
		if ($window.width() < 960) {
			if (carouselListImageInitiated) {
				owlCarouselListImage.trigger('destroy.owl.carousel');
				carouselListImageInitiated = false;
			}
		} else {
			if (!carouselListImageInitiated) {
				initCarouselListImage();
			}
		}
	});


// portfolioBlockCatalogue carousel initiation
	let carouselListCatalogueInitiated = false;
	const prevArrow2 = $('#left_arrow');
	const nextArrow2 = $('#right_arrow');
	const owlCarouselListCatalogue = $('#carouselListCatalogue');

	const initCarouselListCatalogue = () => {
		owlCarouselListCatalogue.owlCarousel({
			autoWidth: true,
			loop: true,
			dots: false,
			responsiveClass: true,
			responsive: {
				0: {
					loop: false,
				},
				960: {
					loop: true,
				},
			}
		});
		prevArrow2.click(function () {
			owlCarouselListCatalogue.trigger('prev.owl.carousel');
		});
		nextArrow2.click(function () {
			owlCarouselListCatalogue.trigger('next.owl.carousel');
		});
		owlCarouselListCatalogue.on('changed.owl.carousel', function (event) {
			const {item: {count, index}} = event;
			if (index === 0) {
				prevArrow2.hide();
			} else {
				prevArrow2.show();
			}
		});
		carouselListCatalogueInitiated = true;
	};
	initCarouselListCatalogue();

// Remove PortfolioBlockCatalogue on mobile devices

	$window.resize(function () {
		if ($window.width() < 960) {
			if (carouselListCatalogueInitiated) {
				owlCarouselListCatalogue.trigger('destroy.owl.carousel');
				carouselListCatalogueInitiated = false;
			}
		} else {
			if (!carouselListCatalogueInitiated) {
				initCarouselListCatalogue();
			}
		}
	});


// Function for modal window

	const addListeners = element => {
		element.on('click', function () {
			$(".modal").css({"display": "block"});
			$.ajax({
				type: "GET",
				url: "http://mysite.ru/action.php?resid=`${data.id}`",
				data: {
					id: $(this).id
				},
				error: function (data, textStatus) {

				},
				success: function (data, textStatus) {

				},
				complete: function () {

				}
			});
		});
	};
	const imgBox = $(".carouselItem__imgBox");
	addListeners(imgBox);


	$(".modal__crossBlock").on('click', function () {
		$(".modal").css({"display": "none"});
	});


// Function for modalCarousel

	const modalArrowPrevious = $('#modalArrowPrevious');
	const modalArrowNext = $('#modalArrowNext');
	const owlModalCarousel = $('#modalCarouselList');
	owlModalCarousel.owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		freeDrag: false,
		responsiveClass: true,
		responsive: {
			0: {
				touchDrag: true,
			},
			960: {
				touchDrag: false,
			},
		}
	});
	modalArrowPrevious.click(function () {
		owlModalCarousel.trigger('prev.owl.carousel');
	});
	modalArrowNext.click(function () {
		owlModalCarousel.trigger('next.owl.carousel');
	});
});




