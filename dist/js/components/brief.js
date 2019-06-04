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
			$('.brief__content')
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2JyaWVmLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG5cclxuXHQvLyDQrdGC0YMg0YTRg9C90LrRhtC40Y4g0L3QsNC00L4g0LrQsNC6LdGC0L4g0YHQstGP0LfQsNGC0Ywg0YEg0L/QtdGA0LXQutC70Y7Rh9C10L3QuNC10Lwg0Y/Qt9GL0LrQvtCyINC90LAg0YHQsNC50YLQtS5cclxuXHQvLyBmdW5jdGlvbiB0cmFuc2xhdGVWYWxpZGF0aW9uTWVzc2FnZXMoY3VycmVudExhbmcpIHtcclxuXHQvLyBcdG1lc3NhZ2UgPSB7XHJcblx0Ly8gXHRcdGVuOiB7XHJcblx0Ly8gXHRcdFx0cmVxdWlyZWQ6ICdSZXF1aXJlZCBmaWVsZCcsXHJcblx0Ly8gXHRcdFx0bWlubGVuZ3RoOiAkLnZhbGlkYXRvci5mb3JtYXQoJ1BsZWFzZSBlbnRlciBhdCBsZWFzdCB7MH0gY2hhcmFjdGVycycpLFxyXG5cdC8vIFx0XHRcdGN1c3RvbVBob25lOiAnUGxlYXNlIGVudGVyIGNvcnJlY3QgcGhvbmUnLFxyXG5cdC8vIFx0XHR9LFxyXG5cdC8vIFx0XHR1azoge1xyXG5cdC8vIFx0XHRcdHJlcXVpcmVkOiAn0J/QvtC70LUg0L7QsdC+0LJcXCfRj9C30LrQvtCy0LUg0LTQu9GPINC30LDQv9C+0LLQvdC10L3QvdGPJyxcclxuXHQvLyBcdFx0XHRtaW5sZW5ndGg6ICQudmFsaWRhdG9yLmZvcm1hdCgn0JHRg9C00Ywg0LvQsNGB0LrQsCwg0LLQstC10LTRltGC0Ywg0L3QtSDQvNC10L3RiNC1IHswfSDRgdC40LzQstC+0LvRltCyJyksXHJcblx0Ly8gXHRcdFx0Y3VzdG9tUGhvbmU6ICfQkdGD0LTRjCDQu9Cw0YHQutCwLCDQstCy0LXQtNGW0YLRjCDQutC+0YDQtdC60YLQvdC40Lkg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdGDJyxcclxuXHQvLyBcdFx0fSxcclxuXHQvLyBcdFx0cnU6IHtcclxuXHQvLyBcdFx0XHRyZXF1aXJlZDogJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJyxcclxuXHQvLyBcdFx0XHRtaW5sZW5ndGg6ICQudmFsaWRhdG9yLmZvcm1hdCgn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INC90LUg0LzQtdC90LXQtSB7MH0g0YHQuNC80LLQvtC70L7QsicpLFxyXG5cdC8vIFx0XHRcdGN1c3RvbVBob25lOiAn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCcsXHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdH07XHJcblx0Ly8gXHRjb25zb2xlLmxvZygnVHJhbnNsYXRpbmcgdmFsaWRhdGlvbiBtZXNzYWdlcyB0bzogJyArIGN1cnJlbnRMYW5nKTtcclxuXHQvL1xyXG5cdC8vIFx0aWYgKGN1cnJlbnRMYW5nID09ICd1aycpIHtcclxuXHQvLyBcdFx0JC5leHRlbmQoJC52YWxpZGF0b3IubWVzc2FnZXMsIG1lc3NhZ2UudWspO1xyXG5cdC8vIFx0fSBlbHNlIGlmIChjdXJyZW50TGFuZyA9PSAncnUnKSB7XHJcblx0Ly8gXHRcdCQuZXh0ZW5kKCQudmFsaWRhdG9yLm1lc3NhZ2VzLCBtZXNzYWdlLnJ1KTtcclxuXHQvLyBcdH0gZWxzZSB7XHJcblx0Ly8gXHRcdCQuZXh0ZW5kKCQudmFsaWRhdG9yLm1lc3NhZ2VzLCBtZXNzYWdlLmVuKTtcclxuXHQvLyBcdH1cclxuXHQvLyB9XHJcblxyXG5cdCQudmFsaWRhdG9yLnNldERlZmF1bHRzKHtcclxuXHRcdHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JCgnLmJyaWVmX19jb250ZW50JylcclxuXHRcdFx0XHQuY3NzKHsnZGlzcGxheSc6ICdub25lJ30pO1xyXG5cdFx0XHQkKCcuYnJpZWZTZW50JylcclxuXHRcdFx0XHQuY3NzKHsnZGlzcGxheSc6ICdibG9jayd9KVxyXG5cdFx0fSxcclxuXHRcdGhpZ2hsaWdodDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuXHRcdFx0JChlbGVtZW50KVxyXG5cdFx0XHRcdC5jbG9zZXN0KCcuYnJpZWZGb3JtX19pbnB1dCcpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdlcnJvckJvcmRlcicpXHJcblx0XHR9LFxyXG5cdFx0dW5oaWdobGlnaHQ6IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcblx0XHRcdCQoZWxlbWVudClcclxuXHRcdFx0XHQuY2xvc2VzdCgnLmJyaWVmRm9ybV9faW5wdXQnKVxyXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnZXJyb3JCb3JkZXInKVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQkLnZhbGlkYXRvci5hZGRNZXRob2QoXCJjdXN0b21FbWFpbFwiLCBmdW5jdGlvbiAodmFsdWUsIGVsZW1lbnQpIHtcclxuXHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcclxuXHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QodmFsdWUpO1xyXG5cdH0sICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0LDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0YsnKTtcclxuXHJcblx0JC52YWxpZGF0b3IuYWRkTWV0aG9kKFwiY3VzdG9tUGhvbmVcIiwgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblx0XHR2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xccysvZywgXCJcIik7XHJcblx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAvXig/IVxcKy4qXFwoLipcXCkuKlxcLVxcLS4qJCkoPyFcXCsuKlxcKC4qXFwpLipcXC0kKSgoWzAtOV17MCwxMX0pPyggWzAtOV17M30pPyggWzAtOV17M30pPyggWzAtOV17Mn0pPyggWzAtOV17Mn0pPyhcXChbMC05XXszfSk/KFxcKVswLTldezN9KT8oWy1dezAsMX0pPyhbMC05XXswLDJ9KT8oWy1dezAsMX0pPyhbMC05XXswLDJ9KT8oIFswLTldezJ9KT8oIFswLTldezJ9KT8oXFwrWzAtOV17MSwxMX0pPyggWzAtOV17M30pPyggWzAtOV17M30pPyggWzAtOV17Mn0pPyggWzAtOV17Mn0pPyhcXChbMC05XXszfSk/KFxcKVswLTldezN9KT8oWy1dezAsMX0pPyhbMC05XXswLDJ9KT8oWy1dezAsMX0pPyhbMC05XXswLDJ9KT8oIFswLTldezJ9KT8oIFswLTldezJ9KT8pJC9naW0udGVzdCh2YWx1ZSk7XHJcblx0fSwgJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnKTtcclxuXHJcblx0JCgnI2JyaWVmRm9ybScpLnZhbGlkYXRlKHtcclxuXHRcdHJ1bGVzOiB7XHJcblx0XHRcdG5hbWU6IHtcclxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRtaW5sZW5ndGg6IDIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHBob25lOiB7XHJcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0Y3VzdG9tUGhvbmU6IHRydWUsXHJcblx0XHRcdFx0bWlubGVuZ3RoOiAxMCxcclxuXHRcdFx0fSxcclxuXHRcdFx0ZW1haWw6IHtcclxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRlbWFpbDogdHJ1ZSxcclxuXHRcdFx0XHRjdXN0b21FbWFpbDogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvZHVjdDoge1xyXG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWVzc2FnZXM6IHtcclxuXHRcdFx0bmFtZToge1xyXG5cdFx0XHRcdHJlcXVpcmVkOiAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nLFxyXG5cdFx0XHRcdG1pbmxlbmd0aDogJC52YWxpZGF0b3IuZm9ybWF0KCfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0L3QtSDQvNC10L3QtdC1IHswfSDRgdC40LzQstC+0LvQvtCyJyksXHJcblx0XHRcdH0sXHJcblx0XHRcdHBob25lOiB7XHJcblx0XHRcdFx0cmVxdWlyZWQ6ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjycsXHJcblx0XHRcdFx0Y3VzdG9tUGhvbmU6ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwJyxcclxuXHRcdFx0XHRtaW5sZW5ndGg6ICQudmFsaWRhdG9yLmZvcm1hdCgn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INC90LUg0LzQtdC90LXQtSB7MH0g0YHQuNC80LLQvtC70L7QsicpLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlbWFpbDoge1xyXG5cdFx0XHRcdHJlcXVpcmVkOiAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nLFxyXG5cdFx0XHRcdGVtYWlsOiAn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5INCw0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLJyxcclxuXHRcdFx0XHRjdXN0b21FbWFpbDogJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSDQsNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRiydcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvZHVjdDoge1xyXG5cdFx0XHRcdHJlcXVpcmVkOiAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZXJyb3JDbGFzczogJ2Vycm9yTWVzc2FnZScsXHJcblx0fSk7XHJcbn0pO1xyXG5cclxuXHJcbiJdLCJmaWxlIjoiY29tcG9uZW50cy9icmllZi5qcyJ9
