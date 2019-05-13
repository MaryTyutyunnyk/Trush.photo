$(function () {
	function translateValidationMessages(currentLang) {
		message = {
			en: {
				required: 'Required field',
				minlength: $.validator.format('Please enter at least {0} characters'),
				customPhone: 'Please enter correct phone',
			},
			uk: {
				required: 'Поле обов\'язкове для заповнення',
				minlength: $.validator.format('Будь ласка, введіть не менше {0} символів'),
				customPhone: 'Будь ласка, введіть коректний номер телефону',
			},
			ru: {
				required: 'Поле обязательно для заполнения',
				minlength: $.validator.format('Пожалуйста, введите не менее {0} символов'),
				customPhone: 'Пожалуйста, введите корректный номер телефона',
			}
		};
		console.log('Translating validation messages to: ' + currentLang);

		if (currentLang == 'uk') {
			$.extend($.validator.messages, message.uk);
		} else if (currentLang == 'ru') {
			$.extend($.validator.messages, message.ru);
		} else {
			$.extend($.validator.messages, message.en);
		}
	}

	$.validator.setDefaults({
		submitHandler: function () {
			$('.brief')
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

	$.validator.addMethod("customEmail", function(value, element) {
		console.log(value);
		return this.optional( element ) || /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
	}, 'Please enter a valid email address');

	$.validator.addMethod("customPhone", function(value, element) {
		console.log(value);
		value = value.replace(/\s+/g, "");
		return this.optional( element ) || value.length >= 10 && /^(?!\+.*\(.*\).*\-\-.*$)(?!\+.*\(.*\).*\-$)(([0-9]{0,11})?( [0-9]{3})?( [0-9]{3})?( [0-9]{2})?( [0-9]{2})?(\([0-9]{3})?(\)[0-9]{3})?([-]{0,1})?([0-9]{0,2})?([-]{0,1})?([0-9]{0,2})?( [0-9]{2})?( [0-9]{2})?(\+[0-9]{1,11})?( [0-9]{3})?( [0-9]{3})?( [0-9]{2})?( [0-9]{2})?(\([0-9]{3})?(\)[0-9]{3})?([-]{0,1})?([0-9]{0,2})?([-]{0,1})?([0-9]{0,2})?( [0-9]{2})?( [0-9]{2})?)$/gim.test(value);
	}, 'Please enter a valid phone');

	$('#briefForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
			},
			phone: {
				required: true,
				minlength: 10,
				customPhone: true,
			},
			email: {
				required: true,
				email: true,
				customEmail: true
			},
			product: {
				required: true,
			}
		},
		messages: {
			name: {
				required: 'Поле обязательно для заполнения',
				minlength: $.validator.format('Please enter at least{0} characters'),
			},
			phone: {
				required: 'Поле обязательно для заполнения',
				minlength: $.validator.format('Пожалуйста, введите не менее {0} символов'),
				customPhone: 'Пожалуйста, введите корректный номер телефона',
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


