app.controller('appngrepeat',function($scope,$window){
   
    $scope.cursos = ['Ciência da Computação',
                     'Engenharia de Computação',
                     'Sistema de Informação',
                     'Engenharia Ambiental',
                     'Engenharia Elétrica'];
    
    $scope.alunos = [];
    $scope.alunos.push(
        {nome:"Rafael Wilmar", idade:25, status:true}
    );

    $scope.alunos.push(
        {nome:"João", idade:21, status:true}
    );
    
    $scope.alunos.push(
        {nome:"Cléber", idade:22, status:false}
    );
    
    $scope.alunos.push(
        {nome:"Angela", idade:45, status:true}
    );
    
    $scope.alunos.push(
        {nome:"Leila", idade:19, status:false}
    );
       
    console.log($scope.cursos);
    console.log($scope.alunos);
    
    $scope.adicionaPessoa = function(){
        var nome =
            document.getElementById('nomepessoa');
        
        var idade =
            document.getElementById('idadepessoa');
        
        var status =
            document.getElementById('statuspessoa');
        
        console.log(nome);
        if(nome == "" || idade == "" || status == ""){
            $window.alert("Preencha todos os campos! " + nome);
        }else{
        
            $scope.alunos.push(
                {nome : nome.value, idade:idade.value, status: status.values}
            );
        
            nome.value = '';
            idade.value = '';
            status.value = '';
        }
    }
    
    
    
    $scope.NomeIdade = function(aluno){
        console.log('Nome: ' + aluno.nome + ' --> Idade: ' + aluno.idade);
        return 'Nome: ' + aluno.nome + ' --> Idade: ' + aluno.idade; 
    }
});