(function() {
    function ModalCtrl(Room, $uibModalInstance) {
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