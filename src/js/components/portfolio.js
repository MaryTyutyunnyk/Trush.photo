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
			responsiveClass:true,
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

	$window.resize(function() {
		if($window.width() < 960){
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
			responsiveClass:true,
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

	$window.resize(function() {
		if($window.width() < 960){
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

// Portfolio function for switching between two blocks - portfolioBlockImage and portfolioBlockCatalogue

$(function () {
	$("#portfolioImageBtn").on('click', function () {
		$(".portfolioBlockImage").css({"display": "none"});
		$(".portfolioBlockCatalogue").css({"display": "flex"});
	});

	$("#portfolioCatalogueBtn").on('click', function () {
		$(".portfolioBlockCatalogue").css({"display": "none"});
		$(".portfolioBlockImage").css({"display": "flex"});
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

let amount = $(".modalCarouselList > li").length; // Define amount of items
let curr = 0; // Define index of active item
$(".modalCarouselList li:eq(" + curr + ")").fadeIn(); // Show item with index 0 (first element)

$(function () {
	$(".modalCarousel__arrow_previous").on('click', function () {
		$(".modalCarouselList li:eq(" + curr + ")").fadeOut(100); // Hide item with index 0 (first element)
		// If items index - 1 less than 0, then back to the last item.
		// In other case subtract to the previous item
		if (curr - 1 < 0) {
			curr = amount - 1;
		} else curr--;
		$(".modalCarouselList li:eq(" + curr + ")").delay(100).fadeIn(100); // Show item with index 0 (first element)
	});

	$(".modalCarousel__arrow_next").on('click', function () {
		$(".modalCarouselList li:eq(" + curr + ")").fadeOut(100); // Hide item with index 0 (first element)
		// If items index + 1 more than list length, then back to to the first item.
		// In other case subtract to the next item
		if (curr + 1 >= amount) {
			curr = 0;
		} else curr++;

		$(".modalCarouselList li:eq(" + curr + ")").delay(100).fadeIn(100); // Show item with index 0 (first element)
	});
});

