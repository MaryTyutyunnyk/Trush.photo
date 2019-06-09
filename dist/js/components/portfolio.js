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
			responsiveClass: true,
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

	$window.resize(function () {
		if ($window.width() < 960) {
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
			responsiveClass: true,
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

	$window.resize(function () {
		if ($window.width() < 960) {
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
$(function () {
	const modalArrowPrevious = $('#modalArrowPrevious');
	const modalArrowNext = $('#modalArrowNext');
	const owlModalCarousel = $('#modalCarouselList');
	owlModalCarousel.owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		freeDrag: false,
		responsiveClass: true,
		responsive: {
			0: {
				touchDrag: true,
			},
			960: {
				touchDrag: false,
			},
		}
	});
	modalArrowPrevious.click(function () {
		owlModalCarousel.trigger('prev.owl.carousel');
	});
	modalArrowNext.click(function () {
		owlModalCarousel.trigger('next.owl.carousel');
	});
});



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BvcnRmb2xpby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcclxuXHQvLyBwb3J0Zm9saW9CbG9ja0ltYWdlIGNhcm91c2VsIGluaXRpYXRpb25cclxuXHRsZXQgY2Fyb3VzZWxMaXN0SW1hZ2VJbml0aWF0ZWQgPSBmYWxzZTtcclxuXHRjb25zdCBwcmV2QXJyb3cgPSAkKCcjcHJldmlvdXNfYXJyb3cnKTtcclxuXHRjb25zdCBuZXh0QXJyb3cgPSAkKCcjbmV4dF9hcnJvdycpO1xyXG5cdGNvbnN0IG93bCA9ICQoJyNjYXJvdXNlbExpc3RJbWFnZScpO1xyXG5cdGNvbnN0ICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcblxyXG5cdGNvbnN0IGluaXRDYXJvdXNlbExpc3RJbWFnZSA9ICgpID0+IHtcclxuXHRcdG93bC5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdGF1dG9XaWR0aDogdHJ1ZSxcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0ZG90czogZmFsc2UsXHJcblx0XHRcdHJlc3BvbnNpdmVDbGFzczogdHJ1ZSxcclxuXHRcdFx0cmVzcG9uc2l2ZToge1xyXG5cdFx0XHRcdDA6IHtcclxuXHRcdFx0XHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0OTYwOiB7XHJcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cHJldkFycm93LmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0b3dsLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XHJcblx0XHR9KTtcclxuXHRcdG5leHRBcnJvdy5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHRcdG93bC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG5cdFx0fSk7XHJcblx0XHRvd2wub24oJ2NoYW5nZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdGNvbnN0IHtpdGVtOiB7Y291bnQsIGluZGV4fX0gPSBldmVudDtcclxuXHRcdFx0aWYgKGluZGV4ID09PSAwKSB7XHJcblx0XHRcdFx0cHJldkFycm93LmhpZGUoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwcmV2QXJyb3cuc2hvdygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGNhcm91c2VsTGlzdEltYWdlSW5pdGlhdGVkID0gdHJ1ZTtcclxuXHR9O1xyXG5cdGluaXRDYXJvdXNlbExpc3RJbWFnZSgpO1xyXG5cclxuXHQvLyBSZW1vdmUgcG9ydGZvbGlvQmxvY2tJbWFnZSBjYXJvdXNlbCBvbiBtb2JpbGUgZGV2aWNlc1xyXG5cclxuXHQkd2luZG93LnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoJHdpbmRvdy53aWR0aCgpIDwgOTYwKSB7XHJcblx0XHRcdGlmIChjYXJvdXNlbExpc3RJbWFnZUluaXRpYXRlZCkge1xyXG5cdFx0XHRcdG93bC50cmlnZ2VyKCdkZXN0cm95Lm93bC5jYXJvdXNlbCcpO1xyXG5cdFx0XHRcdGNhcm91c2VsTGlzdEltYWdlSW5pdGlhdGVkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghY2Fyb3VzZWxMaXN0SW1hZ2VJbml0aWF0ZWQpIHtcclxuXHRcdFx0XHRpbml0Q2Fyb3VzZWxMaXN0SW1hZ2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHJcblx0Ly8gcG9ydGZvbGlvQmxvY2tDYXRhbG9ndWUgY2Fyb3VzZWwgaW5pdGlhdGlvblxyXG5cdGxldCBjYXJvdXNlbExpc3RDYXRhbG9ndWVJbml0aWF0ZWQgPSBmYWxzZTtcclxuXHRjb25zdCBwcmV2QXJyb3cyID0gJCgnI2xlZnRfYXJyb3cnKTtcclxuXHRjb25zdCBuZXh0QXJyb3cyID0gJCgnI3JpZ2h0X2Fycm93Jyk7XHJcblx0Y29uc3Qgb3dsMiA9ICQoJyNjYXJvdXNlbExpc3RDYXRhbG9ndWUnKTtcclxuXHJcblx0Y29uc3QgaW5pdENhcm91c2VsTGlzdENhdGFsb2d1ZSA9ICgpID0+IHtcclxuXHRcdG93bDIub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0XHRhdXRvV2lkdGg6IHRydWUsXHJcblx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdGRvdHM6IGZhbHNlLFxyXG5cdFx0XHRyZXNwb25zaXZlQ2xhc3M6IHRydWUsXHJcblx0XHRcdHJlc3BvbnNpdmU6IHtcclxuXHRcdFx0XHQwOiB7XHJcblx0XHRcdFx0XHRsb29wOiBmYWxzZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDk2MDoge1xyXG5cdFx0XHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHByZXZBcnJvdzIuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRvd2wyLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XHJcblx0XHR9KTtcclxuXHRcdG5leHRBcnJvdzIuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRvd2wyLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XHJcblx0XHR9KTtcclxuXHRcdG93bDIub24oJ2NoYW5nZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdGNvbnN0IHtpdGVtOiB7Y291bnQsIGluZGV4fX0gPSBldmVudDtcclxuXHRcdFx0aWYgKGluZGV4ID09PSAwKSB7XHJcblx0XHRcdFx0cHJldkFycm93Mi5oaWRlKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cHJldkFycm93Mi5zaG93KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Y2Fyb3VzZWxMaXN0Q2F0YWxvZ3VlSW5pdGlhdGVkID0gdHJ1ZTtcclxuXHR9O1xyXG5cdGluaXRDYXJvdXNlbExpc3RDYXRhbG9ndWUoKTtcclxuXHJcblx0Ly8gUmVtb3ZlIFBvcnRmb2xpb0Jsb2NrQ2F0YWxvZ3VlIG9uIG1vYmlsZSBkZXZpY2VzXHJcblxyXG5cdCR3aW5kb3cucmVzaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICgkd2luZG93LndpZHRoKCkgPCA5NjApIHtcclxuXHRcdFx0aWYgKGNhcm91c2VsTGlzdENhdGFsb2d1ZUluaXRpYXRlZCkge1xyXG5cdFx0XHRcdG93bDIudHJpZ2dlcignZGVzdHJveS5vd2wuY2Fyb3VzZWwnKTtcclxuXHRcdFx0XHRjYXJvdXNlbExpc3RDYXRhbG9ndWVJbml0aWF0ZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKCFjYXJvdXNlbExpc3RDYXRhbG9ndWVJbml0aWF0ZWQpIHtcclxuXHRcdFx0XHRpbml0Q2Fyb3VzZWxMaXN0Q2F0YWxvZ3VlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxufSk7XHJcblxyXG4vLyBGdW5jdGlvbiBmb3IgbW9kYWwgd2luZG93XHJcblxyXG5jb25zdCBhZGRMaXN0ZW5lcnMgPSBlbGVtZW50ID0+IHtcclxuXHRlbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoXCIubW9kYWxcIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XHJcblx0fSk7XHJcbn07XHJcbmNvbnN0IGltZ0JveCA9ICQoXCIuY2Fyb3VzZWxJdGVtX19pbWdCb3hcIik7XHJcbmFkZExpc3RlbmVycyhpbWdCb3gpO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblx0JChcIi5tb2RhbF9fY3Jvc3NCbG9ja1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQkKFwiLm1vZGFsXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIEZ1bmN0aW9uIGZvciBtb2RhbENhcm91c2VsXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IG1vZGFsQXJyb3dQcmV2aW91cyA9ICQoJyNtb2RhbEFycm93UHJldmlvdXMnKTtcclxuXHRjb25zdCBtb2RhbEFycm93TmV4dCA9ICQoJyNtb2RhbEFycm93TmV4dCcpO1xyXG5cdGNvbnN0IG93bE1vZGFsQ2Fyb3VzZWwgPSAkKCcjbW9kYWxDYXJvdXNlbExpc3QnKTtcclxuXHRvd2xNb2RhbENhcm91c2VsLm93bENhcm91c2VsKHtcclxuXHRcdGl0ZW1zOiAxLFxyXG5cdFx0bG9vcDogdHJ1ZSxcclxuXHRcdGRvdHM6IGZhbHNlLFxyXG5cdFx0bW91c2VEcmFnOiBmYWxzZSxcclxuXHRcdHRvdWNoRHJhZzogZmFsc2UsXHJcblx0XHRwdWxsRHJhZzogZmFsc2UsXHJcblx0XHRmcmVlRHJhZzogZmFsc2UsXHJcblx0XHRyZXNwb25zaXZlQ2xhc3M6IHRydWUsXHJcblx0XHRyZXNwb25zaXZlOiB7XHJcblx0XHRcdDA6IHtcclxuXHRcdFx0XHR0b3VjaERyYWc6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdDk2MDoge1xyXG5cdFx0XHRcdHRvdWNoRHJhZzogZmFsc2UsXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fSk7XHJcblx0bW9kYWxBcnJvd1ByZXZpb3VzLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdG93bE1vZGFsQ2Fyb3VzZWwudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnKTtcclxuXHR9KTtcclxuXHRtb2RhbEFycm93TmV4dC5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHRvd2xNb2RhbENhcm91c2VsLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuXHJcbiJdLCJmaWxlIjoiY29tcG9uZW50cy9wb3J0Zm9saW8uanMifQ==
