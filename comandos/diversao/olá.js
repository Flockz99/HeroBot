const Discord = require ('discord.js');

module.exports.run=(client,message,args)=>{

    if(!message.author.bot)return

    message.delete()

    let mensagem = "a"

    verso = Math.floor(Math.random() * (13 - 1) + 1);
    
    //random
    if(verso===1){mensagem="Vocês já ouviram falar do Guardinha da vila?"}
    if(verso===2){mensagem="Eu vou me apresentar\nSou o Herói desta Canção!"}
    if(verso===3){mensagem="Aparentemente a Princesa está em outro Castelo..."}
    //1-1
    if(verso===4){mensagem="Para encontrar o castelo\nEu já tenho a receita\nEu sei que numa missão\nPreciso sempre seguir à direita!"}
    if(verso===5){mensagem="Terei que usar minha espada\nPois não sei mais o que fazer\nQueria fugir pelo fundo\nMas só ando sei andar em 2D!"}
    if(verso===6){mensagem="Eu derrotei a serpente\nE arranquei o seu couro\nSó não entendi\nPorque ela comeu uma moeda de ouro"}
    if(verso===7){mensagem="A placa mostra uma seta\nE não informa nada mais\nQueria ver no verso\nMas não dá pra olhar atrás"}
    if(verso===8){mensagem="Será que estou\nPerdendo a sanidade\nOu isto desafia\nAs leis da gravidade"}
    if(verso===9){mensagem="Estão acabando as ideias\nPara o que eu posso cantar\nTalento tem limite\nJá não sei o que mais rimar"}
    if(verso===10){mensagem="Estou com essa armadura\nA minha vida inteira\nSei que ela me protege\nMas me dá uma coceira"}
    if(verso===11){mensagem="Com cabelos ao vento\nEu me sinto o tal\nQueria ser um modelo\nMas eu vou lutar contra o mal"}
    if(verso===12){mensagem="Seguir pra sempre à direita\nAssumo: é quase um vício\nPor isso vou pular\nMesmo sem ver se é um precipício"}

    //if(verso===){mensagem=""}

    const fala = new Discord.MessageEmbed()
    .setColor("#be154d")
    .setTitle("Agora uma Nota pra Vocês!")
    .setDescription(`${mensagem}`)
    .setThumbnail("https://media.discordapp.net/attachments/700822695155073078/714612109748469780/sorriso.png")
    .setFooter("Sou o Herói desta Canção")
    message.channel.send(fala)

};

module.exports.help={
    name:"Olá",
    aliases:["Olá", "olá"]
}