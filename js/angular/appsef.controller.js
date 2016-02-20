app.controller('appsef',['$scope','operacoes', 'Pessoa', function($scope, operacoes, Pessoa){
    $scope.pessoa = new Pessoa();
    console.log(operacoes.somar(10, 10));
    console.log("Entrou controlador 1");
}]);

app.controller('appsef2',['$scope','operacoes','Pessoa',  function($scope, operacoes, Pessoa){
    $scope.pessoa2 = new Pessoa();
    console.log(operacoes.subtrair(10, 10));
    console.log("Entrou controlador 2");
}]);

