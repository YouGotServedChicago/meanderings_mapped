
var idObject = {};
// var idArray =[];
$(document).ready(function(){


// start Google Maps script for Autocomplete
// var autocomplete;
// var placeNumber;
//
// // Set the default area bias - (Entire Earth)
// var defaultBounds = new google.maps.LatLngBounds(
// new google.maps.LatLng(-90, -180),
// new google.maps.LatLng(90, 180)
// );
//
// var input = document.getElementById("autocomplete")  //Specify textbox
// var options = {              //Set options for search bar
//   bounds: defaultBounds
// };
//
// function initialize(){
// autocomplete = new google.maps.places.Autocomplete(input,options);
// autocomplete.addListener('place_changed',getPlaceId);
// };
//
// function getPlaceId(){
//   var place = autocomplete.getPlace();
//   placeNumber = place.place_id;
//   console.log(placeNumber);
//   idObject.whatever=placeNumber;
// };
//
// btn = document.getElementById("entry_submit");
// btn.onclick = function(){
//   title = $('#title').val();
//   idObject.entry_title = title;
//   entry_date = $('#entry_date').val();
//   idObject.entry_date = entry_date;
//   journal_snippet = $('#journal_snippet').val();
//   idObject.journal_snippet = journal_snippet;
//   $.ajax(id_post);
// }
//
// // initialize();
//
// var id_post = {
//   type: "POST",
//   url: '/entry/create_entry',
//   data: idObject,
//   success: function(){
//     console.log('I made a post'),
//     console.log(idObject),
//     console.log(idObject['whatever'].toString())
//   },
//   error: function(){
//     console.log('Didnt work')
//   }
// }

// initialize();

//Google Map by Place ID

function initializeGoogleMaps(){
  var request = {
    placeId: "#<%=@place_id%>"
  };

function callback(place,status){
    if (status == google.maps.places.PlacesServiceStatus.OK){
        var marker = new google.maps.Marker({
           map: map,
           position: place.geometry.location
      });
      map.setCenter(marker.getPosition());
    }
  }

var map = new google.maps.Map(document.getElementById('map-canvas'), {
  zoom: 15
})

service = new google.maps.places.PlacesService(map);
service.getDetails(request, callback);

}

google.maps.event.addDomListener(window,'load',initializeGoogleMaps);



        // select our input DOM element with a type of file
  // var fileInput = document.querySelector('input[type="file"]');
  // var hiddenFileForParams = document.querySelector('input[type="hidden"]');
  //
  // fileInput.addEventListener('change', function() {
  //   var fileAsBase64 = convertToBase64(fileInput.files[0], hiddenFileForParams, addImage);
  // });
  //
  // function convertToBase64(binaryData, hiddenInput, callback) {
  //   var reader = new FileReader();
  //     reader.onload = function (event) {
  //     // try to read whatever file has been 'readAsDataURL'
  //       try {
  //         // event target result is our base64 encoded type
  //         // this is whatever file has been reader during 'readAsDataURL'
  //         console.log("File as base 64:");
  //         console.log(event.target.result);
  //         // pass our base64 object on to our callback
  //         hiddenInput.value = event.target.result;
  //         callback(event.target.result);
  //         return(event.target.result);
  //         // catch an error if one occurs...
  //       }
  //         catch (ex) {
  //           // output a warning in the DevTools console
  //           throw new Error("Couldn't convert file: " + ex);
  //         }
  //       }
  //       // read the file argument
  //       reader.readAsDataURL(binaryData);
  //     };
  //
  // function addImage(base64Image) {
  //   if (!base64Image) return;
  //     var imageContainer = document.getElementById('images');
  //     var img = document.createElement('img');
  //     img.src = base64Image;
  //     images.appendChild(img);
  //       document.getElementById('create_profile').onclick = function profilePic(){
  //         console.log('button click works');
  //         var imageContainer = document.getElementById('new_image');
  //         var img = new Image();
  //         image.src = 'data:image/png;base64,iVBORw0K...';
  //         image_new.appendChild(image);
  //     }
  //   }


  }); // end of document.ready
