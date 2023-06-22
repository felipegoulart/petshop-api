import express from 'express'

const app = express()

app.get('/', function (request, response) {
  response.json({message: 'Olá mundo'})
})

app.listen(3000, () => console.log('Rodando na porta 3000'))
