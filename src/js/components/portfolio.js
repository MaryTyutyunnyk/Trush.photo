// portfolioCarousel function for portfolioBlockImage

$(function () {
	$(document).on('click', "#previous_arrow", function () {
		let carusel = $(this).parents(".portfolioBlockImage");
		leftCarusel(carusel);
		return false;
	});

	$(document).on('click', "#next_arrow", function () {
		let carusel = $(this).parents(".portfolioBlockImage");
		rightCarusel(carusel);
		return false;
	});

	function leftCarusel(carusel) {
		let blockWidth = $(carusel).find(".portfolioCarouselListItem").outerWidth();
		const newElement = $(carusel)
			.find(".portfolioCarouselList .portfolioCarouselListItem")
			.eq(-1)
			.clone();
		console.log('leftCarusel');
		addListeners(newElement);
		newElement.prependTo($(carusel).find(".portfolioCarouselList"));

		$(carusel).find(".portfolioCarouselList").css({"left": "-" + blockWidth + "px"});
		$(carusel).find(".portfolioCarouselList .portfolioCarouselListItem").eq(-1).remove();
		$(carusel).find(".portfolioCarouselList").animate({left: "0px"}, 300);
	}

	function rightCarusel(carusel) {
		console.log('rightCarusel');

		let blockWidth = $(carusel).find(".portfolioCarouselListItem").outerWidth();
		$(carusel).find(".portfolioCarouselList")
			.animate({left: "-" + blockWidth + "px"},
			300,
			function () {
				$(carusel).find(".portfolioCarouselList .portfolioCarouselListItem")
					.eq(0)
					.clone()
					.appendTo($(carusel).find(".portfolioCarouselList"));
				$(carusel).find(".portfolioCarouselList .portfolioCarouselListItem")
					.eq(0)
					.remove();
				$(carusel).find(".portfolioCarouselList")
					.css({"left": "0px"});
			});
		}
});


// portfolioCarousel function for portfolioBlockCatalogue

$(function () {
	$(document).on('click', "#left_arrow", function () {
		let carusel = $(this).parents(".portfolioBlockCatalogue");
		left_carusel(carusel);
		return false;
	});

	$(document).on('click', "#right_arrow", function () {
		let carusel = $(this).parents(".portfolioBlockCatalogue");
		right_carusel(carusel);
		return false;
	});

	function left_carusel(carusel) {
		let block_width = $(carusel).find(".portfolioCarouselListItem").outerWidth();
		$(carusel).find(".portfolioCarouselList .portfolioCarouselListItem").eq(-1).clone().prependTo($(carusel).find(".portfolioCarouselList"));
		$(carusel).find(".portfolioCarouselList").css({"left": "-" + block_width + "px"});
		$(carusel).find(".portfolioCarouselList .portfolioCarouselListItem").eq(-1).remove();
		$(carusel).find(".portfolioCarouselList").animate({left: "0px"}, 300);
	}

	function right_carusel(carusel) {
		let block_width = $(carusel).find(".portfolioCarouselListItem").outerWidth();
		$(carusel).find(".portfolioCarouselList").animate({left: "-" + block_width + "px"}, 300, function () {
			$(carusel).find(".portfolioCarouselList .portfolioCarouselListItem").eq(0).clone().appendTo($(carusel).find(".portfolioCarouselList"));
			$(carusel).find(".portfolioCarouselList .portfolioCarouselListItem").eq(0).remove();
			$(carusel).find(".portfolioCarouselList").css({"left": "0px"});
		});
	}
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
// $(".portfolioCarouselListItem__imgBox").on('click', function () {
// 	$(".modal").css({"display": "block"});
// });
const imgBox = $(".portfolioCarouselListItem__imgBox");
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

