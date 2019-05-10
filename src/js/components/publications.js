// Filter function

$(function () {
	let publicationToShow = '';
	let publicationsLink = $(".publicationsBlockLinkBox__link");
	publicationsLink.click(function () {
		$(".publicationsBlockLinkBox__link.publicationsBlockLinkBox__link_active").removeClass("publicationsBlockLinkBox__link_active");
		$(this).addClass("publicationsBlockLinkBox__link_active");

		publicationToShow = $(this).attr("data-filter"); // determines which tab is clicked
		let filter = $(".publicationsCarouselListItem").attr("data-filter");
		// if the picture data attribute 'data-filter' match to the tab attribute 'data-filter' with value 'all', then all pictures are shown
		if (publicationToShow === "all") {
			filter.show();
		} else {
			// if the picture data attribute doesn't match to the tab attribute, then the picture is hidden
			filter.not(publicationToShow).hide();
			// if the picture data attribute match to the menu tab attribute, then the picture is shown
			filter.filter(publicationToShow).show();
		}
	});
});

// publicationsCarousel function

$(function () {
	$(document).on('click', "#previous_arrow", function () {
		let carusel = $(this).parents(".publicationsCarousel");
		leftCarusel(carusel);
		return false;
	});

	$(document).on('click', "#next_arrow", function () {
		let carusel = $(this).parents(".publicationsCarousel");
		rightCarusel(carusel);
		return false;
	});

	function leftCarusel(carusel) {
		let block_width = $(carusel).find(".publicationsCarouselListItem").outerWidth();
		$(carusel).find(".publicationsCarouselList .publicationsCarouselListItem").eq(-1).clone().prependTo($(carusel).find(".publicationsCarouselList"));
		$(carusel).find(".publicationsCarouselList").css({"left": "-" + block_width + "px"});
		$(carusel).find(".publicationsCarouselList .publicationsCarouselListItem").eq(-1).remove();
		$(carusel).find(".publicationsCarouselList").animate({left: "0px"}, 300);
	}

	function rightCarusel(carusel) {
		let block_width = $(carusel).find(".publicationsCarouselListItem").outerWidth();
		$(carusel).find(".publicationsCarouselList").animate({left: "-" + block_width + "px"}, 300, function () {
			$(carusel).find(".publicationsCarouselList .publicationsCarouselListItem").eq(0).clone().appendTo($(carusel).find(".publicationsCarouselList"));
			$(carusel).find(".publicationsCarouselList .publicationsCarouselListItem").eq(0).remove();
			$(carusel).find(".publicationsCarouselList").css({"left": "0px"});
		});
	}
});
