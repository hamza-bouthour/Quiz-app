
const data = [
    {
        question: 'What colour does Mars appear in the night sky?',
        answers: ['Yellow', 'Green', 'Pink', 'Purple', 'Red'],
        correct: 4
    },
    {
        question: 'What are Saturn\'\s rings mostly made of?',
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
        answers: ['Our galaxy doesn\'\t move in space at all.', ' Our galaxy moves through space.', 'Our galaxy only spins around in the same spot.', 'The Sun orbits the Earth.', 'The Earth orbits the Moon.'],
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




function renderWrongAnswer() {
    alert('INCORRECT!')
}
function renderCorrectAnswer() {
    alert('corect')
}









var indexForm = 0;
var countQuestions = 1;
var countRemainingQuestions = (9);
var countButton = document.getElementsByClassName("submit-answer");


countButton.onclick = function () {
    indexForm++;
    countQuestions++;
    countRemainingQuestions--;  
   
}



function renderQa(qa) {
    const questionComponents = qa.answers.map((answer, index) => {
        return `<input type="radio"${index === qa.correct ? ' class="correct"' : ''} ${index !== qa.correct ? ' class="incorrect"' : ''} name="answer-a">
        <label for="answer-a">${answer}</label><br>`
    });
    
    questionComponents.unshift(`<p id="question">${qa.question}</p>`);
    questionComponents.unshift(`<h3 class="question-header">Question : <span id="question-number">${countQuestions}</span></h3>`);
    questionComponents.push(`<h4 class="remaining-question">Remaining questions : <span id="remaining-question-number">${countRemainingQuestions}</span></h4>`);
    questionComponents.push(`<input type="submit" name="submit" class="submit-answer" value="Submit">`);
    $('.myForm').html(questionComponents);

}


$(document).ready(function () {
    $('.start-quiz-button').on('click', function () {
        event.preventDefault();
        event.stopPropagation();
        renderQa(data[indexForm]);
        $('.quiz-introduction').hide();
        $('.hide-form').removeClass('hide-form').addClass('question-form');
       
    });


    $("form").on('submit', function (e) {
        event.preventDefault();
        countQuestions++;
        countRemainingQuestions--;
        indexForm++;
        
        
        
        if ($('input.correct').is(':checked')) {
            renderCorrectAnswer();
        }
        if ($('input.incorrect').is(':checked')) {            
            renderWrongAnswer();          
        }
        renderQa(data[indexForm]);       
    });



});

