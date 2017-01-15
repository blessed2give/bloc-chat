(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    
    var addRoom = function(roomname) {
        rooms.$add({ name: roomname });
    };  

    return {
      all: rooms, addRoom: addRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();