if (Meteor.isClient) {
  var client = AlgoliaSearch('CUVJUTD855','575b7edfb8d010db5c73a28811f02a17');
  var index = client.initIndex('vehicules');
  // counter starts at 0
  Session.setDefault('counter', 0);
  //Session.setDefault('content', []);
      index.search('*', function searchDone(error, content) {
    if (error) console.error('Error:', error);
  else {
    Session.setDefault('Content', content);
    console.log('Content:', content);
    
  } 
});

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    content: function () {
      return Session.get('Content');
    }
  });

  Template.hello.events({
    "submit .search_form": function (event) {
    event.preventDefault();
    console.log(event);
      // increment the counter when button is clicked
      //Session.set('counter', Session.get('counter') + 1);
    
    var searched_text = event.target.text.value;
    
    
    //console.log(index);
    console.log('Searching'+searched_text+'vehicules...');
    // search 'hello' in the index
    index.search(searched_text, function searchDone(error, content) {
    if (error) console.error('Error:', error);
  else {
    Session.set('Content', content);
    console.log('Content:', content);
    
  } 
});



    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
