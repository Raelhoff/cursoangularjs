app.controller('appsef',['$scope','operacoes', function($scope, operacoes){
    console.log(operacoes.somar(10, 10));
}]);

app.controller('appsef2',['$scope','operacoes', function($scope, operacoes){
    console.log(operacoes.subtrair(10, 10));
}]);
