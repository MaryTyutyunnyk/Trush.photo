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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2ludGVyaW9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG5cdGxldCAkZ3JpZCA9ICQoJy5pbnRlcmlvcl9fbWFzb25yeScpLmltYWdlc0xvYWRlZChmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBpbml0IE1hc29ucnkgYWZ0ZXIgYWxsIGltYWdlcyBoYXZlIGxvYWRlZFxyXG5cdFx0JGdyaWQubWFzb25yeSh7XHJcblx0XHRcdC8vIG9wdGlvbnNcclxuXHRcdFx0aXRlbVNlbGVjdG9yOiAnLmludGVyaW9yX19pdGVtJyxcclxuXHRcdFx0Y29sdW1uV2lkdGg6ICcuZ3JpZC1zaXplcicsXHJcblx0XHRcdGd1dHRlcjogJy5ndXR0ZXItc2l6ZXIgJyxcclxuXHRcdFx0cGVyY2VudFBvc2l0aW9uOiB0cnVlLFxyXG5cdFx0XHRob3Jpem9udGFsT3JkZXI6IHRydWUsXHJcblx0XHRcdGlzUmVzaXplQm91bmQ6IHRydWVcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHRsZXQgaW50ZXJpb3JCdXR0b24gPSAkKFwiLmludGVyaW9yX19idG5cIik7XHJcblx0bGV0IGJ1YmJsZXNBbmltYXRpb24gPSAkKFwiLmludGVyaW9yX19idWJibGVzXCIpO1xyXG5cclxuXHRpbnRlcmlvckJ1dHRvbi5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHRidWJibGVzQW5pbWF0aW9uLmNzcyhcImRpc3BsYXlcIiwgXCJmbGV4XCIpOyAvLyBhbmltYXRpb24gc2hvd2luZ1xyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGJ1YmJsZXNBbmltYXRpb24uZmFkZU91dCgzMDApOyAvLyBhbmltYXRpb24gaGlkaW5nIGFmdGVyIDJzIGFuZCB3aXRoIHRoZSBkZWxheSAtIDMwMG1zXHJcblx0XHR9LCAyMDAwKTtcclxuXHR9KTtcclxufSk7Il0sImZpbGUiOiJjb21wb25lbnRzL2ludGVyaW9yLmpzIn0=
