angular.module("listaTelefonica").factory("operadorasAPI", function ($http, config) {
    this.getOperadoras = function () {
        return $http.get(config.baseURL + "/operadoras.php");
    };
    
});

