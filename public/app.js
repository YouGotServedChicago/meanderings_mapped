$(document).ready(function(event) {
  // select our input DOM element with a type of file
    var fileInput = document.querySelector('input[type="file"]');
    var hiddenFileForParams = document.querySelector('input[type="hidden"]');
      fileInput.addEventListener('change', function() {
        var fileAsBase64 = convertToBase64(fileInput.files[0], hiddenFileForParams, addImage);
        // now, you can sent your file over via an $ajax call in that callback
  });
/**
 * convertToBase64
 * @param binaryData: Input data from an <input type="file">
 * @param hiddenInput: input type='hidden' to contain base64
 * @param callback: js method to call when completed
 */
 function convertToBase64(binaryData, hiddenInput, callback) {
  // use a FileReader
  // https://developer.mozilla.org/en-US/docs/Web/API/FileReader
  var reader = new FileReader();
  reader.onload = function (event) {
  // try to read whatever file has been 'readAsDataURL'
    try {
    // event target result is our base64 encoded type
    // this is whatever file has been reader during 'readAsDataURL'
      console.log("File as base 64:");
      console.log(event.target.result);
      // pass our base64 object on to our callback
      hiddenInput.value = event.target.result;
      callback(event.target.result);
      return(event.target.result);
      // catch an error if one occurs...
    }
      catch (ex) {
    // output a warning in the DevTools console
        throw new Error("Couldn't convert file: " + ex);
    }
  }
  // read the file argument
  reader.readAsDataURL(binaryData);
};

    function addImage(base64Image) {
      if (!base64Image) return;
        var imageContainer = document.getElementById('images');
        var img = document.createElement('img');
        img.src = base64Image;
        images.appendChild(img);
    }
  });
