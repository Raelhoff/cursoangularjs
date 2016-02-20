app.controller('appcontroller', function($scope){
    $scope.nome = "Curso de Angular da UNIVALI";
    $scope.cursoAngular = function(nome){
        alert("Olá " + nome + "!");
    }
});