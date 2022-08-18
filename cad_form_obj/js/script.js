class User{
    constructor(){
        this.id = 0;
        this.arrayUsers  = [];
    }

    lerDados(){
       let user = {}
       user.id = this.id
        // var fm = document.getElementById("fm")
        // user.name = String(fm.name.value)
        // user.email = String(fm.email.value)
        // user.password = String(fm.password.value)
         user.name = document.getElementById('name').value;
         user.email = document.getElementById('email').value;
         user.password = document.getElementById('password').value;
        
    
    return user;
    }


    validaCampos(user){
        let msg = ''
        if(user.name == ''){
            msg += '- Digite o seu nome\n';
        }
        if(user.email == ''){
            msg += '- Digite seu email\n';
        }
        if(user.password == ''){
            msg += "- Digite sua senha\n";
        }
        if(msg != ''){
            alert(msg)
            return false
        }
        return true
    }

    salvar(){
        let user = this.lerDados();

        if(this.validaCampos(user)){
            this.adicionar(user);
        }
        console.log(this.arrayUsers)
    }

    adicionar(user){
        this.arrayUsers.push(user);
        this.id++;
    }
    
}

var user = new User();





