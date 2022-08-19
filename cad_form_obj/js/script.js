class User{
    constructor(){

        this.id = 0
        this.arrayUsers  = [];
    }

    // lerDados(){
    //    let user = {}
    //    user.id = this.id
    //     // var fm = document.getElementById("fm")
    //     // user.name = String(fm.name.value)
    //     // user.email = String(fm.email.value)
    //     // user.password = String(fm.password.value)
    //      user.name = document.getElementById('name').value;
    //      user.email = document.getElementById('email').value;
    //      user.password = document.getElementById('password').value;
    // return user;
    // }

    lerDados(){
    const botaoAdicionar = document.querySelector("#add");
    botaoAdicionar.addEventListener("click", function(e){
    e.preventDefault()
    });
    let user = {}
        user.id = this.id
        user.name = document.getElementById('name').value;
        user.email = document.getElementById('email').value;
        user.password = document.getElementById('password').value;
        return user
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
        localStorage.setItem('arrayUsers', JSON.stringify(this.arrayUsers));
        console.log(this.arrayUsers)
        var arrayUsers = JSON.stringify(this.arrayUsers)
        const container = document.getElementById('users')
        container.innerHTML =` ${arrayUsers}`
    }

    adicionar(user){
        this.arrayUsers.push(user);
        this.id++;
       // localStorage.setItem('arrayUsers', JSON.stringify(user));
        
    }

}

var user = new User();

user.salvar()

//console.log(JSON.parse(localStorage.getItem('arrayUsers', JSON.stringify(this.arrayUsers)))) 
// let datas = JSON.parse(data)
// console.log(datas)

