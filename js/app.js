console.log ("Loaded");

$(".searchbutton").click(function() {
  var userInput = $(".searchshoe").val();

  if (userInput == "Beluga") {
    window.location.replace("beluga.html");
  } else if (userInput == "Turtle Dove") {
    window.location.replace("turtledove.html");
  } else if (userInput == "Trainer" || userInput == "Flyknit Trainer") {
    window.location.replace("trainer.html");
  } else if (userInput == "Royal" || userInput == "Air Jordan 1 Royal") {
    window.location.replace("royal.html");
  };
});
