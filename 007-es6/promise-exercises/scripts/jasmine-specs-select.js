(function () {
  "use strict";

  var currentWindowOnload = window.onload;

  function findMenuAndClick(count) {
    if (count <= 0) {
      return;
    }

    if (document.querySelector('.jasmine-spec-list-menu')) {
      document.querySelector('.jasmine-spec-list-menu').click();
    } else if(count > 0) {
      setTimeout(function() {
        findMenuAndClick(count - 1);
      }, 50);
    }
  }

  window.onload = function () {
    if (currentWindowOnload) {
      currentWindowOnload();
    }

    var url = window.location.href;
    if (url.indexOf('spec=') == -1) {

      findMenuAndClick(100)
    }
  };
})();