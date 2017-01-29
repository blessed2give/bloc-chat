(function() {
    function RoomCtrl(Room, Message, $stateParams, $cookies) {
        this.messagesByRoom = Message.getByRoomId($stateParams.id);
        var that = this;
        Room.getRoomName($stateParams.id)
            .$loaded()
            .then(function(data) {
                that.currentRoom = data[0];
            });
        this.messageObj = {
            roomId: $stateParams.id,
            content: this.msgContent,
            sendAt: '5:50 pm',
            username: $cookies.get('username')
        };
        
        this.send = Message.send(this.messageObj);
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', '$stateParams', '$cookies', RoomCtrl]);
})();