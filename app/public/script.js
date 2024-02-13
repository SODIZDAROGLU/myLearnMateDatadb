$("#form").on("submit", function (event) {
  event.preventDefault();
  var emailChecked = $("#email").val().trim();

  if(!IsEmail(emailChecked)){
    $("#error").html("😉..You have entered an invalid email address!!!");
      return;
  }

  $.get("/api/" + emailChecked, function (data) {

    if (data) {
      console.log(`😆Gotcha!!!..."${emailChecked}"  exists..`);

      $("#error").html("😇Sorry..... Email is already exists!");
    }
    
    if (!data && IsEmail(emailChecked) ){
      $("#error").html("😄Success..!!!");
      setTimeout(clearErrorMessage, 5000);
    } 

    function clearErrorMessage() {
      $('#error').fadeOut('slow', function() {
          $(this).empty().show();
      });
  }

  });
     

  var newMember = {
    email: $("#email").val().trim(),
  };

  $.post("/api/new", newMember)
  .then(function (data) {
    // Log the data we found
    console.log(data);
  })  
  .catch(function(error) {
    console.error("Error:", error);
  });

  // Empty each input box by replacing the value with an empty string
  $("#email").val("");

}); //submit
  

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email)
}
