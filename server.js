const express = require('express') //o express irá criar um servidor para mostrar tudo que estamos construindo dentro de um navegador
const app = express() //instanciando

app.set('view engine', 'ejs')

//rota

app.get('/', function(req, res){
  res.render('pages/index')
})

app.get('/sobre', function(req, res){
  res.render('pages/about')
})

app.listen(8080) //localhost:8080/
console.log('rodando')