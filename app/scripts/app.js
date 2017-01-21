(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
        
        $stateProvider
        .state('landing', {
            url:'/',
            controller: 'RoomCtrl as rooms',
            templateUrl: '/room/{id}',
        });
    }
    
    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
        .config(config);
})();