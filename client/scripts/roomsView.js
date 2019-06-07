var RoomsView = {

  $roomButton: $('#roomButton'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.populateRoomSelector();
    RoomsView.$roomButton.on('click', RoomsView.handleAddRoom);
    RoomsView.$select.on('change', RoomsView.handleRoomSelect);
  },

  handleAddRoom: function(event) {
    App.room = document.getElementById("roomName").value;
    App.rooms.push(App.room);
    RoomsView.populateRoomSelector();
    console.log('App.room', App.room);
  },

  populateRoomSelector: function(){
    console.log('App.rooms', App.rooms);
    // console.log('RoomsView.$select', RoomsView.$select);
    RoomsView.$select.empty();
    RoomsView.$select.append($(`<option value='Main'>Main Room</option>`));
    for(let room of App.rooms){
      RoomsView.$select.append($("<option></option>").attr("value", room).text(room));
      console.log('room', room);
    }
  },

  handleRoomSelect: function(event){
    App.room = event.target.value;
    MessagesView.initialize();
    // RoomsView.populateRoomSelector();
  },

  render: function() {
    
  }

  

  
};
