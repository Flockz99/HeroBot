const Discord = require ('discord.js');

module.exports.run=(client,message,args)=>{

    if(!message.member.hasPermission('BAN_MEMBERS') && message.author.id !="148116372314914816")
        {
            message.reply("Comando dedicado por parte dos Guardinhas da vila! <:guardinha:699385782846226463>")
        }
    else
        {
            let pancadão = Math.floor(Math.random() * (6 - 1) + 1);

            message.channel.send({files:[`./assets/audio/${pancadão}.mp3`]})
        }
};

module.exports.help={
    name:"Voltei",
    aliases:["Voltei", "voltei", "Cheguei", "cheguei"]
}