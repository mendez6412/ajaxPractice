// Fill in the jQuery selector function with the appropriate string
// We want to catch the id's for character and info
var character = $()
var info = $()

$.ajax({
  // This url is correct for Luke Skywalker
  url: "http://swapi.co/api/people/1"
}).done(response => {
  // Let's log the response and see what we are receiving from the url
  console.log(response)
  // Next let's apply the information to our jQuery selected elements
  // For the character, let's add their name
  // TODO: use jQuery to apply text to character NOTE: google jQuery .text()

  // For the info link, let's add their URL
  // TODO: use jQuery to apply an attribute NOTE: google jQuery .attr()

})
