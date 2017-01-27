(function() {
    function CookieCtrl($uibModalInstance) {
        this.setUsername = function() {
            $uibModalInstance.close(this.username);
        };
    };
    
    angular
        .module('blocChat')
        .controller('CookieCtrl', ['$uibModalInstance', CookieCtrl]);
})();