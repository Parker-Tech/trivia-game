//shorthand for document.ready(function(){
  //})

$(function(){
  var questions = {
    question1: {
      question: "Why did the chicken cross the road?",
      answer: "To get to the other side.",
      wrongAnswer1:"To eat apples.",
      wrongAnswer2:"To buy the new iPhone.",
      wrongAnswer3:"To buy the S10+, because the chicken is not a iPhone nerd.",
    },
    question2 : {
      question: "What is a Geiger Counter used to detect?",
      answer: "To detect radiation.",
      wrongAnswer1:"To detect earthquakes.",
      wrongAnswer2:"To detect lies.",
      wrongAnswer3:"To detect metal.",
    },
    question3: {
      question: "Which is the tallest mammal?",
      answer: "Giraffe",
      wrongAnswer1:"Whale",
      wrongAnswer2:"Mouse",
      wrongAnswer3:"Baby Elephant",
    },
    question4: {
      question: "Mount Everest is found in which mountain range?",
      answer: "The Himalayas",
      wrongAnswer1:"The Alps",
      wrongAnswer2:"The Rocky Mountians",
      wrongAnswer3:"The Andes",
    }
  }

  var i = 60;
  var questionCount = 0;

  function setQuestion(){
    // $(".question-asked").append(
    //   $("<p></p>").
    // )                 apppend the question based on how many questions that ive asked
  }
  
  $("#start-button").on("click", function(){
    setQuestion();
    setInterval(function() {
      $("#time-remaining").html("Seconds left: " + i);
      i--;
      if(i <= 0){
        nextQuestion();
        //function that puts you to the next question
      }
    }, 1000)
  });

});