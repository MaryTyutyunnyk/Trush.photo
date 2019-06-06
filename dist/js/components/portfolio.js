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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BvcnRmb2xpby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcclxuXHQvLyBwb3J0Zm9saW9CbG9ja0ltYWdlIGNhcm91c2VsIGluaXRpYXRpb25cclxuXHRsZXQgY2Fyb3VzZWxMaXN0SW1hZ2VJbml0aWF0ZWQgPSBmYWxzZTtcclxuXHRjb25zdCBwcmV2QXJyb3cgPSAkKCcjcHJldmlvdXNfYXJyb3cnKTtcclxuXHRjb25zdCBuZXh0QXJyb3cgPSAkKCcjbmV4dF9hcnJvdycpO1xyXG5cdGNvbnN0IG93bCA9ICQoJyNjYXJvdXNlbExpc3RJbWFnZScpO1xyXG5cdGNvbnN0ICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcblxyXG5cdGNvbnN0IGluaXRDYXJvdXNlbExpc3RJbWFnZSA9ICgpID0+IHtcclxuXHRcdG93bC5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdGF1dG9XaWR0aDogdHJ1ZSxcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0ZG90czogZmFsc2UsXHJcblx0XHRcdHJlc3BvbnNpdmVDbGFzczp0cnVlLFxyXG5cdFx0XHRyZXNwb25zaXZlOiB7XHJcblx0XHRcdFx0MDoge1xyXG5cdFx0XHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ5NjA6IHtcclxuXHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRwcmV2QXJyb3cuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRvd2wudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnKTtcclxuXHRcdH0pO1xyXG5cdFx0bmV4dEFycm93LmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0b3dsLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XHJcblx0XHR9KTtcclxuXHRcdG93bC5vbignY2hhbmdlZC5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0Y29uc3Qge2l0ZW06IHtjb3VudCwgaW5kZXh9fSA9IGV2ZW50O1xyXG5cdFx0XHRpZiAoaW5kZXggPT09IDApIHtcclxuXHRcdFx0XHRwcmV2QXJyb3cuaGlkZSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHByZXZBcnJvdy5zaG93KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Y2Fyb3VzZWxMaXN0SW1hZ2VJbml0aWF0ZWQgPSB0cnVlO1xyXG5cdH07XHJcblx0aW5pdENhcm91c2VsTGlzdEltYWdlKCk7XHJcblxyXG5cdC8vIFJlbW92ZSBwb3J0Zm9saW9CbG9ja0ltYWdlIGNhcm91c2VsIG9uIG1vYmlsZSBkZXZpY2VzXHJcblxyXG5cdCR3aW5kb3cucmVzaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoJHdpbmRvdy53aWR0aCgpIDwgOTYwKXtcclxuXHRcdFx0aWYgKGNhcm91c2VsTGlzdEltYWdlSW5pdGlhdGVkKSB7XHJcblx0XHRcdFx0b3dsLnRyaWdnZXIoJ2Rlc3Ryb3kub3dsLmNhcm91c2VsJyk7XHJcblx0XHRcdFx0Y2Fyb3VzZWxMaXN0SW1hZ2VJbml0aWF0ZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKCFjYXJvdXNlbExpc3RJbWFnZUluaXRpYXRlZCkge1xyXG5cdFx0XHRcdGluaXRDYXJvdXNlbExpc3RJbWFnZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cclxuXHQvLyBwb3J0Zm9saW9CbG9ja0NhdGFsb2d1ZSBjYXJvdXNlbCBpbml0aWF0aW9uXHJcblx0bGV0IGNhcm91c2VsTGlzdENhdGFsb2d1ZUluaXRpYXRlZCA9IGZhbHNlO1xyXG5cdGNvbnN0IHByZXZBcnJvdzIgPSAkKCcjbGVmdF9hcnJvdycpO1xyXG5cdGNvbnN0IG5leHRBcnJvdzIgPSAkKCcjcmlnaHRfYXJyb3cnKTtcclxuXHRjb25zdCBvd2wyID0gJCgnI2Nhcm91c2VsTGlzdENhdGFsb2d1ZScpO1xyXG5cclxuXHRjb25zdCBpbml0Q2Fyb3VzZWxMaXN0Q2F0YWxvZ3VlID0gKCkgPT4ge1xyXG5cdFx0b3dsMi5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdGF1dG9XaWR0aDogdHJ1ZSxcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0ZG90czogZmFsc2UsXHJcblx0XHRcdHJlc3BvbnNpdmVDbGFzczp0cnVlLFxyXG5cdFx0XHRyZXNwb25zaXZlOiB7XHJcblx0XHRcdFx0MDoge1xyXG5cdFx0XHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ5NjA6IHtcclxuXHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRwcmV2QXJyb3cyLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0b3dsMi50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xyXG5cdFx0fSk7XHJcblx0XHRuZXh0QXJyb3cyLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0b3dsMi50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG5cdFx0fSk7XHJcblx0XHRvd2wyLm9uKCdjaGFuZ2VkLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRjb25zdCB7aXRlbToge2NvdW50LCBpbmRleH19ID0gZXZlbnQ7XHJcblx0XHRcdGlmIChpbmRleCA9PT0gMCkge1xyXG5cdFx0XHRcdHByZXZBcnJvdzIuaGlkZSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHByZXZBcnJvdzIuc2hvdygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGNhcm91c2VsTGlzdENhdGFsb2d1ZUluaXRpYXRlZCA9IHRydWU7XHJcblx0fTtcclxuXHRpbml0Q2Fyb3VzZWxMaXN0Q2F0YWxvZ3VlKCk7XHJcblxyXG5cdC8vIFJlbW92ZSBQb3J0Zm9saW9CbG9ja0NhdGFsb2d1ZSBvbiBtb2JpbGUgZGV2aWNlc1xyXG5cclxuXHQkd2luZG93LnJlc2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdGlmKCR3aW5kb3cud2lkdGgoKSA8IDk2MCl7XHJcblx0XHRcdGlmIChjYXJvdXNlbExpc3RDYXRhbG9ndWVJbml0aWF0ZWQpIHtcclxuXHRcdFx0XHRvd2wyLnRyaWdnZXIoJ2Rlc3Ryb3kub3dsLmNhcm91c2VsJyk7XHJcblx0XHRcdFx0Y2Fyb3VzZWxMaXN0Q2F0YWxvZ3VlSW5pdGlhdGVkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghY2Fyb3VzZWxMaXN0Q2F0YWxvZ3VlSW5pdGlhdGVkKSB7XHJcblx0XHRcdFx0aW5pdENhcm91c2VsTGlzdENhdGFsb2d1ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuLy8gRnVuY3Rpb24gZm9yIG1vZGFsIHdpbmRvd1xyXG5cclxuY29uc3QgYWRkTGlzdGVuZXJzID0gZWxlbWVudCA9PiB7XHJcblx0ZWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQkKFwiLm1vZGFsXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xyXG5cdH0pO1xyXG59O1xyXG5jb25zdCBpbWdCb3ggPSAkKFwiLmNhcm91c2VsSXRlbV9faW1nQm94XCIpO1xyXG5hZGRMaXN0ZW5lcnMoaW1nQm94KTtcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cdCQoXCIubW9kYWxfX2Nyb3NzQmxvY2tcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0JChcIi5tb2RhbFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcblxyXG4vLyBGdW5jdGlvbiBmb3IgbW9kYWxDYXJvdXNlbFxyXG5cclxubGV0IGFtb3VudCA9ICQoXCIubW9kYWxDYXJvdXNlbExpc3QgPiBsaVwiKS5sZW5ndGg7IC8vIERlZmluZSBhbW91bnQgb2YgaXRlbXNcclxubGV0IGN1cnIgPSAwOyAvLyBEZWZpbmUgaW5kZXggb2YgYWN0aXZlIGl0ZW1cclxuJChcIi5tb2RhbENhcm91c2VsTGlzdCBsaTplcShcIiArIGN1cnIgKyBcIilcIikuZmFkZUluKCk7IC8vIFNob3cgaXRlbSB3aXRoIGluZGV4IDAgKGZpcnN0IGVsZW1lbnQpXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHQkKFwiLm1vZGFsQ2Fyb3VzZWxfX2Fycm93X3ByZXZpb3VzXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoXCIubW9kYWxDYXJvdXNlbExpc3QgbGk6ZXEoXCIgKyBjdXJyICsgXCIpXCIpLmZhZGVPdXQoMTAwKTsgLy8gSGlkZSBpdGVtIHdpdGggaW5kZXggMCAoZmlyc3QgZWxlbWVudClcclxuXHRcdC8vIElmIGl0ZW1zIGluZGV4IC0gMSBsZXNzIHRoYW4gMCwgdGhlbiBiYWNrIHRvIHRoZSBsYXN0IGl0ZW0uXHJcblx0XHQvLyBJbiBvdGhlciBjYXNlIHN1YnRyYWN0IHRvIHRoZSBwcmV2aW91cyBpdGVtXHJcblx0XHRpZiAoY3VyciAtIDEgPCAwKSB7XHJcblx0XHRcdGN1cnIgPSBhbW91bnQgLSAxO1xyXG5cdFx0fSBlbHNlIGN1cnItLTtcclxuXHRcdCQoXCIubW9kYWxDYXJvdXNlbExpc3QgbGk6ZXEoXCIgKyBjdXJyICsgXCIpXCIpLmRlbGF5KDEwMCkuZmFkZUluKDEwMCk7IC8vIFNob3cgaXRlbSB3aXRoIGluZGV4IDAgKGZpcnN0IGVsZW1lbnQpXHJcblx0fSk7XHJcblxyXG5cdCQoXCIubW9kYWxDYXJvdXNlbF9fYXJyb3dfbmV4dFwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQkKFwiLm1vZGFsQ2Fyb3VzZWxMaXN0IGxpOmVxKFwiICsgY3VyciArIFwiKVwiKS5mYWRlT3V0KDEwMCk7IC8vIEhpZGUgaXRlbSB3aXRoIGluZGV4IDAgKGZpcnN0IGVsZW1lbnQpXHJcblx0XHQvLyBJZiBpdGVtcyBpbmRleCArIDEgbW9yZSB0aGFuIGxpc3QgbGVuZ3RoLCB0aGVuIGJhY2sgdG8gdG8gdGhlIGZpcnN0IGl0ZW0uXHJcblx0XHQvLyBJbiBvdGhlciBjYXNlIHN1YnRyYWN0IHRvIHRoZSBuZXh0IGl0ZW1cclxuXHRcdGlmIChjdXJyICsgMSA+PSBhbW91bnQpIHtcclxuXHRcdFx0Y3VyciA9IDA7XHJcblx0XHR9IGVsc2UgY3VycisrO1xyXG5cclxuXHRcdCQoXCIubW9kYWxDYXJvdXNlbExpc3QgbGk6ZXEoXCIgKyBjdXJyICsgXCIpXCIpLmRlbGF5KDEwMCkuZmFkZUluKDEwMCk7IC8vIFNob3cgaXRlbSB3aXRoIGluZGV4IDAgKGZpcnN0IGVsZW1lbnQpXHJcblx0fSk7XHJcbn0pO1xyXG5cclxuIl0sImZpbGUiOiJjb21wb25lbnRzL3BvcnRmb2xpby5qcyJ9
