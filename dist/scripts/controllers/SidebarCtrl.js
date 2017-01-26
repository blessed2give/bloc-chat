(function() {
    function SidebarCtrl(Room, $uibModal) {
        this.chatRooms = Room.all;
        
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
        .controller('SidebarCtrl', ['Room', '$uibModal',  SidebarCtrl]);
})();