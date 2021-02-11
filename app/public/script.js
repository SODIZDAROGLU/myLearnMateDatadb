$("#form").on("submit", function (event) {
  event.preventDefault();

   var emailChecked = $("#email").val().trim();
  $.get("/api/" + emailChecked, function (data) {
    if (data) {
      console.log(`😆Gotcha!!!..."${emailChecked}"  exists..`);
      $("#error").html("😇Sorry..... Email is already exists!");
      //return ;
    }
  });

  $("#error").html("");
  if (IsEmail(emailChecked) == false) {
    $("#error").html("🙄You have entered an invalid email address!");
    $("#email").val("");
    return false;
  } else {
    $("#error").html("");
    
    var newMember = {
      email: $("#email").val().trim(),
    };
    
    $("#error").html("😄Success..!!!");
    
  
  }

 $.post("/api/new", newMember)
  
  .then(function (data) {
   // Log the data we found
   console.log(data);
  
  });

  // Empty each input box by replacing the value with an empty string
  $("#email").val("");
}); //submit
//EmailValidation
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!regex.test(email)) {
    return false;
  } else {
    return true;
  }
}

