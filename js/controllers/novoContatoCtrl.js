angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, serialGenerator, $location, operadoras) {
    
    $scope.app = "Lista Telefonica";
    $scope.operadoras = operadoras.data;

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        $scope.contatos.push(contato);
        
        /*contatosAPI.saveContato(contato).success(function (data) {
            
            
            $scope.contatos.push(data);
        })*/;
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
        $location.path("/contatos");
    };
});