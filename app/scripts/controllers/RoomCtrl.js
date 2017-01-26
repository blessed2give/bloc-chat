(function() {
    function RoomCtrl(Room, Message, $stateParams) {
        this.messagesByRoom = Message.getByRoomId($stateParams.id);
        var that = this;
        Room.getRoomName($stateParams.id)
            .$loaded()
            .then(function(data) {
                that.currentRoom = data[0];
            });
        
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', '$stateParams', RoomCtrl]);
})();