const Discord = require ('discord.js');

module.exports.run=(client,message,args)=>{

    trocadalho = Math.floor(Math.random() * (9 - 1) + 1);
    if(trocadalho === 1){
        const v1 = new Discord.MessageEmbed()
        .setColor("#ff9933")
        .setTitle("Ultimate Trocadilho Championship")
        .setURL("")
        .setDescription("Qual o cara que consegue resolver o Cubo Mágico mais Rapidamente?\n||O Daltônico||")
        .setThumbnail("https://i.ibb.co/kqZnybq/UTC.png")
        .setFooter("Sou o Herói dessa Canção")
        message.channel.send(v1)
    }

    if(trocadalho === 2){
        const v2 = new Discord.MessageEmbed()
        .setColor("#ff9933")
        .setTitle("Ultimate Trocadilho Championship")
        .setURL("")
        .setDescription("Allstar, você está muito quieto...\nConverse")
        .setThumbnail("https://i.ibb.co/kqZnybq/UTC.png")
        .setFooter("Sou o Herói dessa Canção")
        message.channel.send(v2)
    }

    if(trocadalho === 3){
        const v3 = new Discord.MessageEmbed()
        .setColor("#ff9933")
        .setTitle("Ultimate Trocadilho Championship")
        .setURL("")
        .setDescription("Já conhece a piada do Pônei? \n||Pô nei eu||")
        .setThumbnail("https://i.ibb.co/kqZnybq/UTC.png")
        .setFooter("Sou o Herói dessa Canção")
        message.channel.send(v3)
    }

    if(trocadalho === 4){
        const v4 = new Discord.MessageEmbed()
        .setColor("#ff9933")
        .setTitle("Ultimate Trocadilho Championship")
        .setURL("")
        .setDescription("Por que a Cobra queria virar Escova? \n||Porque ela cansou de Ser Pente||")
        .setThumbnail("https://i.ibb.co/kqZnybq/UTC.png")
        .setFooter("Sou o Herói dessa Canção")
        message.channel.send(v4)
    }

    if(trocadalho === 5){
        const v5 = new Discord.MessageEmbed()
        .setColor("#ff9933")
        .setTitle("Ultimate Trocadilho Championship")
        .setURL("")
        .setDescription("Por que o Pinheiro nunca se perde na floresta? \n||Porque ele tem um Mapinha||")
        .setThumbnail("https://i.ibb.co/kqZnybq/UTC.png")
        .setFooter("Sou o Herói dessa Canção")
        message.channel.send(v5)
    }

    if(trocadalho === 6){
        const v6 = new Discord.MessageEmbed()
        .setColor("#ff9933")
        .setTitle("Ultimate Trocadilho Championship")
        .setURL("")
        .setDescription("Por que a Aranha é o animal mais carente do mundo? \n||Porque ela é uma Aracneedyou||")
        .setThumbnail("https://i.ibb.co/kqZnybq/UTC.png")
        .setFooter("Sou o Herói dessa Canção")
        message.channel.send(v6)
    }

    if(trocadalho === 7){
        const v7 = new Discord.MessageEmbed()
        .setColor("#ff9933")
        .setTitle("Ultimate Trocadilho Championship")
        .setURL("")
        .setDescription("Por que o Napolão era sempre chamado pras festas na França? \n||Porque ele é Bom Na Party||")
        .setThumbnail("https://i.ibb.co/kqZnybq/UTC.png")
        .setFooter("Sou o Herói dessa Canção")
        message.channel.send(v7)
    }

    if(trocadalho === 8){
        const v8 = new Discord.MessageEmbed()
        .setColor("#ff9933")
        .setTitle("Ultimate Trocadilho Championship")
        .setURL("")
        .setDescription("A Plantinha foi ao Hospital, mas não foi atendida... Por quê? \n||Porque lá só tinha médico de Plantão||")
        .setThumbnail("https://i.ibb.co/kqZnybq/UTC.png")
        .setFooter("Sou o Herói dessa Canção")
        message.channel.send(v8)
    }

    if(trocadalho === 9){
        const v9 = new Discord.MessageEmbed()
        .setColor("#ff9933")
        .setTitle("Ultimate Trocadilho Championship")
        .setURL("")
        .setDescription("Você conhece o site do Cavalinho? Não? \nÉ o WWW Ponto Com Ponto Com Ponto Com Ponto Com.com")
        .setThumbnail("https://i.ibb.co/kqZnybq/UTC.png")
        .setFooter("Sou o Herói dessa Canção")
        message.channel.send(v9)
    }
};

module.exports.help={
    name:"UTC",
    aliases:["utc", "Utc", "UTC", "piada", "Piada", "trocadalho", "Trocadalho"]
}