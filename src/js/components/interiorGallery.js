$(function () {
		let $grid = $('.interiorGallery__masonry').imagesLoaded(function () {
			// init Masonry after all images have loaded
			$grid.masonry({
				// options
				itemSelector: '.interiorGallery__item',
				columnWidth: '.grid-sizer',
				gutter: '.gutter-sizer ',
				percentPosition: true,
				horizontalOrder: true
			});
		});
});