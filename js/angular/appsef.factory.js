app.factory('Pessoa',function(){
    var Pessoa=function(){
        this.nome="José";
        this.idade=31;
        this.cumprimentar=function(){
            return "Olá "+ this.nome + "!";
        }
    }
    return Pessoa;
});