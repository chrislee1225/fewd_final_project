console.log ("Loaded");

$( function() {
    var availableTags = [
      "Adidas Yeezy Boost 350 Turtle Dove",
      "Adidas Yeezy Boost 350 V2 Beluga",
      "Air Jordan 1 Royal",
      "Beluga",
      "Flyknit Trainer",
      "Nike Flyknit Trainer",
      "Royal",
      "Turtledove"
      ];
    $( "#searchshoe" ).autocomplete({
      source: availableTags
    });
  } );

  $('ul.ui-autocomplete').css({
      color: 'red'
  });

$(".searchbutton").click(function() {

  var userInput = $("#searchshoe").val();

  if (userInput == "Beluga" || userInput == "Adidas Yeezy Boost 350 V2 Beluga") {
    window.location.replace("beluga.html");
  } else if (userInput == "Turtledove" || userInput == "Adidas Yeezy Boost 350 Turtle Dove") {
    window.location.replace("turtledove.html");
  } else if (userInput == "Flyknit Trainer" || userInput == "Nike Flyknit Trainer") {
    window.location.replace("trainer.html");
  } else if (userInput == "Royal" || userInput == "Air Jordan 1 Royal") {
    window.location.replace("royal.html");
  };
});
