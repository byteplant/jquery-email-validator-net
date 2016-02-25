jquery-email-validator-net
=========

A small library providing a wrapper for [api.email-validator.net](http://www.email-validator.net/email-adresse-pruefen-online-api.html) for jQuery

## Installation
  Download zip, extract and embed `jquery.email-validator-net.js` to your HTML.
  This Plugin needs jQuery!
## Usage
See test.js and test.html
  ```js
  // Init only once
  $.validateEmail("ev-35f3931d458da40d5a3349e5498bb800");

  // OnClick
  $("#submit").click(function () {
    $("#email").validateEmail(function (response) {
      console.log(response);
    })
  })
  
  //response looks like that: 
    { 
      status: 200,                      // ==> http://www.email-validator.net/email-verification-results.html
      info: "OK - Valid Address",       // ==> http://www.email-validator.net/email-verification-results.html
      details: "Looong description",    // ==> http://www.email-validator.net/email-verification-results.html
      easyStatus: "VALID"               // VALID, SUSPECT or INVALID (to keep it simple)
    }
    
  });
  ```

## Release History

* 0.1.0 Initial release
