(function ( $ ) {
  var baseUrl = "https://api.email-validator.net/api/verify"

  $.validateEmail = function(apiKey){
    var apiKey = apiKey
    $.fn.validateEmail = function(cb) {
      console.log(apiKey, baseUrl);
      var email = this.val();
      $.get(baseUrl + "?EmailAddress=" + email + "&APIKey=" + apiKey, $.proxy(function (res) {
        if (/2[0-9]{2}/g.test(res.status)) {
          this.css('border-color', 'green');
          res['easyStatus'] = "VALID"
        } else if (/3[0-9]{2}/g.test(res.status)) {
          this.css('border-color', 'orange');
          res['easyStatus'] = "SUSPECT"
        } else if (/4[0-9]{2}/g.test(res.status)) {
          this.css('border-color', 'red');
          res['easyStatus'] = "INVALID"
        } else if (/1[0-9]{2}/g.test(res.status)) {
          this.css('border-color', 'black');
          res['easyStatus'] = "INDETERMINATE"
        }
        cb(res)
      }, this));
      return this;
    };
  }
}( jQuery ));
