const Sequelize = require('sequelize')
const sequelize = new Sequelize('test','root','464369',{
    host: "localhost",
    dialect: 'mysql'
})
sequelize.authenticade().then(function(){
    console.log("conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar"+erro)
})