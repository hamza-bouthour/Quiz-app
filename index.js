const quiz = [
    {
        question: 'What colour does Mars appear in the night sky?',
        answers: ['Yellow', 'Green', 'Pink', 'Purple', 'Red'],
        correct: 4
    },
    {
        question: 'What are Saturn\'s rings mostly made of?',
        answers: ['Sequins', 'Ice, dust and rock', 'Gases', 'Stone', 'None of these'],
        correct: 1
    },
    {
        question: 'About how old is the Sun?',
        answers: ['7.5 trillion years old', '12.7 million years old', '4.5 billion years old', '100 million years old', '12.7 million years old'],
        correct: 2
    },
    {
        question: 'Which year did humans first land on the Moon?',
        answers: ['1969', '1965', '1970', '1975', '1959'],
        correct: 0
    },
    {
        question: 'Which of the statements below is correct?',
        answers: ["Our galaxy doesn't move in space at all.", ' Our galaxy moves through space.', 'Our galaxy only spins around in the same spot.', 'The Sun orbits the Earth.', 'The Earth orbits the Moon.'],
        correct: 1
    },
    {
        question: 'When an astronaut is in the space shuttle can they go out of the space shuttle?',
        answers: ['Yes, but if you do, you will get sucked into the nearest blackhole.', 'Yes, if work needs to be done outside.', 'Only the commander can go out of the space shuttle.', 'Chuck Norris can', 'No, never.'],
        correct: 1
    },
    {
        question: 'Who was the first person to walk on the Moon?',
        answers: ['Michael Collins', 'Buzz Aldrin', 'Neil Armstrong', 'Elvis Presley', 'Chuck Norris'],
        correct: 2
    },
    {
        question: 'What planet is the nearest to the Sun?',
        answers: ['Mercury', 'Earth', 'Mars', 'Jupiter', 'Venus'],
        correct: 0

    },
    {
        question: 'The sun is......',
        answers: ['a star', ' a asteroid', 'a planet', 'a black hole', 'a satellite'],
        correct: 0
    },
    {
        question: 'Which planet is the hottest in the solar system?',
        answers: ['Earth', 'Jupiter', 'Venus', 'Mars', 'Pluton'],
        correct: 2
    }
]


function updateSummary() {
    $('.count-correct-answers').text(countCorrectAnswers + '/10');
    $('.count-remaining').text(quiz.length - currentQuestionIndex - 1);
}

let currentQuestionIndex = 0;
let countCorrectAnswers = 0;

function renderQa(qa) {
    $('button.submit-answer').prop('disabled', true);
    const answers = qa.answers.map((answer, index) => {
        return `<label><input type="radio"${index === qa.correct ? ' class="correct"' : ''} name="answer-a">  ${answer}</label><br>`
    });
    $('div.quiz form h3 span').text(currentQuestionIndex + 1);
    $('div.quiz form p.question-list').text(qa.question);
    $('div.quiz form div.answers').html(answers.join(''));

    $('input[type=radio]').on('click', function () {
    $('button.submit-answer').prop('disabled', false);
    });
    updateSummary();
}


$(document).ready(function () {

    $('button.start-quiz-button').click(function () {
        $('div.quiz-introduction').addClass('hidden');
        $('div.quiz').removeClass('hidden').addClass('quiz');
        $('div.summary').removeClass('hidden');
        renderQa(quiz[currentQuestionIndex]);
    });


    $("form").on('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (currentQuestionIndex === quiz.length - 1) {
            $('div.quiz').addClass('quiz-end-animation');
            $('div form').addClass('hidden');
            $('div.summary').addClass('hidden');
            $('div.answer-window').fadeOut(2300);
            $('div.quiz-end').removeClass('hidden');
            $('.answer-text').addClass('hidden');
            $('button.reset').removeClass('hidden');
            $('div.quiz-end span.report-score').html(countCorrectAnswers + '/10');
            return;
        }

        currentQuestionIndex++;
        if ($('input.correct').is(':checked')) {
            countCorrectAnswers++;
            $('div.answer-window').fadeIn();
            $('div.answer-window').removeClass('hidden');
            $('div p.answer-text').text("Correct answer!");
        } else {
            $('div.answer-window').fadeIn();
            $('div.answer-window').removeClass('hidden');
            $('div p.answer-text').text("Wrong answer! the answer is: " + quiz[currentQuestionIndex - 1].answers[quiz[currentQuestionIndex - 1].correct]);
        }
        renderQa(quiz[currentQuestionIndex]);
        $('div.answer-window').fadeOut(2300);
    });

    $('button.reset').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $('div.quiz-end').addClass('hidden');
        $('div.quiz').removeClass('hidden').removeClass('quiz-end-animation');
        $('div form').removeClass('hidden');
        $('.answer-text').removeClass('hidden');
        $('div.summary').removeClass('hidden');
        currentQuestionIndex = 0;
        countCorrectAnswers = 0;
        renderQa(quiz[currentQuestionIndex]);    
    });

});
