// window on load. so that nothing happens before everything is loaded //
$(document).ready( function () {

// initial array of objects. //
var questions = [{
    Question: "What is the name of the test used to measure the performance of lossless compression engines?",
    choices: ["Size test", "Keirsey Test", "Weissman test", "Eysenck Test"],
    rightanswer: 2
}, {
    Question: "what is the name that gilfoyle gives to his server?",
    choices: ["Anton", "Lucifer", "Mini Me", "Nothing it's a server!"],
    rightanswer: 0
}, {
    Question: "what is Pied Piper?",
    choices: ["A Music Player", "A Search Engine", "Gilfoyles nickname","A Compression Engine"],
    rightanswer: 3
}, {
    Question: "What is the name of the venture capital firm that funded Richards company?",
    choices: ["Golden Gate Ventures", "Raviga", "GGV Capital", "Advanced Technology Ventures"],
    rightanswer: 1
}, {
    Question: "What language does jared speak in his sleep?",
    choices: ["Polish", "German", "Swedish", "French"],
    rightanswer: 1
}, {
    Question: "What is Jareds real name?",
    choices: ["Jared", "Richard", "Donald", "Gavin"],
    rightanswer: 2
}, {
    Question: "Gilfoyle was an undocumented immagrant from which country?",
    choices: ["Sweden", "Germany", "Russia", "Canada"],
    rightanswer: 3
}, {
    Question: "What type of furniture was pied piper compared to in the promotional video?",
    choices: ["a table", "a chair", "a door", "a stool"],
    rightanswer: 0
}, {
    Question:  "who is Richards “girlfriend”?",
    choices: ["Big Head", "His Phone", "His Inhaler", "His Computer"],
    rightanswer: 3
}, {
    Question: "How much did Gavin belson initially offer for pied piper?",
    choices: ["$1,000,000", "$600,000", "$10,000,000", "$500,000"],
    rightanswer: 1
}];

// variables //
var correctAnswers;
var incorrectAnswers;
var timer = 30;
var timeOut;
var startButton = $("#start-button");
var submitButton = $("#submit-button").hide();
var resetButton = $("#reset-button").hide();
var radioButtons = $("#radio-group").hide();
var questionText = $("#questionText").hide();
var index = 1;




// function for the timer. //
function countdownTimer() {
    timer = 30;
    clearInterval(timeOut);
    timeOut = setInterval(decrement, 1000);
}

function decrement() {
    timer--;
    $(".timer").html(timer);
        
    if (timer === 0) {
        stopTimer();
        index++;
        alert("Gotta be quicker!!");
    }

}

function stopTimer() {
    clearInterval(timeOut);
}



// function for the actual gameplay //
function gamePlay() {
    
    $("#questionText").html(questions[0].Question)
    $("#posOne").html(questions[0].choices[0]);
    $("#posTwo").html(questions[0].choices[1]);
    $("#posThree").html(questions[0].choices[2]);
    $("#posFour").html(questions[0].choices[3]);
    
};

function checkAnswers() {
    if ($("#posThree") === questions[0].rightanswer) {
        console.log("true");
    }
    // checks the answer depending on which radio button is selected.
    // use an if statement to see which radio button is selected.
    // check that against the question.answer

};

// on click events for the buttons. ///
startButton.on("click", function() {
    startButton.hide();
    $(".timer").show();
    questionText.show();
    radioButtons.show();
    submitButton.show();
    countdownTimer();
    gamePlay();
    
    // needs to propogate the first question in the for loop, maybe call the submit button?
    // call the countdownTimer function.
    // calls the gamePlay function.

});
submitButton.on("click", function() {
    // resetButton.show();
    stopTimer();
    
    index++;
    if (index < questions.length) {
        $("#questionText").html(questions[index].Question);
        $("#posOne").html(questions[index].choices[0]);
        $("#posTwo").html(questions[index].choices[1]);
        $("#posThree").html(questions[index].choices[2]);
        $("#posFour").html(questions[index].choices[3]);
        countdownTimer();
    }    
    
    if( index === questions.length ) {
        stopTimer();
        questionText.hide();
        radioButtons.hide();
        submitButton.hide();
        resetButton.show();
        $(".timer").hide();
        
        // call the end screen function
        
    }
    
          
});

resetButton.on("click", function() {
    questionText.hide();
    resetButton.hide();
    startButton.show();
    // this button resets the entire game.
    
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

});

 


 

  