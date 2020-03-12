
const data = [
    {
        question: 'What colour does Mars appear in the night sky?',
        answers: ['Yellow', 'Red', 'Green', 'Pink']
    },
    {
        question: 'What are Saturn\'\s rings mostly made of?',
        answers: ['Sequins', 'Ice, dust and rock', 'Gases', 'None of these']
    },
    {
        question: 'About how old is the Sun?',
        answers: ['7.5 trillion years old', '12.7 million years old', '4.5 billion years old', '100 million years old']

    }
]

// // function renderQa(qa) {
// //     const questionComponents = qa.answers.map(answer => {
// //         return `<input type="checkbox" name="checkbox">
// //             <label for="answer-a">${answer}</label>`
// //     });

// //     questionComponents.unshift(`<p>${qa.question}</p>`);

// //     $('div.question-container div.question').html(questionComponents.join(''));
// }

function renderQa(qa) {
    const questionComponents = qa.answers.map(element => {
        return `<input type="checkbox" name="answer-a" id="checkbox-1">
        <label for="answer-a" id="answer1">${element}</label><br>`
    });
    questionComponents.unshift(`<p id="question">${qa.question}</p>`);
    questionComponents.unshift(`<h3 class="question-header">Question : <span id="question-number"></span></h3>`);
    questionComponents.push(`<h4 class="remaining-question">Remaining questions : <span id="remaining-question-number"></span></h4>`);
    questionComponents.push(`<button type="button" id="submit-answer">Submit</button>`);

    $('form').html(questionComponents);
}


$(document).ready(function () {
    $('.start-quiz-button').on('click', function () {


        event.preventDefault();
        $('.quiz-introduction').hide();
        $('.hide-form').removeClass('hide-form').addClass('question-form');
        $('#question-number').html('1');
        $('#remaining-question-number').html('9');
        renderQa(data[0]);
    });



    // $('.start-quiz-button').on('click', function () {
    //     $('div.quiz-introduction').hide();
    //     $('#form1').addClass('question-form');
    //     renderQa(data[index + 1]);
    // });
    // let countButton = document.getElementById('remaining-question-number');
    // let count = 9;

    // $('#submit-answer').on('click', function () {
    //     count--;
    //     document.getElementById(remaining - question - number) = count;

    // });
});
