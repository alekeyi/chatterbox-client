var MessagesView = {
  messages: {},
  $chats: $('#chats'),
  $userNames: "",

  initialize: function() {
    //iterate over messages
    MessagesView.$chats.empty();
    for(let message of this.messages){
      if(App.room === 'Main'){
        MessagesView.renderMessage(message);
      }else if(message.roomname === App.room){
        MessagesView.renderMessage(message);
      }
      //@todo: move this
      if(!App.rooms.includes(message.roomname)){
        App.rooms.push(message.roomname);
        App.rooms.sort();
      }
    }
    MessagesView.$userNames = $('.username');
    MessagesView.$userNames.on('click', (event)=>{Friends.handleBefriend(event)});

  },

  renderMessage: function(messageObject) {
    let messageHTML;
    if(Friends.myFriends.includes(messageObject.username)){
      
      messageHTML = MessageView.renderFriend(
        {username: messageObject.username, 
          text: messageObject.text});
    } else {
      messageHTML = MessageView.render(
        {username: messageObject.username, 
          text: messageObject.text});
    }
    
    $('#chats').append(messageHTML);
  }

};