// $(function () {
// 	const prevArrow = $('#prev_arrow');
// 	const nextArrow = $('#next_arrow');
// 	const owl = $('#publicationsCarouselList');
// 	owl.owlCarousel({
// 		autoWidth: true,
// 		loop: true,
// 		items: 1,
// 	});
// 	prevArrow.click(function () {
// 		owl.trigger('prev.owl.carousel');
// 	});
// 	// Go to the previous item
// 	nextArrow.click(function () {
// 		// With optional speed parameter
// 		// Parameters has to be in square bracket '[]'
// 		owl.trigger('next.owl.carousel');
// 	});
// 	owl.on('changed.owl.carousel', function (event) {
// 		const {item: {count, index}} = event;
// 		// console.log(item, 'EVENT!!!');
// 		if (index === 0) {
// 			prevArrow.hide();
// 			$('.publicationsCarousel').removeClass('active');
// 		} else {
// 			prevArrow.show();
// 			$('.publicationsCarousel').addClass('active');
// 		}
// 	});
//
// 	// Filter function
// 	let publicationsLink = $(".publicationsBlockLinkBox__link");
// 	publicationsLink.click(function () {
// 		$(".publicationsBlockLinkBox__link.publicationsBlockLinkBox__link_active")
// 			.removeClass("publicationsBlockLinkBox__link_active");
// 		$(this).addClass("publicationsBlockLinkBox__link_active");
//
// 		const filter = $(this).data('filter'); // determines which tab is clicked
// 		// if the picture data attribute 'data-filter' match to the tab attribute 'data-filter' with value 'all', then all pictures are shown
// 		owl.trigger('to.owl.carousel', [0, 0]);
//
// 		$(".owl-carousel .publicationsCarouselListItem").each(function () {
// 			if (filter === 'all' || $(this).data('attr') === filter) {
// 				$(this).show();
// 			} else {
// 				$(this).hide();
// 			}
// 		});
// 	});
// });


$(function () {
	const prevArrow = $('#prev_arrow');
	const nextArrow = $('#next_arrow');
	$('#publicationsCarouselList').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: nextArrow,
		prevArrow: prevArrow,
		variableWidth: true,

		responsive: [
			{
				breakpoint: 959,
				settings: "unslick"
			},
		]
	});

	$('.your-element').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		console.log(nextSlide);
	});


	$('#publicationsCarouselList').on('afterChange', function (event) {
		const {item: {index}} = event;
		// console.log(item, 'EVENT!!!');
		if (index === 0) {
			prevArrow.hide();
			$('.publicationsCarousel').removeClass('active');
		} else {
			prevArrow.show();
			$('.publicationsCarousel').addClass('active');
		}
	});

	// Filter function
	let publicationsLink = $(".publicationsBlockLinkBox__link");
	publicationsLink.click(function () {
		$(".publicationsBlockLinkBox__link.publicationsBlockLinkBox__link_active")
			.removeClass("publicationsBlockLinkBox__link_active");
		$(this).addClass("publicationsBlockLinkBox__link_active");

		const filter = $(this).data('filter'); // determines which tab is clicked
		// if the picture data attribute 'data-filter' match to the tab attribute 'data-filter' with value 'all', then all pictures are shown
		//slick.trigger([0, 0]);

		$(".publicationsCarouselList .publicationsCarouselListItem").each(function () {
			if (filter === 'all' || $(this).data('attr') === filter) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	});
});
