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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2ludGVyaW9yR2FsbGVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcclxuXHRcdGxldCAkZ3JpZCA9ICQoJy5pbnRlcmlvckdhbGxlcnlfX21hc29ucnknKS5pbWFnZXNMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQvLyBpbml0IE1hc29ucnkgYWZ0ZXIgYWxsIGltYWdlcyBoYXZlIGxvYWRlZFxyXG5cdFx0XHQkZ3JpZC5tYXNvbnJ5KHtcclxuXHRcdFx0XHQvLyBvcHRpb25zXHJcblx0XHRcdFx0aXRlbVNlbGVjdG9yOiAnLmludGVyaW9yR2FsbGVyeV9faXRlbScsXHJcblx0XHRcdFx0Y29sdW1uV2lkdGg6ICcuZ3JpZC1zaXplcicsXHJcblx0XHRcdFx0Z3V0dGVyOiAnLmd1dHRlci1zaXplciAnLFxyXG5cdFx0XHRcdHBlcmNlbnRQb3NpdGlvbjogdHJ1ZSxcclxuXHRcdFx0XHRob3Jpem9udGFsT3JkZXI6IHRydWVcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxufSk7Il0sImZpbGUiOiJjb21wb25lbnRzL2ludGVyaW9yR2FsbGVyeS5qcyJ9
