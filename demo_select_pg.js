const Client = require('pg').Client
const client = new Client({
    user: "postgres",
    password: "123",
    host: "localhost",
    port: "5432",
    database: "refresh-token"
})

getUsers()

async function getUsers(){
try{
    console.log("Iniciando a conexão!")
    await client.connect()
    console.log('Bem sucedida!')
    const resultado = await client.query("select * from users")
    console.table(resultado.rows)
 }
    catch(ex){
    console.log("Ocorreu erro em users", + ex)
    }
    finally{
        await client.end()
        console.log("Cliente desconectado")
    }
}
