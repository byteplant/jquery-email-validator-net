$( document ).ready(function() {

  // Init only once
  $.validateEmail("YOUR API KEY");

  // OnClick
  $("#submit").click(function () {
    $("#email").validateEmail(function (response) {
      console.log(response);
    })
  })
});
