$(function(){

  $(".money-container img").click(getValue);

  let sum = 0
  let questions = [20.76, 45.29, 10.76, 4.50, 7.90]
  // let randomIndex = generateRandomNumber()
  let questionIndex = generateRandomNumber()
  let targetNumber


  // call prepareQuestion
  // display first question when application loads up
  prepareQuestion(questionIndex)

  // function that picks a targetNumber and displays
  // on the screen
  function prepareQuestion(index) {
    // set new targetNumber
     targetNumber = questions[index]
     console.log(targetNumber);
    // display number
    $("#question").text(targetNumber.toFixed(2))

  }



  function getValue(){
    let userChoice = $(this).attr('id');
    let value = parseFloat(userChoice)
    sum = roundAmount(sum + value)

    console.log(sum);

    $("#sum").text(sum.toFixed(2));
    removeShake()
  }

  $("#compare").click(compareAnswer);

  function compareAnswer(){
    console.log("Am I right");
    if(targetNumber === sum){
      console.log("Shmoney"); //logic to play soundbit will go here//
      shake();
      questionIndex = generateRandomNumber();
      // reset sum to zero
      sum=0;
      $("#sum").text(sum);

      // increment questionIndex by 1
      // questionIndex = questionIndex + 1
      prepareQuestion(questionIndex)

      // reassiging targetNumber to next number in questions array
      //targetNumber = questions[questionIndex]

      // display new target number to the page
      //$("#question").text(targetNumber.toFixed(2))
      // randomQuestion()


    }else {
      console.log("Try Again");
      tryAgain();
    }
  }

  function roundAmount (amount) {
    return (Math.round(amount * 100) / 100)
  }

  // function randomQuestion(){
  //   for ( let randomIndex = 0; randomIndex < questions.length; randomIndex++) {
  //   console.log(questions[randomIndex]);
  //   }
  // }

  $("#reset").click(reset);

  function reset(){
    sum=0;
    console.log("reset game");
    $("#sum").text(sum);
  }

  function shake(){
    console.log("shake pig");
    $('.bank-container img').addClass('animated shake delay-500ms')
  }

  function removeShake(){
    $('.bank-container img').removeClass('animated shake delay-500ms')
  }

  function generateRandomNumber() {
    return Math.floor(Math.random() * questions.length);
  }

  function tryAgain() {
  alert("Oops! Wrong answer. Please try again");
  }

  // function shuffle(questions) {
  //  return questions.sort(() => Math.random() - 0.5);
  // }

 });
