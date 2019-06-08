$(function () {

	// Эту функцию надо как-то связать с переключением языков на сайте.
	// function translateValidationMessages(currentLang) {
	// 	message = {
	// 		en: {
	// 			required: 'Required field',
	// 			minlength: $.validator.format('Please enter at least {0} characters'),
	// 			customPhone: 'Please enter correct phone',
	// 		},
	// 		uk: {
	// 			required: 'Поле обов\'язкове для заповнення',
	// 			minlength: $.validator.format('Будь ласка, введіть не менше {0} символів'),
	// 			customPhone: 'Будь ласка, введіть коректний номер телефону',
	// 		},
	// 		ru: {
	// 			required: 'Поле обязательно для заполнения',
	// 			minlength: $.validator.format('Пожалуйста, введите не менее {0} символов'),
	// 			customPhone: 'Пожалуйста, введите корректный номер телефона',
	// 		}
	// 	};
	// 	console.log('Translating validation messages to: ' + currentLang);
	//
	// 	if (currentLang == 'uk') {
	// 		$.extend($.validator.messages, message.uk);
	// 	} else if (currentLang == 'ru') {
	// 		$.extend($.validator.messages, message.ru);
	// 	} else {
	// 		$.extend($.validator.messages, message.en);
	// 	}
	// }

	$.validator.setDefaults({
		submitHandler: function () {
			$('.brief__box')
				.css({'display': 'none'});
			$('.briefSent')
				.css({'display': 'block'})
		},
		highlight: function (element) {
			$(element)
				.closest('.briefForm__input')
				.addClass('errorBorder')
		},
		unhighlight: function (element) {
			$(element)
				.closest('.briefForm__input')
				.removeClass('errorBorder')
		}
	});

	$.validator.addMethod("customEmail", function (value, element) {
		console.log(value);
		return this.optional(element) || /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
	}, 'Пожалуйста, введите корректный адрес электронной почты');

	$.validator.addMethod("customPhone", function (value, element) {
		console.log(value);
		value = value.replace(/\s+/g, "");
		return this.optional(element) || /^(?!\+.*\(.*\).*\-\-.*$)(?!\+.*\(.*\).*\-$)(([0-9]{0,11})?( [0-9]{3})?( [0-9]{3})?( [0-9]{2})?( [0-9]{2})?(\([0-9]{3})?(\)[0-9]{3})?([-]{0,1})?([0-9]{0,2})?([-]{0,1})?([0-9]{0,2})?( [0-9]{2})?( [0-9]{2})?(\+[0-9]{1,11})?( [0-9]{3})?( [0-9]{3})?( [0-9]{2})?( [0-9]{2})?(\([0-9]{3})?(\)[0-9]{3})?([-]{0,1})?([0-9]{0,2})?([-]{0,1})?([0-9]{0,2})?( [0-9]{2})?( [0-9]{2})?)$/gim.test(value);
	}, 'Пожалуйста, введите корректный номер телефона');

	$('#briefForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
			},
			phone: {
				required: true,
				customPhone: true,
				minlength: 10,
			},
			email: {
				required: true,
				email: true,
				customEmail: true,
			},
			product: {
				required: true,
			}
		},
		messages: {
			name: {
				required: 'Поле обязательно для заполнения',
				minlength: $.validator.format('Пожалуйста, введите не менее {0} символов'),
			},
			phone: {
				required: 'Поле обязательно для заполнения',
				customPhone: 'Пожалуйста, введите корректный номер телефона',
				minlength: $.validator.format('Пожалуйста, введите не менее {0} символов'),
			},
			email: {
				required: 'Поле обязательно для заполнения',
				email: 'Пожалуйста, введите корректный адрес электронной почты',
				customEmail: 'Пожалуйста, введите корректный адрес электронной почты'
			},
			product: {
				required: 'Поле обязательно для заполнения',
			}
		},
		errorClass: 'errorMessage',
	});
});



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2JyaWVmLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG5cclxuXHQvLyDQrdGC0YMg0YTRg9C90LrRhtC40Y4g0L3QsNC00L4g0LrQsNC6LdGC0L4g0YHQstGP0LfQsNGC0Ywg0YEg0L/QtdGA0LXQutC70Y7Rh9C10L3QuNC10Lwg0Y/Qt9GL0LrQvtCyINC90LAg0YHQsNC50YLQtS5cclxuXHQvLyBmdW5jdGlvbiB0cmFuc2xhdGVWYWxpZGF0aW9uTWVzc2FnZXMoY3VycmVudExhbmcpIHtcclxuXHQvLyBcdG1lc3NhZ2UgPSB7XHJcblx0Ly8gXHRcdGVuOiB7XHJcblx0Ly8gXHRcdFx0cmVxdWlyZWQ6ICdSZXF1aXJlZCBmaWVsZCcsXHJcblx0Ly8gXHRcdFx0bWlubGVuZ3RoOiAkLnZhbGlkYXRvci5mb3JtYXQoJ1BsZWFzZSBlbnRlciBhdCBsZWFzdCB7MH0gY2hhcmFjdGVycycpLFxyXG5cdC8vIFx0XHRcdGN1c3RvbVBob25lOiAnUGxlYXNlIGVudGVyIGNvcnJlY3QgcGhvbmUnLFxyXG5cdC8vIFx0XHR9LFxyXG5cdC8vIFx0XHR1azoge1xyXG5cdC8vIFx0XHRcdHJlcXVpcmVkOiAn0J/QvtC70LUg0L7QsdC+0LJcXCfRj9C30LrQvtCy0LUg0LTQu9GPINC30LDQv9C+0LLQvdC10L3QvdGPJyxcclxuXHQvLyBcdFx0XHRtaW5sZW5ndGg6ICQudmFsaWRhdG9yLmZvcm1hdCgn0JHRg9C00Ywg0LvQsNGB0LrQsCwg0LLQstC10LTRltGC0Ywg0L3QtSDQvNC10L3RiNC1IHswfSDRgdC40LzQstC+0LvRltCyJyksXHJcblx0Ly8gXHRcdFx0Y3VzdG9tUGhvbmU6ICfQkdGD0LTRjCDQu9Cw0YHQutCwLCDQstCy0LXQtNGW0YLRjCDQutC+0YDQtdC60YLQvdC40Lkg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdGDJyxcclxuXHQvLyBcdFx0fSxcclxuXHQvLyBcdFx0cnU6IHtcclxuXHQvLyBcdFx0XHRyZXF1aXJlZDogJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJyxcclxuXHQvLyBcdFx0XHRtaW5sZW5ndGg6ICQudmFsaWRhdG9yLmZvcm1hdCgn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INC90LUg0LzQtdC90LXQtSB7MH0g0YHQuNC80LLQvtC70L7QsicpLFxyXG5cdC8vIFx0XHRcdGN1c3RvbVBob25lOiAn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCcsXHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdH07XHJcblx0Ly8gXHRjb25zb2xlLmxvZygnVHJhbnNsYXRpbmcgdmFsaWRhdGlvbiBtZXNzYWdlcyB0bzogJyArIGN1cnJlbnRMYW5nKTtcclxuXHQvL1xyXG5cdC8vIFx0aWYgKGN1cnJlbnRMYW5nID09ICd1aycpIHtcclxuXHQvLyBcdFx0JC5leHRlbmQoJC52YWxpZGF0b3IubWVzc2FnZXMsIG1lc3NhZ2UudWspO1xyXG5cdC8vIFx0fSBlbHNlIGlmIChjdXJyZW50TGFuZyA9PSAncnUnKSB7XHJcblx0Ly8gXHRcdCQuZXh0ZW5kKCQudmFsaWRhdG9yLm1lc3NhZ2VzLCBtZXNzYWdlLnJ1KTtcclxuXHQvLyBcdH0gZWxzZSB7XHJcblx0Ly8gXHRcdCQuZXh0ZW5kKCQudmFsaWRhdG9yLm1lc3NhZ2VzLCBtZXNzYWdlLmVuKTtcclxuXHQvLyBcdH1cclxuXHQvLyB9XHJcblxyXG5cdCQudmFsaWRhdG9yLnNldERlZmF1bHRzKHtcclxuXHRcdHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JCgnLmJyaWVmX19ib3gnKVxyXG5cdFx0XHRcdC5jc3MoeydkaXNwbGF5JzogJ25vbmUnfSk7XHJcblx0XHRcdCQoJy5icmllZlNlbnQnKVxyXG5cdFx0XHRcdC5jc3MoeydkaXNwbGF5JzogJ2Jsb2NrJ30pXHJcblx0XHR9LFxyXG5cdFx0aGlnaGxpZ2h0OiBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG5cdFx0XHQkKGVsZW1lbnQpXHJcblx0XHRcdFx0LmNsb3Nlc3QoJy5icmllZkZvcm1fX2lucHV0JylcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2Vycm9yQm9yZGVyJylcclxuXHRcdH0sXHJcblx0XHR1bmhpZ2hsaWdodDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuXHRcdFx0JChlbGVtZW50KVxyXG5cdFx0XHRcdC5jbG9zZXN0KCcuYnJpZWZGb3JtX19pbnB1dCcpXHJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdlcnJvckJvcmRlcicpXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdCQudmFsaWRhdG9yLmFkZE1ldGhvZChcImN1c3RvbUVtYWlsXCIsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xyXG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWx1ZSk7XHJcblx0fSwgJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSDQsNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRiycpO1xyXG5cclxuXHQkLnZhbGlkYXRvci5hZGRNZXRob2QoXCJjdXN0b21QaG9uZVwiLCBmdW5jdGlvbiAodmFsdWUsIGVsZW1lbnQpIHtcclxuXHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcclxuXHRcdHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcclxuXHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eKD8hXFwrLipcXCguKlxcKS4qXFwtXFwtLiokKSg/IVxcKy4qXFwoLipcXCkuKlxcLSQpKChbMC05XXswLDExfSk/KCBbMC05XXszfSk/KCBbMC05XXszfSk/KCBbMC05XXsyfSk/KCBbMC05XXsyfSk/KFxcKFswLTldezN9KT8oXFwpWzAtOV17M30pPyhbLV17MCwxfSk/KFswLTldezAsMn0pPyhbLV17MCwxfSk/KFswLTldezAsMn0pPyggWzAtOV17Mn0pPyggWzAtOV17Mn0pPyhcXCtbMC05XXsxLDExfSk/KCBbMC05XXszfSk/KCBbMC05XXszfSk/KCBbMC05XXsyfSk/KCBbMC05XXsyfSk/KFxcKFswLTldezN9KT8oXFwpWzAtOV17M30pPyhbLV17MCwxfSk/KFswLTldezAsMn0pPyhbLV17MCwxfSk/KFswLTldezAsMn0pPyggWzAtOV17Mn0pPyggWzAtOV17Mn0pPykkL2dpbS50ZXN0KHZhbHVlKTtcclxuXHR9LCAn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCcpO1xyXG5cclxuXHQkKCcjYnJpZWZGb3JtJykudmFsaWRhdGUoe1xyXG5cdFx0cnVsZXM6IHtcclxuXHRcdFx0bmFtZToge1xyXG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdG1pbmxlbmd0aDogMixcclxuXHRcdFx0fSxcclxuXHRcdFx0cGhvbmU6IHtcclxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRjdXN0b21QaG9uZTogdHJ1ZSxcclxuXHRcdFx0XHRtaW5sZW5ndGg6IDEwLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlbWFpbDoge1xyXG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdGVtYWlsOiB0cnVlLFxyXG5cdFx0XHRcdGN1c3RvbUVtYWlsOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcm9kdWN0OiB7XHJcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXNzYWdlczoge1xyXG5cdFx0XHRuYW1lOiB7XHJcblx0XHRcdFx0cmVxdWlyZWQ6ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjycsXHJcblx0XHRcdFx0bWlubGVuZ3RoOiAkLnZhbGlkYXRvci5mb3JtYXQoJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQvdC1INC80LXQvdC10LUgezB9INGB0LjQvNCy0L7Qu9C+0LInKSxcclxuXHRcdFx0fSxcclxuXHRcdFx0cGhvbmU6IHtcclxuXHRcdFx0XHRyZXF1aXJlZDogJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJyxcclxuXHRcdFx0XHRjdXN0b21QaG9uZTogJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnLFxyXG5cdFx0XHRcdG1pbmxlbmd0aDogJC52YWxpZGF0b3IuZm9ybWF0KCfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0L3QtSDQvNC10L3QtdC1IHswfSDRgdC40LzQstC+0LvQvtCyJyksXHJcblx0XHRcdH0sXHJcblx0XHRcdGVtYWlsOiB7XHJcblx0XHRcdFx0cmVxdWlyZWQ6ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjycsXHJcblx0XHRcdFx0ZW1haWw6ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0LDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0YsnLFxyXG5cdFx0XHRcdGN1c3RvbUVtYWlsOiAn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5INCw0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcm9kdWN0OiB7XHJcblx0XHRcdFx0cmVxdWlyZWQ6ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjycsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRlcnJvckNsYXNzOiAnZXJyb3JNZXNzYWdlJyxcclxuXHR9KTtcclxufSk7XHJcblxyXG5cclxuIl0sImZpbGUiOiJjb21wb25lbnRzL2JyaWVmLmpzIn0=
