$( document ).ready(function() {

  // Init only once
  $.validateEmail("ev-35f3931d458da40d5a3349e5498bb800");

  // OnClick
  $("#submit").click(function () {
    $("#email").validateEmail(function (response) {
      console.log(response);
    })
  })
});
