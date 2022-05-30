$(document).ready(function () {

    // Ответы на вопросы
    $('.ask__question').on('click', function(event){
        $(this).toggleClass('active').next().slideToggle(300);
        $(this).children().eq(1).toggleClass('active');
    });

    // МАСКА НА НОМЕР ПО ТИПУ-TEL
    $.mask.definitions["9"] = false;
    $.mask.definitions["5"] = "[0-9]";
    $("input[type=tel]")
        .mask("8(955) 555-5555")
        .on("click", function () {
            $(this).trigger("focus");
        });

    // POPUP
    const phone = document.getElementById('popup-phone');
    const name = document.getElementById('popup-name');
    const popupBtn = $('.popup-btn');
    const url = "pages/thanks.html";

    popupBtn.on('click', () => $('.popup').fadeIn('fast').css({display: 'flex'}));

    $('#popup__btn').on('click', () => {
        if (name.value.length > 0 && phone.value.length > 0) {
            $('.popup').fadeOut('fast', () => {
                $(location).attr('href', url);
            })
        }
    });

    $('.popup, .popup__close').on('click', function (e) {
        if (e.target == this) {
            $('.popup').fadeOut('fast');
        }
    });

});