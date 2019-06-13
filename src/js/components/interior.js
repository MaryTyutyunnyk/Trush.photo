$(function () {

	let $grid = $('.interior__masonry').imagesLoaded(function () {
		// init Masonry after all images have loaded
		$grid.masonry({
			// options
			itemSelector: '.interior__item',
			columnWidth: '.grid-sizer',
			gutter: '.gutter-sizer ',
			percentPosition: true,
			horizontalOrder: true,
			isResizeBound: true
		});
	});

	let interiorButton = $(".interior__btn");
	let bubblesAnimation = $(".interior__bubbles");

	interiorButton.click(function () {
		bubblesAnimation.css("display", "flex"); // animation showing
		setTimeout(function () {
			bubblesAnimation.fadeOut(300); // animation hiding after 2s and with the delay - 300ms
		}, 2000);
	});
});