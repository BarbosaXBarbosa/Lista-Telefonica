angular.module("listaTelefonica").filter("name", function () {
    return function (input) {
        var listaDeNome = input.split(" ");
        listaDeNomeFiltrada = listaDeNome.map(function (nome) {
            if (/(da|de|das|dos| )/.test(nome)) return nome;
            return nome.charAt(0).toLowerCase() + nome.substring(1).toUpperCase();
        });
        return listaDeNomeFiltrada.join(" ");
    };
});