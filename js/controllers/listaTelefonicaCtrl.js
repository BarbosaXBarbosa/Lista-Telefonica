angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http, contatosAPI) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];

    var linkContatos = "/angular/back/contatos.php";
    var linkOperadoras = "/angular/back/operadoras.php";      

    var carregarContatos = function () {
        contatosAPI.getContatos($http).success(function (data) {
            $scope.contatos = data;
        }).error(function (data, status) {
            $scope.message = "Aconteceu um problema: " + data;
        });
    };

    var carregarOperadoras = function () {
        $http.get(linkOperadoras).success(function (data) {
            $scope.operadoras = data;
        });
    };

    $scope.adicionarContato = function (contato) {
        contato.data = new Date();
        contatosAPI.saveContato(contato).success(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $scope.contatos.push(data);
        });
    };
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    carregarContatos();
    carregarOperadoras();
});