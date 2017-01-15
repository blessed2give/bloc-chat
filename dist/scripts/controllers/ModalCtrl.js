(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        //var rooms = this;
        //var roomName = this.roomname;
        //var createNewRoom = Room.addRoom(roomName);
        
        //$uibModalInstance.result.then(function(roomName) {
        //    createNewRoom(roomName);
        //});
        
        this.createNewRoom = function() {
            $uibModalInstance.close(this.roomname);
        };
        
        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    };
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();