$("#homePageSliderList").owlCarousel({
	items: 1,
	loop: true,
	//autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	animateOut: 'slideOutUp',
	animateIn: 'slideInUp',
	mouseDrag: true,
	touchDrag: false,
	pullDrag: false,
	freeDrag: false,
	responsiveClass:true,
	responsive: {
		0: {
			mouseDrag: false,
			touchDrag: true
		},
		960: {
			mouseDrag: true,
			touchDrag: false
		},
	}
});