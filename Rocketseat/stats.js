//Programa que mostra os stats da memória do computador.

//Pega o modulo de os e joga na constante 'os'
const os = require('os')
//Pega o modulo criado (sem ser do node) e joga na variavel log
const log = require('./logger')

//A função setInterval, configura um espaço de tempo para executar alguma coisa (tempo em 'ms').
setInterval(() =>{

    //Variaveis que vão receber o valor das funcções de memória livre e total de memória (Valores retirados do módulo de 'os' do node.js)
    const { freemem, totalmem } = os

    //Pegando os valores e dividindo 2x por 1024, para passa-los para MB
    const totmem = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt(freemem() / 1024 / 1024)
    //Variavel que cria e recebe a percentagem
    const percents = parseInt((mem / totmem) * 100)
    
    //Vaviavel objeto
    const stats = {
        free: `${mem} MB`,
        total: `${totmem} MB`,
        usage: `${percents}%`
    }
    
    //Printar no terminal
    console.clear()
    console.log('====== PC Stats ======')
    console.table(stats)

    log(`${JSON.stringify(stats)} \n`)

},1000)//ms = 1 segundo

