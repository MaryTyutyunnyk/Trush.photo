$(function () {
	// portfolioBlockImage carousel initiation
	let carouselListImageInitiated = false;
	const prevArrow = $('#previous_arrow');
	const nextArrow = $('#next_arrow');
	const owl = $('#carouselListImage');
	const $window = $(window);

	const initCarouselListImage = () => {
		owl.owlCarousel({
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
			owl.trigger('prev.owl.carousel');
		});
		nextArrow.click(function () {
			owl.trigger('next.owl.carousel');
		});
		owl.on('changed.owl.carousel', function (event) {
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
				owl.trigger('destroy.owl.carousel');
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
	const owl2 = $('#carouselListCatalogue');

	const initCarouselListCatalogue = () => {
		owl2.owlCarousel({
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
			owl2.trigger('prev.owl.carousel');
		});
		nextArrow2.click(function () {
			owl2.trigger('next.owl.carousel');
		});
		owl2.on('changed.owl.carousel', function (event) {
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
				owl2.trigger('destroy.owl.carousel');
				carouselListCatalogueInitiated = false;
			}
		} else {
			if (!carouselListCatalogueInitiated) {
				initCarouselListCatalogue();
			}
		}
	});
});

// Function for modal window

const addListeners = element => {
	element.on('click', function () {
		$(".modal").css({"display": "block"});
	});
};
const imgBox = $(".carouselItem__imgBox");
addListeners(imgBox);

$(function () {
	$(".modal__crossBlock").on('click', function () {
		$(".modal").css({"display": "none"});
	});
});


// Function for modalCarousel
$(function () {
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


