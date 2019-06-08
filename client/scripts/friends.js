var Friends = {
    myFriends: [],
  handleBefriend: function(event){      
      Friends.myFriends.push(event.target.innerText);
      MessagesView.initialize();
      Friends.toggleStatus;
  },
  toggleStatus: function(){

  }

};