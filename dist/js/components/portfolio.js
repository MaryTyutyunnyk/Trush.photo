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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BvcnRmb2xpby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcclxuXHQvLyBwb3J0Zm9saW9CbG9ja0ltYWdlIGNhcm91c2VsIGluaXRpYXRpb25cclxuXHRsZXQgY2Fyb3VzZWxMaXN0SW1hZ2VJbml0aWF0ZWQgPSBmYWxzZTtcclxuXHRjb25zdCBwcmV2QXJyb3cgPSAkKCcjcHJldmlvdXNfYXJyb3cnKTtcclxuXHRjb25zdCBuZXh0QXJyb3cgPSAkKCcjbmV4dF9hcnJvdycpO1xyXG5cdGNvbnN0IG93bCA9ICQoJyNjYXJvdXNlbExpc3RJbWFnZScpO1xyXG5cdGNvbnN0ICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcblxyXG5cdGNvbnN0IGluaXRDYXJvdXNlbExpc3RJbWFnZSA9ICgpID0+IHtcclxuXHRcdG93bC5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdGF1dG9XaWR0aDogdHJ1ZSxcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0ZG90czogZmFsc2UsXHJcblx0XHRcdHJlc3BvbnNpdmVDbGFzczp0cnVlLFxyXG5cdFx0XHRyZXNwb25zaXZlOiB7XHJcblx0XHRcdFx0MDoge1xyXG5cdFx0XHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ5NjA6IHtcclxuXHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRwcmV2QXJyb3cuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRvd2wudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnKTtcclxuXHRcdH0pO1xyXG5cdFx0bmV4dEFycm93LmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0b3dsLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XHJcblx0XHR9KTtcclxuXHRcdG93bC5vbignY2hhbmdlZC5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0Y29uc3Qge2l0ZW06IHtjb3VudCwgaW5kZXh9fSA9IGV2ZW50O1xyXG5cdFx0XHRpZiAoaW5kZXggPT09IDApIHtcclxuXHRcdFx0XHRwcmV2QXJyb3cuaGlkZSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHByZXZBcnJvdy5zaG93KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Y2Fyb3VzZWxMaXN0SW1hZ2VJbml0aWF0ZWQgPSB0cnVlO1xyXG5cdH07XHJcblx0aW5pdENhcm91c2VsTGlzdEltYWdlKCk7XHJcblxyXG5cdC8vIFJlbW92ZSBwb3J0Zm9saW9CbG9ja0ltYWdlIGNhcm91c2VsIG9uIG1vYmlsZSBkZXZpY2VzXHJcblxyXG5cdCR3aW5kb3cucmVzaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoJHdpbmRvdy53aWR0aCgpIDwgOTYwKXtcclxuXHRcdFx0aWYgKGNhcm91c2VsTGlzdEltYWdlSW5pdGlhdGVkKSB7XHJcblx0XHRcdFx0b3dsLnRyaWdnZXIoJ2Rlc3Ryb3kub3dsLmNhcm91c2VsJyk7XHJcblx0XHRcdFx0Y2Fyb3VzZWxMaXN0SW1hZ2VJbml0aWF0ZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKCFjYXJvdXNlbExpc3RJbWFnZUluaXRpYXRlZCkge1xyXG5cdFx0XHRcdGluaXRDYXJvdXNlbExpc3RJbWFnZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cclxuXHQvLyBwb3J0Zm9saW9CbG9ja0NhdGFsb2d1ZSBjYXJvdXNlbCBpbml0aWF0aW9uXHJcblx0bGV0IGNhcm91c2VsTGlzdENhdGFsb2d1ZUluaXRpYXRlZCA9IGZhbHNlO1xyXG5cdGNvbnN0IHByZXZBcnJvdzIgPSAkKCcjbGVmdF9hcnJvdycpO1xyXG5cdGNvbnN0IG5leHRBcnJvdzIgPSAkKCcjcmlnaHRfYXJyb3cnKTtcclxuXHRjb25zdCBvd2wyID0gJCgnI2Nhcm91c2VsTGlzdENhdGFsb2d1ZScpO1xyXG5cclxuXHRjb25zdCBpbml0Q2Fyb3VzZWxMaXN0Q2F0YWxvZ3VlID0gKCkgPT4ge1xyXG5cdFx0b3dsMi5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdGF1dG9XaWR0aDogdHJ1ZSxcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0ZG90czogZmFsc2UsXHJcblx0XHRcdHJlc3BvbnNpdmVDbGFzczp0cnVlLFxyXG5cdFx0XHRyZXNwb25zaXZlOiB7XHJcblx0XHRcdFx0MDoge1xyXG5cdFx0XHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ5NjA6IHtcclxuXHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRwcmV2QXJyb3cyLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0b3dsMi50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xyXG5cdFx0fSk7XHJcblx0XHRuZXh0QXJyb3cyLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0b3dsMi50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG5cdFx0fSk7XHJcblx0XHRvd2wyLm9uKCdjaGFuZ2VkLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRjb25zdCB7aXRlbToge2NvdW50LCBpbmRleH19ID0gZXZlbnQ7XHJcblx0XHRcdGlmIChpbmRleCA9PT0gMCkge1xyXG5cdFx0XHRcdHByZXZBcnJvdzIuaGlkZSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHByZXZBcnJvdzIuc2hvdygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGNhcm91c2VsTGlzdENhdGFsb2d1ZUluaXRpYXRlZCA9IHRydWU7XHJcblx0fTtcclxuXHRpbml0Q2Fyb3VzZWxMaXN0Q2F0YWxvZ3VlKCk7XHJcblxyXG5cdC8vIFJlbW92ZSBQb3J0Zm9saW9CbG9ja0NhdGFsb2d1ZSBvbiBtb2JpbGUgZGV2aWNlc1xyXG5cclxuXHQkd2luZG93LnJlc2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdGlmKCR3aW5kb3cud2lkdGgoKSA8IDk2MCl7XHJcblx0XHRcdGlmIChjYXJvdXNlbExpc3RDYXRhbG9ndWVJbml0aWF0ZWQpIHtcclxuXHRcdFx0XHRvd2wyLnRyaWdnZXIoJ2Rlc3Ryb3kub3dsLmNhcm91c2VsJyk7XHJcblx0XHRcdFx0Y2Fyb3VzZWxMaXN0Q2F0YWxvZ3VlSW5pdGlhdGVkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghY2Fyb3VzZWxMaXN0Q2F0YWxvZ3VlSW5pdGlhdGVkKSB7XHJcblx0XHRcdFx0aW5pdENhcm91c2VsTGlzdENhdGFsb2d1ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuLy8gUG9ydGZvbGlvIGZ1bmN0aW9uIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiB0d28gYmxvY2tzIC0gcG9ydGZvbGlvQmxvY2tJbWFnZSBhbmQgcG9ydGZvbGlvQmxvY2tDYXRhbG9ndWVcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cdCQoXCIjcG9ydGZvbGlvSW1hZ2VCdG5cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0JChcIi5wb3J0Zm9saW9CbG9ja0ltYWdlXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XHJcblx0XHQkKFwiLnBvcnRmb2xpb0Jsb2NrQ2F0YWxvZ3VlXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiZmxleFwifSk7XHJcblx0fSk7XHJcblxyXG5cdCQoXCIjcG9ydGZvbGlvQ2F0YWxvZ3VlQnRuXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoXCIucG9ydGZvbGlvQmxvY2tDYXRhbG9ndWVcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcclxuXHRcdCQoXCIucG9ydGZvbGlvQmxvY2tJbWFnZVwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImZsZXhcIn0pO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcbi8vIEZ1bmN0aW9uIGZvciBtb2RhbCB3aW5kb3dcclxuXHJcbmNvbnN0IGFkZExpc3RlbmVycyA9IGVsZW1lbnQgPT4ge1xyXG5cdGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0JChcIi5tb2RhbFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcclxuXHR9KTtcclxufTtcclxuY29uc3QgaW1nQm94ID0gJChcIi5jYXJvdXNlbEl0ZW1fX2ltZ0JveFwiKTtcclxuYWRkTGlzdGVuZXJzKGltZ0JveCk7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHQkKFwiLm1vZGFsX19jcm9zc0Jsb2NrXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoXCIubW9kYWxcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcclxuXHR9KTtcclxufSk7XHJcblxyXG5cclxuLy8gRnVuY3Rpb24gZm9yIG1vZGFsQ2Fyb3VzZWxcclxuXHJcbmxldCBhbW91bnQgPSAkKFwiLm1vZGFsQ2Fyb3VzZWxMaXN0ID4gbGlcIikubGVuZ3RoOyAvLyBEZWZpbmUgYW1vdW50IG9mIGl0ZW1zXHJcbmxldCBjdXJyID0gMDsgLy8gRGVmaW5lIGluZGV4IG9mIGFjdGl2ZSBpdGVtXHJcbiQoXCIubW9kYWxDYXJvdXNlbExpc3QgbGk6ZXEoXCIgKyBjdXJyICsgXCIpXCIpLmZhZGVJbigpOyAvLyBTaG93IGl0ZW0gd2l0aCBpbmRleCAwIChmaXJzdCBlbGVtZW50KVxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblx0JChcIi5tb2RhbENhcm91c2VsX19hcnJvd19wcmV2aW91c1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQkKFwiLm1vZGFsQ2Fyb3VzZWxMaXN0IGxpOmVxKFwiICsgY3VyciArIFwiKVwiKS5mYWRlT3V0KDEwMCk7IC8vIEhpZGUgaXRlbSB3aXRoIGluZGV4IDAgKGZpcnN0IGVsZW1lbnQpXHJcblx0XHQvLyBJZiBpdGVtcyBpbmRleCAtIDEgbGVzcyB0aGFuIDAsIHRoZW4gYmFjayB0byB0aGUgbGFzdCBpdGVtLlxyXG5cdFx0Ly8gSW4gb3RoZXIgY2FzZSBzdWJ0cmFjdCB0byB0aGUgcHJldmlvdXMgaXRlbVxyXG5cdFx0aWYgKGN1cnIgLSAxIDwgMCkge1xyXG5cdFx0XHRjdXJyID0gYW1vdW50IC0gMTtcclxuXHRcdH0gZWxzZSBjdXJyLS07XHJcblx0XHQkKFwiLm1vZGFsQ2Fyb3VzZWxMaXN0IGxpOmVxKFwiICsgY3VyciArIFwiKVwiKS5kZWxheSgxMDApLmZhZGVJbigxMDApOyAvLyBTaG93IGl0ZW0gd2l0aCBpbmRleCAwIChmaXJzdCBlbGVtZW50KVxyXG5cdH0pO1xyXG5cclxuXHQkKFwiLm1vZGFsQ2Fyb3VzZWxfX2Fycm93X25leHRcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0JChcIi5tb2RhbENhcm91c2VsTGlzdCBsaTplcShcIiArIGN1cnIgKyBcIilcIikuZmFkZU91dCgxMDApOyAvLyBIaWRlIGl0ZW0gd2l0aCBpbmRleCAwIChmaXJzdCBlbGVtZW50KVxyXG5cdFx0Ly8gSWYgaXRlbXMgaW5kZXggKyAxIG1vcmUgdGhhbiBsaXN0IGxlbmd0aCwgdGhlbiBiYWNrIHRvIHRvIHRoZSBmaXJzdCBpdGVtLlxyXG5cdFx0Ly8gSW4gb3RoZXIgY2FzZSBzdWJ0cmFjdCB0byB0aGUgbmV4dCBpdGVtXHJcblx0XHRpZiAoY3VyciArIDEgPj0gYW1vdW50KSB7XHJcblx0XHRcdGN1cnIgPSAwO1xyXG5cdFx0fSBlbHNlIGN1cnIrKztcclxuXHJcblx0XHQkKFwiLm1vZGFsQ2Fyb3VzZWxMaXN0IGxpOmVxKFwiICsgY3VyciArIFwiKVwiKS5kZWxheSgxMDApLmZhZGVJbigxMDApOyAvLyBTaG93IGl0ZW0gd2l0aCBpbmRleCAwIChmaXJzdCBlbGVtZW50KVxyXG5cdH0pO1xyXG59KTtcclxuXHJcbiJdLCJmaWxlIjoiY29tcG9uZW50cy9wb3J0Zm9saW8uanMifQ==
