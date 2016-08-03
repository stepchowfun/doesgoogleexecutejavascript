document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('content').innerHTML =
    '<h1>Yes,</h1>' +
    '<h2>' +
      'Google executes JavaScript, even if the script is fetched from ' +
      'the network. However, Google does not make AJAX requests.' +
    '</h2>';

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
        document.getElementById('content').innerHTML = JSON.parse(xmlhttp.responseText).message;
      }
    };
    xmlhttp.open("GET", "/ajax", true);
    xmlhttp.send();
}, false);
