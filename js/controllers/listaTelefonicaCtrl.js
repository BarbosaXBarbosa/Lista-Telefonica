angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
    
    console.log(serialGenerator.generate());


    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];
   

    var carregarContatos = function () {
        contatosAPI.getContatos().success(function (data) {
            $scope.contatos = data;
        }).error(function (data, status) {
            $scope.message = "Aconteceu um problema: " + data;
        });
    };

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().success(function (data) {
            $scope.operadoras = data;
        });
    };

    $scope.adicionaContato = function (contato) {

        contato.data = new Date();
        contato.serial = serialGenerator.generate();
        $scope.contatos.push(contato);
        
        /*contatosAPI.saveContato(contato).success(function (data) {
            
            
            $scope.contatos.push(data);
        })*/;
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