$('#navbarBurger').click(function(e){
    e.stopPropagation();
    $(this).toggleClass('open');
    $('.navbarMenu').toggleClass('navbarMenu_open');

    console.log("======================")
});

// $('html').click(function () {
//     $('.navbar__menu').removeClass('navbar__menu_open');
//     $('#navbarBurger').removeClass('open');
// });

$("#lang").change(function() {
    translateValidationMessages(this.value);
    console.log("Setting language to " + this.value);
});