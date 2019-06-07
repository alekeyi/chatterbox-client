var MessagesView = {
  messages: {},
  $chats: $('#chats'),
  $userNames: $('.username'),

  initialize: function() {
    //iterate over messages
    $userNames.on('click', Friends.handleBefriend);
    MessagesView.$chats.empty();
    console.log("Appending new messages");
    for(let message of this.messages){
      console.log(message)
      if(App.room === 'Main'){
        let newMessage = MessageView.render({username: message.username, text: message.text});
        this.$chats.append(newMessage);
      }else if(message.roomname === App.room){
        let newMessage = MessageView.render({username: message.username, text: message.text});
        this.$chats.append(newMessage);
      }
      if(!App.rooms.includes(message.roomname)){
        App.rooms.push(message.roomname);
        App.rooms.sort();
      }
    }
  },

  render: function() {
  }

};