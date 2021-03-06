$(function(){ //shorthand for document.ready(function(){
  var questions = {
    question1: {
      question: "Why did the chicken cross the road?",
      answer: "To get to the other side.",
      wrongAnswer1:"To eat apples.",
      wrongAnswer2:"To buy the new iPhone.",
      wrongAnswer3: "To get to the other side.",
      wrongAnswer4:"To buy the S10+, because the chicken is not a iPhone nerd.",
    },
    question2 : {
      question: "What is a Geiger Counter used to detect?",
      answer: "To detect radiation.",
      wrongAnswer1: "To detect earthquakes.",
      wrongAnswer2: "To detect radiation.",
      wrongAnswer3: "To detect lies.",
      wrongAnswer4: "To detect metal.",
    },
    question3: {
      question: "Which is the tallest mammal?",
      answer: "Giraffe",
      wrongAnswer1: "Whale",
      wrongAnswer2: "Giraffe",
      wrongAnswer3: "Mouse",
      wrongAnswer4: "Baby Elephant",
    },
    question4: {
      question: "Mount Everest is found in which mountain range?",
      answer: "The Himalayas",
      wrongAnswer1: "The Alps",
      wrongAnswer2: "The Rocky Mountians",
      wrongAnswer3: "The Andes",
      wrongAnswer4: "The Himalayas",
    }
  }

  var t = 60;
  var questionCount = 1;
  var questionAnswered = false;
  var whatQuestion;
  var amountCorrect = 0;
  var amountWrong = 0;
  var interval;

  function clearTrivaStage(){
    $("#time-remaining").empty();
    $("#question-asked").empty();
    $("#answer1").empty();
    $("#answer2").empty();
    $("#answer3").empty();
    $("#answer4").empty();
    questionCount++;
    setQuestion(questionCount);
  }

  function setQuestion(questionCount){
    questionAnswered = false;
    whatQuestion = "question" + (questionCount);
    if(questionCount > 4){
      checkEnd();
    }else{
      $("#time-remaining").html("Seconds left: " + t);
    }
    $("#question-asked").text(questions[whatQuestion].question);
    for(i = 1; i < 5; i++){
      var wrongAnsweri = "wrongAnswer" + i;
      $("#answer" + i).text(questions[whatQuestion][wrongAnsweri]);
    }
    t = 60;
    interval = setInterval(function() {
      t--;
      $("#time-remaining").html("Seconds left: " + t);
      if(t <= 0 || questionAnswered == true){
        // questionCount++;
        questionAnswered = false;
        checkEnd();
        setQuestion(questionCount); 
      }
    }, 1000);
  }

  function scoreBoard(){
    //will show amount correct
    $(".trivia-stage").empty();
    var scoreDiv = $("<div>").html("<h3>Amount Correct: " + amountCorrect + "</h3><br><h3>Amount Wrong: " + amountWrong + "</h3>")
    $(".trivia-stage").append(scoreDiv);
  }

  function checkEnd(){
    if(whatQuestion == "question4"){
      setTimeout(scoreBoard, 1000);
    }
  }
  
  $("#start-button").on("click", function(){
    //probably delete start button here
    $(".empty-start-class").empty();
    questionAnswered = false;
    $("#time-remaining").text("Seconds left: " + t);
    setQuestion(questionCount);
  });

  $(document).on("click", ".trivia-answer", function(){
    // check if selected answer is right or wrong
    t = 60;
    questionAnswered = true;
    if($(this).text() == questions[whatQuestion].answer){
      $("#question-asked").html("<h1>CORRECT</h1>");
      clearInterval(interval);   
      amountCorrect++;
      checkEnd();
      setTimeout(clearTrivaStage, 2000);
    }else{
      $("#question-asked").html("<h1>WRONG</h1>");
      clearInterval(interval);
      amountWrong++;
      checkEnd();
      setTimeout(clearTrivaStage, 2000);
    }
  })

});