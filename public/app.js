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
var imageContainer = document.getElementById('profile_pic');
var img = document.createElement('img');
img.src = base64Image;
profile_pic.appendChild(img);
  document.getElementById('create_profile').onclick = function profilePic(){
    console.log('button click works');
    var imageContainer = document.getElementById('new_image');
    var img = new Image();
    image.src = 'data:image/png;base64,iVBORw0K...';
    image_new.appendChild(image);
}
} // end addImage function


// start Google Maps autocomplete script
var idObject = {};
var idArray =[];

var autocomplete;
var placeNumber;

// Set the default area bias - (Entire Earth)
var defaultBounds = new google.maps.LatLngBounds(
new google.maps.LatLng(-90, -180),
new google.maps.LatLng(90, 180)
);

var input = document.getElementById("autocomplete")  //Specify textbox
var options = {              //Set options for search bar
  bounds: defaultBounds
};

function initialize(){
autocomplete = new google.maps.places.Autocomplete(input,options);
autocomplete.addListener('place_changed',getPlaceId);
};

function getPlaceId(){
  var place = autocomplete.getPlace();
  placeNumber = place.place_id;
  console.log(placeNumber);
  var idArray = [];
  idObject.whatever=idArray;
  idArray.push(placeNumber);
  console.log(idObject['whatever'].toString());
  newP = document.createElement("p");
  newP.setAttribute("name","the_place_id");
  newContent = document.createTextNode(idObject['whatever'].toString());
  newP.appendChild(newContent);
  currentDiv = document.getElementById("entry_form");
  currentDiv.appendChild(newP);
};

btn = document.getElementById("entry_submit");
btn.onclick = function(){
  $.ajax(id_post);
}

var id_post = {
  type: "POST",
  url: '/get_place_id',
  data: idObject,
  success: function(){
    console.log('I made a post'),
    console.log(idObject),
    console.log(idObject['whatever'].toString())
    // newP = document.createElement("p"),
    // newP.setAttribute("name","the_place_id"),
    // newContent = document.createTextNode(idObject['whatever'].toString());
    // newP.appendChild(newContent),
    // currentDiv = document.getElementById("the_div"),
    // currentDiv.appendChild(newP)
  },
  error: function(){
    console.log('Didnt work')
  }
}

initialize();

}); // end of document.ready
