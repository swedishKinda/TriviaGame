var panel = $("#gamebox");
var panel2 = $("#answers");

$(document).on("click", "#start", function (event) {
    game.start();
});
$(document).on("click", "#done", function (event) {
    game.done();
});

var questions = [{
    question: "Which movie is Jason in?",
    choices: ["Halloween", "Friday the 13th", "Nightmare on Elm Street"],
    correctAnswer: "Friday the 13th"
},
{
    question: "Which movie is Ghostface in?",
    choices: ["Scream", "The Texas Chainsaw Massacre", "Psycho"],
    correctAnswer: "Scream"
},
{
    question: "Which movie is Ash in?",
    choices: ["Evil Dead", "The Omen", "The Shining"],
    correctAnswer: "Evil Dead"
},
{
    question: "Where does the quote 'I see dead people' come from?",
    choices: ["The Others", "Hellraiser", "The Sixth Sense"],
    correctAnswer: "The Sixth Sense"
},
{
    question: "Which movie is a comical zombie flick?",
    choices: ["Scary Movie", "Shaun of the Dead", "Evil Dead"],
    correctAnswer: "Shaun of the Dead"
},
{
    question: "Which movie is Leatherface in?",
    choices: ["The Silence of the Lambs", "Texas Chainsaw Massacre", "Rosemary's Baby"],
    correctAnswer: "Texas Chainsaw Massacre"
},
{
    question: "Which movie involves a poor young girl being possesed?",
    choices: ["The Exorcist", "The Orphanage", "Poltergeist"],
    correctAnswer: "The Exorcist"
}];

var game = {
    correct: 0,
    incorrect: 0,
    timeLeft: 90,

    countdown: function () {
        game.timeLeft--;
        // console.log(game.timeLeft)
        $("#counter-number").html(game.timeLeft);
        if (game.timeLeft === 0) {
            alert("Out of Time!");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#insidecontainer').prepend('<h2>Time Remaining: <span id="counter-number">90</span> Seconds</h2>');
        $("#start").remove();
        // console.log(timer)

        for (var i = 0; i < questions.length; i++) {
            panel.append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].choices.length; j++) {
                panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
            }
        }
        panel.append("<div id='makeBlack'><button class='btn' id='done'>Done!</button></div>");
    },

    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } 
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } 
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } 
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } 
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } 
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } 
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } 
            else {
                game.incorrect++;
            }
        });
        this.results();
    },


    results: function () {
        clearInterval(timer);
        // Can't get end screen to come up
        $("#insidecontainer").remove();
        panel2.append("<h2>Done!</h2>");
        panel2.append("<h3>Right Answers: " + this.correct + "</h3>");
        panel2.append("<h3>Wrong Answers: " + this.incorrect + "</h3>");
        panel2.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
        panel2.append("<h3>Time took: " + (90 - this.timeLeft) + " Seconds")
        console.log(this.incorrect)
        console.log(this.correct)
        console.log(questions.length - (this.incorrect + this.correct))
    }
};