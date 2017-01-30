(function() {
    function RoomCtrl(Room, Message, $stateParams, $cookies) {
        this.messagesByRoom = Message.getByRoomId($stateParams.id);
        var that = this;
        this.loadMessages = function() {
            Room.getRoomName($stateParams.id)
                .$loaded()
                .then(function(data) {
                    that.currentRoom = data[0];
                });   
        };
        this.send = function send() {
            var messageObj = {
                roomId: $stateParams.id,
                content: that.msgContent,
                sendAt: '5:50 pm',
                username: $cookies.get('username')
            }
            Message.send(messageObj)
                .then(function() {
                that.msgContent = '';
                that.loadMessages();
            });
        };
        this.loadMessages();
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', '$stateParams', '$cookies', RoomCtrl]);
})();