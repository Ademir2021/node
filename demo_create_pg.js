const Client = require('pg').Client
const client = new Client({
    user: "postgres",
    password: "123",
    host: "localhost",
    port: "5432",
    database: "refresh-token"
})

setUsers("Pedro", "Costa", "abc")

async function setUsers(name, username, password){
    try{
        console.log("iniciando a conexão.!")
        await client.connect()
        console.log("Conexão bem sucedida!")
        await client.query('insert into users("name", "username", "password") values ('+"'"+name+"', '"+username+"', '"+password+"');")
        console.log("User inserido na tabela!")

        const resultado = await client.query("select * from users")
        console.table(resultado.rows)
    }
    catch(ex){
        console.log("Ocorreu um erro no setUsers. Erro: "+ ex)
    }
    finally{
        await client.end()
        console.log("Cliente desconectado.")
    }
}