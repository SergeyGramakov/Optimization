$(document).ready(function () {
    var step = 1;
    const quizName = document.getElementById('quizName');
    const btnNext = $('.btn-next');
    const url = "../index.html";

    function changeStep() {
        $('#step-' + step).fadeOut(300, () => {
            $('#step-' + ++step).fadeIn(300);
        });
    }

    function returnToMain() {
        setTimeout(() => {
            $(location).attr('href', url);
        }, 5000);
    }

    btnNext.on('click', () => {
        if (step === 1 && quizName.value.length > 2 && $('input[name="quiz-status"]').is(':checked')) changeStep();
        else if (step === 2 && $('input[name="activities"]').is(':checked') &&
            $('textarea[name="aboutBusiness"]').is(':not(:placeholder-shown)'))
            changeStep();
        else if (step === 3 && $('input[name="project-goals"]').is(':checked')) changeStep();
        else if (step === 4 && $('input[name="quiz-phone"]').is(':not(:placeholder-shown)')) changeStep();
        else if (step === 5 && $('input[name="quiz-email"]').is(':not(:placeholder-shown)')) {
            changeStep();
            returnToMain();
        }
    });
});
