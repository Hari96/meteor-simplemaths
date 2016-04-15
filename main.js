$(document).ready(function() {
  var counter = 0; // keeps track of number of problems tried
  var answer = 0, feedbackStr = "";
  var countCorrect = 0; // keeps track of number of problems answered correctly
  $("#ans-input").val("");
  $(".op").html("");
  $("#try").click(function (){
    // produce new problem
    $(".op").html("");
    $("#ans-input").val("");
    $(".left-num").html("");
    $(".right-num").html("");
    $("#feedback").html("").css("background", "white");
    var leftNum = Math.floor((Math.random() * 9) + 1);
    var rightNum = Math.floor((Math.random() * 9) + 1);
    var opNum = Math.floor((Math.random() * 4) + 1);
    $(".left-num").html(leftNum);
    $(".right-num").html(rightNum);
    switch(opNum) {
      case 1:
        $(".op").append('<img src="multiply.png">');
        answer = leftNum * rightNum;
        break;
      case 2:
        $(".op").append('<img src="divide.png">');
        answer = Math.round((leftNum / rightNum) * 100) / 100;
        break;
      case 3:
        $(".op").append('<img src="plus.png">');
        answer = leftNum + rightNum;
        break;
      case 4:
        $(".op").append('<img src="minus.png">');
        answer = leftNum - rightNum;
        break;
    }
  });

  $("#submit").click(function (){
  // check answer, produce output for feedback box
    counter ++;
    var inAns = $("#ans-input").val();
    if (inAns == answer) {
      countCorrect ++;
      feedbackStr = "Well done, answer was correct. You have got " + countCorrect + " correct out of " + counter + " attempted";
      $("#feedback").html(feedbackStr).css("background", "lightgreen");
    }
    else {
      feedbackStr = "Sorry that answer was wrong, correct answer is " + answer + ". You have got "
      + countCorrect + " correct out of " + + counter + " attempted";
      $("#feedback").html(feedbackStr).css("background", "tomato");
    }
  });
  $("#clear").click(function (){
    if (counter < 5) {
      feedbackStr = "You did not try very many problems, but you got a score of " + countCorrect + " out of " + counter + ".";
    }
    else if (countCorrect >= counter * 0.75) {
      feedbackStr = "Congratulations - you did great - with a score of " + countCorrect + " out of " + counter + ".";
    }
    else if (countCorrect < (counter * 0.75) && countCorrect >= (counter * 0.6)) {
      feedbackStr = "Well done - a reasonable effort - with a score of " + countCorrect + " out of " + counter + ".";
    }
    else if (countCorrect < (counter * 0.6) && countCorrect >= (counter * 0.4)) {
      feedbackStr = "Good try - some work required - you scored " + countCorrect + " out of " + counter + ".";
    }
    else {
      feedbackStr = "Well now - you need a lot more practice - you scored " + countCorrect + " out of " + counter + ".";
    }
    $(".op").html("");
    $("#ans-input").val("");
    $(".left-num").html("");
    $(".right-num").html("");
    $("#feedback").html(feedbackStr).css("background", "aqua");
    counter = 0;
    countCorrect = 0;
  });
});
// Text for feedback box:
// "Well done, answer was correct. You have got " + countCorrect + " correct out of " + counter + " attempted"
// "Sorry that answer was wrong, correct answer is: " + answer + ". You have got "
// + counterCorrect + " correct out of " + + counter + " attempted"
