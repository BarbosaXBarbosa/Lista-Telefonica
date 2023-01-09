angular.module("listaTelefonica").factory("contatosAPI", function ($http) {
    var _getContatos = function () {
        return $http.get("/angular/back/contatos.php");
    };

    var _saveContato = function (contato) {
        return $http.post("/angular/back/contatos.php");
    };

    return {
        getContatos: _getContatos,
        saveContato: _saveContato
    };
});