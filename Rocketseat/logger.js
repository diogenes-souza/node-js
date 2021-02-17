/*
Importa o módulo de 'events'
Importa o modulo de File System 'fs'
Importa o módulo path = para identificar o caminho do arquivo
*/
const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')

//Instância o EventEmitter na variavel emitter
const emitter = new EventEmitter()

emitter.on('log', (message) => {
    /*
    fs.appendFile grava no arquivo txt
    path.join(__dirname, 'nomeARQUIVO+extensãoARQUIVO') = pega o caminho do arquivo na máquina.
    err = Se houver erro mostre o erro
    */
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if (err) throw err
    })
})


//Função que pega a mensagem
function log(message) {
    emitter.emit('log', message)
}


//Exporta a função para que possa ser chamada de outro fonte
module.exports = log