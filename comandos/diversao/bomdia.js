const Discord = require ('discord.js');

module.exports.run=(client,message,args)=>{
	if(args[0]==="dia" && !message.member.hasPermission('BAN_MEMBERS') && message.author.id !="148116372314914816")
        {
            message.reply("Comando dedicado por parte dos Guardinhas da vila! <:guardinha:699385782846226463>")
        }
    else
        {
            message.channel.send({files:[`./assets/audio/BOMDIA.mp3`]})
        }

	if(args[0]==="Dia" && !message.member.hasPermission('BAN_MEMBERS') && message.author.id !="148116372314914816")
        {
            message.reply("Comando dedicado por parte dos Guardinhas da vila! <:guardinha:699385782846226463>")
        }
    else
        {
            message.channel.send({files:[`./assets/audio/BOMDIA.mp3`]})
        }
};

module.exports.help={
    name:"Voltei",
    aliases:["bom", "Bom"]
}