(function() {
    function ModalCtrl($uibModal, Room) {
        this.newRoom = Room.addRoom();
        
        $uibModal.open({
            templateUrl: 'app/templates/modal.html',
            controller: 'ModalCtrl as $modal'
        })
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', ModalCtrl]);
})();