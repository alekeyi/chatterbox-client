var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  initialize: function() {
    App.username = window.location.search.substr(10);

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    FormView.initialize();
    RoomsView.initialize();
    
  },

  fetch: function(callback = ()=>{}) {
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
