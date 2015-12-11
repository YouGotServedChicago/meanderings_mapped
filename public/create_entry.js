// var idObject = {};
//
// var id_post = {
//   type: "POST",
//   url: '/entry/create_entry',
//   data: idObject,
//   success: function(dataType){
//     //console.log(idObject['whatever'].toString())
//     console.log(idObject)
//     console.log('successs bithces')
//   },
//   error: function(err){
//     console.log('Didnt work')
//   }
// }
//
// window.onload = function() {
// // start Google Maps script for Autocomplete
//   var autocomplete;
//   var placeNumber;
//
//   // Set the default area bias - (Entire Earth)
//   var defaultBounds = new google.maps.LatLngBounds(
//   new google.maps.LatLng(-90, -180),
//   new google.maps.LatLng(90, 180)
//   );
//
//   var input = document.getElementById("autocomplete")  //Specify textbox
//   var options = {              //Set options for search bar
//     bounds: defaultBounds
//   };
//
//   function initialize(){
//   autocomplete = new google.maps.places.Autocomplete(input,options);
//   autocomplete.addListener('place_changed',getPlaceId);
//   };
//
//   function getPlaceId(){
//     var place = autocomplete.getPlace();
//     placeNumber = place.place_id;
//     console.log(placeNumber);
//     idObject.whatever=placeNumber;
//   };
//
//   btn = document.getElementById("entry_submit");
//   btn.onclick = function(event){
//
//     var user_id = $('#user_id').val();
//     idObject.user_id = user_id;
//     var title = $('#title').val();
//     idObject.title = title;
//     var entry_date = $('#entry_date').val();
//     idObject.entry_date = entry_date;
//     var journal_snippet = $('#journal_snippet').val();
//     idObject.journal_snippet = journal_snippet;
//     console.log(id_post.data)
//     $.ajax(id_post);
//   }
//
//   initialize();
// };
