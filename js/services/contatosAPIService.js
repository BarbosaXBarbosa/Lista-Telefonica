angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
    var _getContatos = function () {
        return $http.get(config.baseURL + "/contatos.php");
    };

    var _getContato = function (id) {
        return $http.get(config.baseURL + "/contatos.php/" + id);
    };

    var _saveContato = function (contato) {
        return $http.post(config.baseURL + "/contatos.php",contato);
    };

    return {
        getContatos: _getContatos,
        getContato: _getContato,
        saveContato: _saveContato,
    };
});