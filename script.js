function loadDoc() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://thatsthespir.it/api', true);
  xhr.onload = function() {
    if (this.status == 200) {
      let text = JSON.parse(this.responseText);
      console.log(text);
      let output = '<ul><li><strong>Author:</strong> ' + text.author + '</li>' +
        '<li><strong>Quote:</strong> ' + text.quote + '</li></ul>' +
        '<div><img src="' + text.photo + '" id="profileImg" alt="No image avaible"></div>';
      document.getElementById('text').innerHTML = output;
    }
  };

  xhr.send();
}
