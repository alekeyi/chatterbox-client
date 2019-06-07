var MessagesView = {
  messages: {},
  $chats: $('#chats'),

  initialize: function() {
    //iterate over messages
    MessagesView.$chats.empty();
    console.log("Appending new messages");
    for(let message of this.messages){
      let newMessage = MessageView.render({username: message.username, text: message.text});
      this.$chats.append(newMessage);
    }
  },

  render: function() {
  }

};