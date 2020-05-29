const Discord = require ('discord.js');

module.exports.run=(client,message,args)=>{

    if(!message.member.hasPermission('BAN_MEMBERS') && message.author.id !="148116372314914816")
        {
            message.reply("Comando dedicado por parte dos Guardinhas da vila! <:guardinha:699385782846226463>")
        }
    else
        {
            let argsresult = args.slice(1).join(" ")
            let mChannel = message.mentions.channels.first()
            if(mChannel)
                {
                    argsresult = args.slice(1).join(" ")

                    const fala = new Discord.MessageEmbed()
                    .setColor("#be154d")
                    .setTitle(`Olá pessoal!`)
                    .setDescription(`${argsresult}`)
                    .setThumbnail("https://media.discordapp.net/attachments/700822695155073078/714625127223918592/heroitorto.png")
                    .setFooter("Sou o Herói desta Canção")
                    mChannel.send(fala)

                }
            else
                {
                    argsresult = args.join(" ")
                    const fala = new Discord.MessageEmbed()
                    .setColor("#be154d")
                    .setTitle(`Olá pessoal!`)
                    .setDescription(`${argsresult}`)
                    .setThumbnail("https://media.discordapp.net/attachments/700822695155073078/714625127223918592/heroitorto.png")
                    .setFooter("Sou o Herói desta Canção")
                    message.channel.send(fala)
                }
        }
};

module.exports.help={
    name:"say",
    aliases:["say", "Say"]
}