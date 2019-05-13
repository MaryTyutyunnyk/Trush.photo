
function descriptionTextSize () {
	let size = 75,
		description = $('.infoSection__descriptionText'),
		descriptionText = description.text();

	if (descriptionText.length > size) {
		description.text(descriptionText.slice(0, size) + ' ...');
	}
}
descriptionTextSize();


$(function () {
	$("#arrow").click(function () {
		$(this).css({"transform": "rotate(-180deg)"});

	})
});