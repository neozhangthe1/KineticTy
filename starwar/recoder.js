var page = require('webpage').create();
page.viewportSize = { width: 480, height: 480 };

page.onConsoleMessage = function(msg, lineNum, sourceId) {
  console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
};

page.open('http://localhost:8000/', function () {
  setInterval(function() {
    page.render('/dev/stdout', { format: "png" });
  }, 25);
});
