$(function () {
		let $grid = $('.interior__masonry').imagesLoaded(function () {
			// init Masonry after all images have loaded
			$grid.masonry({
				// options
				itemSelector: '.interior__item',
				columnWidth: '.grid-sizer',
				gutter: '.gutter-sizer ',
				percentPosition: true,
				horizontalOrder: true
			});
		});


	let interiorButton = $(".interior__btn");
	let bubblesAnimation = $(".interior__bubbles");
	let hideImages = $(".interior__item.hide");

	interiorButton.click(function () {
		interiorButton.hide(); // button hiding
		bubblesAnimation.css("display", "flex"); // animation showing
		setTimeout(function () {
			bubblesAnimation.fadeOut(300); // animation hiding after 2s and with the delay - 300ms
		}, 2000);

		setTimeout(function(){
			hideImages.removeClass("hide")
		}, 2000);
	});
});