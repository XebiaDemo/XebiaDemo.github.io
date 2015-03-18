$(function() {
  $(".login--container").removeClass("preload");
  // this.timer = window.setTimeout((function(_this) {
  //   return function() {
  //     return $(".login--container").toggleClass("login--active");
  //   };
  // })(this), 5000);
  // Above code opens the subscribe div by default
  return $(".js-toggle-login").click((function(_this) {
    return function() {
      window.clearTimeout(_this.timer);
      $(".login--container").toggleClass("login--active");
      return $(".login--username-container input").focus();
    };
  })(this));
});