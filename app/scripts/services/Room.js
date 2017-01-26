(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
    var getRoomName = function(roomId) {
        var roomObjRef = ref.child(roomId);
        return $firebaseArray(roomObjRef);
    };  
    
    var addRoom = function(roomname) {
        rooms.$add({ name: roomname });
    };  

    return {
      all: rooms, addRoom: addRoom, getRoomName: getRoomName
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();