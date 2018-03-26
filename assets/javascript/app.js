// window on load. so that nothing happens before everything is loaded //
$(document).ready( function () {

    // initial array of objects. //
    var questions = [{
        Question: "What is the name of the test used to measure the performance of lossless compression engines?",
        choices: ["Size test", "Keirsey Test", "Weissman Test", "Eysenck Test"],
        rightanswer: "Weissman Test"
    }, {
        Question: "what is the name that gilfoyle gives to his server?",
        choices: ["Anton", "Lucifer", "Mini Me", "Nothing it's a server!"],
        rightanswer: "Anton"
    }, {
        Question: "what is Pied Piper?",
        choices: ["A Music Player", "A Search Engine", "Gilfoyles nickname","A Compression Engine"],
        rightanswer: "A Compression Engine"
    }, {
        Question: "What is the name of the venture capital firm that funded Richards company?",
        choices: ["Golden Gate Ventures", "Raviga", "GGV Capital", "Advanced Technology Ventures"],
        rightanswer: "Raviga"
    }, {
        Question: "What language does jared speak in his sleep?",
        choices: ["Polish", "German", "Swedish", "French"],
        rightanswer: "German"
    }, {
        Question: "What is Jareds real name?",
        choices: ["Jared", "Richard", "Donald", "Gavin"],
        rightanswer: "Donald"
    }, {
        Question: "Gilfoyle was an undocumented immagrant from which country?",
        choices: ["Sweden", "Germany", "Russia", "Canada"],
        rightanswer: "Canada"
    }, {
        Question: "What type of furniture was pied piper compared to in the promotional video?",
        choices: ["a table", "a chair", "a door", "a stool"],
        rightanswer: "a table"
    }, {
        Question:  "who is Richards “girlfriend”?",
        choices: ["Big Head", "His Phone", "His Inhaler", "His Computer"],
        rightanswer: "His Computer"
    }, {
        Question: "How much did Gavin belson initially offer for pied piper?",
        choices: ["$1,000,000", "$600,000", "$10,000,000", "$500,000"],
        rightanswer: "$600,000"
    }];

    // variables - pointer variables and others //
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var timer;
    var timeOut;
    var startButton = $("#start-button");
    var submitButton = $("#submit-button").hide();
    var resetButton = $("#reset-button").hide();
    var radioButtons = $("#radio-group").hide();
    var questionText = $("#questionText").hide();
    var endGameText = $("#endGame").hide();
    var scoreText = $("#scoreText").hide();
    var index = 0;
    var userChoice = $('input[name=posAnswer]:checked').val();
    


    /////////////////////////////////////////////////////////////////////////////////////////
    // timer functions //
    function countdownTimer() {
        timer = 20;
        clearInterval(timeOut);
        timeOut = setInterval(decrement, 1000);
    };

    function decrement() {
        timer--;
        $(".timer").html(timer);
        
        if (timer === 0) {
            stopTimer();
            index++;
            incorrectAnswers++;
            gamePlay();
            alert("Gotta be quicker!!");
        }

    };

    function stopTimer() {
        clearInterval(timeOut);
    };



    ////////////////////////////////////////////////////////////////////////////////////////////
    // function for the actual gameplay //
    function gamePlay() {
        countdownTimer();
        $("#submit-button").prop("disabled", true);
        $('.posAnswer').prop('checked', false);
        $("#questionText").html(questions[index].Question)
        $("#radio-one").val(questions[index].choices[0]);
        $("#posOne").text(questions[index].choices[0]);
        $("#radio-two").val(questions[index].choices[1]);
        $("#posTwo").text(questions[index].choices[1]);
        $("#radio-three").val(questions[index].choices[2]);
        $("#posThree").text(questions[index].choices[2]);
        $("#radio-four").val(questions[index].choices[3]);
        $("#posFour").text(questions[index].choices[3]);
          
    };



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // end game //
    function endGame () {
        if (correctAnswers < 5) {
            $("#endGame").html("Not very good! Try Again!");
            $("#scoreText").html("You got " + correctAnswers + " questions right and " + incorrectAnswers + " wrong!");
        }
        else if ((correctAnswers > 5)&&(correctAnswers < 8)) {
            $("#endGame").html("Not bad. You can do better! Try again!!");
            $("#scoreText").html("You got " + correctAnswers + " questions right and " + incorrectAnswers + " wrong!");
        }
        else if ((correctAnswers >= 8)&&(correctAnswers <10 )) {
            $("#endGame").html("That's pretty good, But you can do better! Try again!!");
            $("#scoreText").html("You got " + correctAnswers + " questions right and " + incorrectAnswers + " wrong!");
        }
        else if (correctAnswers === 10) {
            $("#endGame").html("Whoa! Perfect Score!!!");
            $("#scoreText").html("You got " + correctAnswers + " questions right and " + incorrectAnswers + " wrong!");
        }

    }
    


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // on click events for the buttons. ///
    startButton.on("click", function() {
        startButton.hide();
        $(".timer").show();
        questionText.show();
        radioButtons.show();
        submitButton.show();
        countdownTimer();
        gamePlay();
        

    });

    submitButton.on("click", function() {
        stopTimer();
        if (userChoice === questions[index].rightanswer) {
            correctAnswers++;
            console.log("its working and right answer");
        } else if (userChoice != questions[index].rightanswer) {
            incorrectAnswers++;
            console.log("its still working but wrong answer")
        };
        index++;
        
        if (index < questions.length) {
            gamePlay();
        } 
        else if (index === questions.length) {
            stopTimer();
            questionText.hide();
            radioButtons.hide();
            submitButton.hide();
            endGameText.show();
            scoreText.show();
            resetButton.show();
            $(".timer").hide();
            endGame();
        };
        
    });
    
    resetButton.on("click", function() {
        questionText.hide();
        resetButton.hide();
        startButton.show();
        endGameText.hide();
        scoreText.hide();
        incorrectAnswers = 0;
        correctAnswers = 0;
        index = 0;
        endGame();
    
    });
    
    radioButtons.on("click", function() {
        userChoice = $('input[name=posAnswer]:checked').val();
        $("input:radio").change(function () {$("#submit-button").prop("disabled", false);});
        
    });
        
});



  