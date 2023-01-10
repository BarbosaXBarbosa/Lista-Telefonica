angular.module("listaTelefonica").factory("operadorasAPI", function ($http, config) {
    var _getOperadoras = function () {
        return $http.get(config.baseURL + "/operadoras.php");
    };

    return {
        getOperadoras: _getOperadoras
    };
});

