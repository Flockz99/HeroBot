//const & client
const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")
const fs = require ('fs');
client.commands = new Discord.Collection();
client.login(config.token);



//Status Login
client.on('ready', () => {
    console.log("• Preparado para Cantar no Discord\n")
    client.user.setActivity("Songs for a Hero: A Lenda do Herói", { type: "PLAYING"})
});



//Handler
fs.readdir("./comandos/diversao/", (erro, files)=>{
    if(erro)console.error(erro);
    console.log('• Comandos de Diversão Carregados\n')
    let jsfiles = files.filter(f=>f.split(".").pop()=="js");
    jsfiles.forEach((f, i)=>{
        let props = require(`./comandos/diversao/${f}`);
        client.commands.set(props.help.name, props);
        if (props.help.aliases !== null) for (const alias of props.help.aliases) client.commands.set(alias, props);
    });
})

//vars
    let a = 0
//Message
client.on("message", async message => {

    if(message.content.includes("a")){a+=1}
    if(a>=30){message.channel.send("!Olá Rapazeada!"); a=0}

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let cmfiles = client.commands.get(command.slice(prefix.length));
    if(!message.content.startsWith(config.prefix))return;
    if(cmfiles) cmfiles.run(client,message,args);
    if(!message.guild || message.content.indexOf(config.prefix) !== 0) return;

});
