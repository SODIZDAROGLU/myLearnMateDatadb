$("#form").on("submit", function (event) {
  event.preventDefault();

  var emailChecked = $("#email").val().trim();
  $.get("/api/" + emailChecked, function (data) {
    if (data) {
      console.log(`😆Gotcha!!!..."${emailChecked}"  exists..`);

      $("#error").html("😇Sorry..... Email is already exists!");
    
    }
    if (!data) $("#error").html("😄Success..!!!");
  });

  var newMember = {
    email: $("#email").val().trim(),
  };

  $.post("/api/new", newMember)
  .then(function (data) {
    // Log the data we found
    console.log(data);
  });

  // Empty each input box by replacing the value with an empty string
  $("#email").val("");
}); //submit
