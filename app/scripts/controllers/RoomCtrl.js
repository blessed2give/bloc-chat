(function() {
    function RoomCtrl(Room, $uibModal, Message) {
        this.chatRooms = Room.all;
        this.activeRoomName = null;
        this.messagesByRoom = Message.getByRoomId($stateParams.id); //$stateParams.id
        
        this.newRoom = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
                size: 'sm'
            });
            
            modalInstance.result.then(function(roomname) {
                Room.addRoom(roomname);
            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', 'Message', RoomCtrl]);
})();