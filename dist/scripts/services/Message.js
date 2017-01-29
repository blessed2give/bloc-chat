(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
  
    return {
      getByRoomId: function (roomId) {
        // Filter the messages by their room ID.
        var filteredMsgsRef = ref.orderByChild('roomId').equalTo(roomId);
        return $firebaseArray(filteredMsgsRef);
      },
        send: function (newMessage) {
            messages.$add({
                content: newMessage.content,
                roomId: newMessage.roomId,
                sendAt: newMessage.sendAt,
                username: newMessage.username
            });
        }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();