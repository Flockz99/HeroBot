const Discord = require ('discord.js');

module.exports.run=(client,message,args)=>{

    if(!message.member.hasPermission('BAN_MEMBERS') && message.author.id !="148116372314914816")
        {
            message.reply("Comando dedicado por parte dos Guardinhas da vila! <:guardinha:699385782846226463>")
        }
    else
        {
            
            message.channel.send("*B A N I D O*", {files:[`./assets/video/banido.mp4`]})
        }
};

module.exports.help={
    name:"Banido",
    aliases:["Banido", "banido"]
}