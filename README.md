# week-4-game
A browser game based on trivia.

// Basic Trivia Game //
// load a series of questions and have a timer that limits the time that the player has to answer all of the questions.//
// each question obv has a right and wrong answer. maybe more than one wrong answer but only one right answer. //
// so the player is scored on the amount of answers they get right. //
// if a player does not answer a question then that also counts as incorrect but has a differnet metric to say how many they left       unanswered. //
    // these questions should only be able to have one answer.
    // but make it so that the user is able to change their answer.
        // so if an answer is already given but they want to change it then make it so that the answer can be changed but wont lof // two answers.



// timers //
   // there should be one timer for the general amount of time the player has//
   // this timer will be attached to the gameState //
        // when the timer runs out the gameState will change to one that prohibits the answering of questions. //

// the HTML should have the amount of rows to the amount of questions that you want. all nested inside a container and set to the       width of the container.
    // inside thosse rows should be two columns both being col-md-12 so that they sit on top of each other. one being the actual question and the other being the buttons with the answers on them.
        // you might need more than one column for the buttons. just so they all fit.
            // ex. the row inside the column for the entire question and the answer buttons.
                // then the two columns (col-md-12) to contain the 1. actual question and 2. the answer column
                    // inside the answer column.
                        // two more rows.
                            // 1. for the top two questions.
                                // button1
                                // button2
                            // 2. for the bottom two questions.
                                // button1
                                // button2

Mock up coding

// this is an array full of objects to be able to be accessed easily//
// questions[i].question = 
// questions[i].answer = 
// questions[i].wrongAnswer1 = 
// questions[i].wrongAnswer2 =
// questions[i].wrongAnswer3 =
    // this is how you would access the question, answer, wrongAnswer[1-3]. easy for putting them into radio buttons.

Questions [{
    question: blah blah blah blah,
    answer: blah,
    wrongAnswer1: blah,
    wrongAnswer2: blah,
    wrongAnswer3: blah
}, {
    question: blah blah blah blah,
    answer: blah,
    wrongAnswer1: blah,
    wrongAnswer2: blah,
    wrongAnswer3: blah
}, {
    question: blah blah blah blah,
    answer: blah,
    wrongAnswer1: blah,
    wrongAnswer2: blah,
    wrongAnswer3: blah
}, {
    question: blah blah blah blah,
    answer: blah,
    wrongAnswer1: blah,
    wrongAnswer2: blah,
    wrongAnswer3: blah
}, {
    question: blah blah blah blah,
    answer: blah,
    wrongAnswer1: blah,
    wrongAnswer2: blah,
    wrongAnswer3: blah
}, {
    question: blah blah blah blah,
    answer: blah,
    wrongAnswer1: blah,
    wrongAnswer2: blah,
    wrongAnswer3: blah
}, {
    question: blah blah blah blah,
    answer: blah,
    wrongAnswer1: blah,
    wrongAnswer2: blah,
    wrongAnswer3: blah
}, {
    question: blah blah blah blah,
    answer: blah,
    wrongAnswer1: blah,
    wrongAnswer2: blah,
    wrongAnswer3: blah
}, {
    question: blah blah blah blah,
    answer: blah,
    wrongAnswer1: blah,
    wrongAnswer2: blah,
    wrongAnswer3: blah
}, {
    question: blah blah blah blah,
    answer: blah,
    wrongAnswer1: blah,
    wrongAnswer2: blah,
    wrongAnswer3: blah
}];

// note that for the challenge mode you could just make the object a switch function that would switch once answered.//

// for the buttons for the possible answers make them radio buttons and only one of them able to be checked at a time.
    // how would you make it so that only one can be chosen at one time?
        // stack overflow says to just make each radio buttons name the exact same. 
        // essentially saying that if all of them have the same name then only one can be selected at a time.
            // do I need to have every single radio button for each question across the board the same? or just the same in each 
            // quesiton block.
// the radio buttons will be easiest for the user to be able to see which answer they have given.

// use bootstrap so you dont have to worry about css if you dont want to or dont have time to.

// how are the questions positioned? 
    // randomly.
        // how do you make them randomly populated?
            // well they are in an array.. and they ARE all in the same index location within each object. so why not make a random number generator for the index numbers?
            // where would they be attached?
            // when attaching them I would probably need to take the possibilities that have been used out of the available
            posibilities.

// random number generator mock up //
// first make everything work then try to randomize, once everything works then try to randomize it. //
    // when you do try to randomize it. make the question possibilities into an array, run a for loop to iterate over the index of the possibilites array, as it iterates over it have the loop choose a button tag to put it onto.
    // or make an array of numbers 0,1,2,3 ( numbers for each one of the buttons) then make a for loop for the array to allow the function to choose a value for each buttons index number
        // the main thing for this one is to randomize the order that the buttons index numbers are in. and assign the questions to each one.

//try to dynamically generate all of the buttons for each question.//
    // just like we did in class when looking at ajax requests.//
    // essentially make a function that makes the creation of a button into a variable. adding a class and id to them.//
        // using this variable with all of the button creations for each answer and wrong answer. (referred to as possible answers from here on.)
        // in the button creation make all of the classes and names for each of the buttons the same so that only one of them can be chosen at a time.

// a single on-click event, put the on click event at the very bottom of the javascript. have it effect all button tags. making them perform a function when they do.





