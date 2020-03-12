
$(document).ready(function () {

    $(function startQuiz() {
        $('.start-quiz-button').click(function () {
            const questions = {
                question1: ['What colour does Mars appear in the night sky?'],
                question2: ['What are Saturn\'\s rings mostly made of?'],
                question3: ['About how old is the Sun?'],
                question4: ['Which of the statements below is correct?'],
                question5: ['Which year did humans first land on the Moon?'],
                question6: ['When an astronaut is in the space shuttle can they go out of the space shuttle?'],
                question7: ['Who was the first person to walk on the Moon?'],
                question8: [],
                question9: [],
                question10: [],
            }
            const answers = {
                answer1: ['Yellow', 'Red', 'Green', 'Pink'],
                answer2: ['Sequins', 'Ice, dust and rock', 'Gases', 'None of these'],
                answer3: ['7.5 trillion years old', '12.7 million years old', '4.5 billion years old', '100 million years old'],
                answer4: ['The Sun orbits the Earth', 'Our galaxy doesn\'\t move in space at all', 'Our galaxy moves through space', 'Our galaxy only spins around in the same spot'],
                answer5: ['1965', '1971', '1960', '1969'],
                answer6: ['Yes, if work needs to be done outside.', 'Only the commander can go out of the space shuttle.', 'Yes, but if you do, you will get sucked into the nearest blackhole.', 'No, never.'],
                answer7: ['Buzz Aldrin', 'Michael Collins', 'Elvis Presley', 'Neil Armstrong'],
                answer8: [],
                answer9: [],
                answer10: []
            }

            event.preventDefault();
            $('.quiz-introduction').fadeOut(300);
            $('.hide-form').removeClass('hide-form').addClass('question-form');
            $('#question-number').html('1');
            $('#remaining-question-number').html('9');
            $('#question').html(questions.question1);
            $('#answer1').html(answers.answer1[0]);
            $('#answer2').html(answers.answer1[1]);
            $('#answer3').html(answers.answer1[2]);
            $('#answer4').html(answers.answer1[3]);
        });
    });

});