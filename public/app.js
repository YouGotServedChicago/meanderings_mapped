$(document).ready(function(event) {

//start Google Maps autocomplete script
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
