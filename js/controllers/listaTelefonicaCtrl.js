angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http, operadorasAPI) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome: uppercaseFilter("Pedro"), telefone: "9999-8888", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
        {nome: "Ana", telefone: "9999-8877", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
        {nome: "Maria", telefone: "9999-8866", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
    ];

    $scope.operadoras = [];
   
    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().success(function (data) {
            $scope.operadoras = data;
        });
    };

    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
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