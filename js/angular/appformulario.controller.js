app.controller('appformulario',function($scope){
    $scope.estados = ['RS','RO','RR','SC','SP','SE','RJ'];
    $scope.pessoa = novaPessoa();
    
    $scope.pessoas = [];
    $scope.salvarPessoa = function(pessoa){
        $scope.pessoas.push(pessoa);
        $scope.pessoas = novaPessoa();
    }
    console.log($scope.pessoa);
});

   function novaPessoa(){
        return {
            nome:"",
            email:"",
            sexo:"f",
            estado:"SC"
        }
    }