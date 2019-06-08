var RoomsView = {

  $roomButton: $('#roomButton'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.populateRoomSelector();
    RoomsView.$roomButton.on('click', RoomsView.handleAddRoom);
    RoomsView.$select.on('change', RoomsView.handleRoomSelect);
  },

  handleAddRoom: function(event) {
    console.log("Room added button")
    App.room = document.getElementById("roomName").value;
    App.rooms.push(App.room);
    RoomsView.populateRoomSelector();
    RoomsView.$select.val(App.room);
    MessagesView.initialize();
    Rooms.add();
  },

  populateRoomSelector: function(){
    RoomsView.$select.empty();
    // RoomsView.$select.append($(`<option value='Main'>Main Room</option>`));
    for(let room of App.rooms){
      RoomsView.$select.append($("<option></option>").attr("value", room).text(room));
    }
  },

  handleRoomSelect: function(event){
    App.room = event.target.value;
    MessagesView.initialize();
  },

  renderRoom: function(roomName) {
    App.rooms.push(roomName);
    RoomsView.$select.append($("<option></option>").attr("value", roomName).text(roomName));
  }

  

  
};
