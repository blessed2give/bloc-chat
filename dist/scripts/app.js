(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: fasle
        });
        
        $stateProvider
        .state('landing', {
            url:'/',
            //controller: "",
            templateUrl: ""
        });
    }
    
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();