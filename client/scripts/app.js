var App = {

  $spinner: $('.spinner img'),
  rooms: [],
  username: 'anonymous',
  initialize: function() {
    App.username = window.location.search.substr(10);
    App.room = 'Main';
    RoomsView.initialize();
    FormView.initialize();
    //Just for the tests
    Rooms.add();
    Friends.toggleStatus();
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      console.log("Fetching");
      MessagesView.messages = data.results;
      MessagesView.initialize();
      RoomsView.initialize();
      callback();
    });
  },

  refresh: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      console.log("Fetching");
      MessagesView.messages = data.results;
      MessagesView.initialize();
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
