//Housing for my questions and answers
var questionsAnswers = [{

    // objects for trivia

    question: "In Link to the Past, how many descendants must you save before fighting Ganon?",
    choices: ['Five','Seven','Six','Eight'],
    correctAnswer: "Seven"
},{
    question: "Who is Banjo's partner in crime?",
    choices: ['Kazooie','Tootie','Joey','Hootie'],
    correctAnswer: "Kazooie"
},{
    question: "What is the name of the frog in Star Fox?",
    choices: ['Peppy','leon','Slippy','krystal'],
    correctAnswer: "Slippy"
},{
    question: "What Mario game was did Yoshi first appeared?",
    choices: ['Super Mario World','Super Mario Bros','Yoshi Story','Mario 64'],
    correctAnswer: "Super Mario World"
},{
    question: "What is the name of the Orangutan in Donkey Kong 64?",
    choices: ['Chunky','Tiny','Lanky','Cranky'],
    correctAnswer: "Lanky"
},{
    question: "Who seems to always have it out for Kirby?",
    choices: ['Meta Knight','Deedee','Magolor','Gooey'],
    correctAnswer: "Deedee"
},{
    question: "What was the fifth console released? ",
    choices: ['Gamecube','SuperNES','Wii','Sega Saturn'],
    correctAnswer: "Wii"
},{
    question: "Which game was released first? ",
    choices: ['Wario Woods','F-Zero-X','Donkey Kong Land','Pokemon Snap'],
    correctAnswer: "Warrio Woods"
},{
    question: "What was the first Multi-player game on Nintendo? ",
    choices: ['Mario Party','Golden Eye','Pokemon Stadium','Super Smash Brothers Melee'],
    correctAnswer: "Golden Eye"
   
},{
    question: "Which is the best selling game?",
    choices: ['Wii Sports','Pokemon RGBY','Wii Fit','Super Mario Bros'],
    correctAnswer: "Wii Sports"
}]
var panel = $('#quiz-area');

//CLICK EVENTS
// ================================================================

$(document).on('click', '#play', function(){
   game.start();
});
 

$(document).on('click', '#done', function() {
    game.done();
});

// =================================================

// variable game holding the count of correct and incorrect, and the countdown function
var game = {
    correct: 0,
    incorrect: 0,
    counter: 45,
    countdown: function() {
        game.counter--;
        $('#counter-number').html(game.counter);

        if (game.counter === 0) {
            console.log('TIME UP');
            game.done();
        }
    },
    // start function removes the start button and adds the countdown and questions and answers
    start: function() {
        // delays the counter by one second
      document.getElementById('play').style.display = 'none';

        timer = setInterval(game.countdown, 1000);

        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
        $('#start').remove();


        for (var i = 0; i < questionsAnswers.length; i++) {
            panel.append('<h2>' + questionsAnswers[i].question + '</h2>');
            for (var j = 0; j < questionsAnswers[i].choices.length; j++) {
                panel.append('<p><input type="radio" name="question' + '-' + i + '" value="' + questionsAnswers[i].choices[j] + '">' + "     " +questionsAnswers[i].choices[j] + "</p>");
            }
        }

        panel.append('<button class="btn-primary" id="done">Done</button>');
    },

    // done function checks if the checked input is equal to the correct answer. 
    done: function() {

        $.each($("input[name='question-0']:radio"), function() {
            if ($(this).val() == questionsAnswers[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:radio"), function() {
            if ($(this).val() == questionsAnswers[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:radio"), function() {
            if ($(this).val() == questionsAnswers[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:radio"), function() {
            if ($(this).val() == questionsAnswers[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:radio"), function() {
            if ($(this).val() == questionsAnswers[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        // runs result function inside the done function
        this.result();
    },
    // result function stops timer, removes the timer from htm, and prints to the html results!
    result: function() {

        clearInterval(timer);
         document.getElementById('play').style.display = 'block';

        $('#subwrapper h2').remove();
        panel.html('<h2>Times Up!</h2>');
        panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
        panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
        panel.append('<h3>Unanswered: ' + (questionsAnswers.length - (this.incorrect + this.correct)) + '</h3>');
    }

};
function reset() {
    game()

}