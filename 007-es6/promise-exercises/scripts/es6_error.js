(function(global) {

  global.__processError = function(error) {
    var client = new VTClient();
    var outputs = client.parse(error.codeFrame);

    var content = '<div class="alert alert-danger">' +
        '<h1>' + error.name + '</h1>' +
        '<h4>' + error.message + '</h4>' +
        '<pre style="background: #808080;">' + convertToHTML(outputs) + '</pre>' +
        '</div>';

    printToConsole(error, outputs);

    document.addEventListener("DOMContentLoaded", function() {
      document.querySelector('body').innerHTML = content;
    });

  };

  function convertToHTML(outputs) {
    var rows = outputs.map(rowToSpan);
    return rows.join("");
  }

  function rowToSpan(row) {
    return '<span style=' + JSON.stringify(row.css) + '>' + row.text + '</span>';
  };

  function printToConsole(error, outputs) {
    var argv = [""];
    for (var i = 0; i < outputs.length; i++) {
      var output = outputs[i];
      argv[0] += '%c' + output.text;
      argv.push(output.css);
    }
    console.group(error.name);
    console.error(error.message);
    console.log.apply(console, argv);
    console.groupEnd();
  }
}(window));
