$(document).ready(function(event) {
        // select our input DOM element with a type of file
  var fileInput = document.querySelector('input[type="file"]');
  var hiddenFileForParams = document.querySelector('input[type="hidden"]');

  fileInput.addEventListener('change', function() {
    var fileAsBase64 = convertToBase64(fileInput.files[0], hiddenFileForParams, addImage);
  });

  function convertToBase64(binaryData, hiddenInput, callback) {
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
        document.getElementById('create_profile').onclick = function profilePic(){
          console.log('button click works');
          var imageContainer = document.getElementById('new_image');
          var img = new Image();
          image.src = 'data:image/png;base64,iVBORw0K...';
          image_new.appendChild(image);
      }
    }

  }); // end of document.ready
