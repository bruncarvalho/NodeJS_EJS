const express = require('express') //o express irá criar um servidor para mostrar tudo que estamos construindo dentro de um navegador
const app = express() //instanciando

app.set('view engine', 'ejs')

//rota

app.get('/', function(req, res){
  const items = [
    {
      title: 'D',
      message: 'esenvolver aplicações/serviços de forma fácil'
    },
    {
      title: 'E',
      message: 'JS usa JavaScript para renderizar HTML'
    },
    {
      title: 'M',
      message: 'uito fácil de usar'
    },
    {
      title: 'A',
      message: 'morzinho'
    },
    {
      title: 'I',
      message: 'nstall ejs'
    },
    {
      title: 'S',
      message: 'intaxe simples'
    },
  ]

  const subtitle = 'Uma linguagem de modelagem para a criação de páginas HTML utilizando JavaScript.'
  res.render('pages/index', {
    qualidades: items, 
    subtitle: subtitle,
  })
})

app.get('/sobre', function(req, res){
  res.render('pages/about')
})

app.listen(8080) //localhost:8080/   node server.js
console.log('servidor funcionando')