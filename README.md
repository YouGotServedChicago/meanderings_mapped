# meanderings_mapped
A travel log and journaling application


The wireframes for our project can be accessed via the following link to [imgur](http://imgur.com/a/m7P3k)!

![homepage](http://i.imgur.com/HbtEaZG.jpg)

## Description

Meanderings Mapped is an app to record travel journal entries.  Users can create profiles, list places they travelled to, and a journal entry or notes for each location.

## Technologies Used
* Sinatra
* SQL
* Javascript
* Ruby
* Ajax
* Google API
* Bootstrap
* HTML/CSS/Sass

## Approach

Our approach to building the app was to first have a conversation in order to determine its basic structure and scope. We mapped out our deliverables via a Trello board so we could identify our MVPs versus our "nice-to-haves". Once we had that in place, we worked on the rough draft of our wireframes. After that, we began working on the coding piece. We worked on setting up the basic Sinatra framework and the file structure of the site first. Then we started working on and researching some of the more involved functionality such as the Google Places API Autocomplete feature and the image upload via Base64. The databases were worked on throughout the project since we ended up modifying some of the table columns as our code came together and solidified. The security piece we had partially completed prior to working on the profiles and we learned very quickly those need to be functioning in their entirety before certain associations such as the foreign keys would be successful. The styling piece was worked on throughout the process of building out our application.

## Unfinished Items
* Conversion of date of birth to age on profile page
* A second Google maps API call to add a location map for each journal entry
