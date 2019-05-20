$(function(){

  $(".money-container img").click(getValue);

  let sum = 0
  let questions = [20.76, 45.29, 10.76, 4.50, 7.90]
  let randomIndex = generateRandomNumber()
  let targetNumber = questions[randomIndex]

  $("#question").text(targetNumber.toFixed(2))


  function getValue(){
    let userChoice = $(this).attr('id');
    let value = parseFloat(userChoice)
    sum = roundAmount(sum + value)

    console.log(sum);

    $("#sum").text(sum.toFixed(2));
  }

  $("#compare").click(compareAnswer);

  function compareAnswer(){
    console.log("Am I right");
    if(targetNumber === sum){
      console.log("Shmoney"); //logic to play soundbit will go here//
      shake();
      sum=0;
      $("#sum").text(sum);
    }else() {
      console.log("Try Again");
    }
  }

  function roundAmount (amount) {
    return (Math.round(amount * 100) / 100)
  }

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

  function generateRandomNumber() {
    return Math.floor(Math.random() * questions.length);
  }

  function tryAgain() {
  alert("Oops! Wrong answer. Please try again");
  }

 });
