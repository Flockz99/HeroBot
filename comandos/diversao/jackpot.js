const Discord = require ('discord.js');

module.exports.run=(client,message,args)=>{
        
    jack = Math.floor(Math.random() * (9 - 1) + 1);
    if(jack===1){
        const embed = {
            "title": "Quem quer ser um Milionário?",
            "description": "Vejamos a sorte desse Apostador...\n \nPress F",
            "color": 1,
            "thumbnail": {
            "url": "https://i.ibb.co/LZGXjqp/1.png"
            }};
            message.channel.send({ embed });
        }

        if(jack===2){
            const embed = {
                "title": "Quem quer ser um Milionário?",
                "description": "Vejamos a sorte desse Apostador...\n \nPress F",
                "color": 1,
                "thumbnail": {
                "url": "https://i.ibb.co/LNJVVds/2.png"
                }};
                message.channel.send({ embed });
            }
            
        if(jack===3){
            const embed = {
                "title": "Quem quer ser um Milionário?",
                "description": "Vejamos a sorte desse Apostador...\n \nPress F",
                "color": 1,
                "thumbnail": {
                "url": "https://i.ibb.co/ZXQJ5rX/3.png"
                }};
                message.channel.send({ embed });
            }
            
        if(jack===4){
            const embed = {
                "title": "Quem quer ser um Milionário?",
                "description": "Vejamos a sorte desse Apostador...\n \nPress F",
                "color": 1,
                "thumbnail": {
                "url": "https://i.ibb.co/n3B9cM0/4.png"
                }};
                message.channel.send({ embed });
            }
            
        if(jack===5){
            const embed = {
                "title": "Quem quer ser um Milionário?",
                "description": "Vejamos a sorte desse Apostador...\n \nMinha noça Berg, Foi por Pouco!",
                "color": 1,
                "thumbnail": {
                "url": "https://i.ibb.co/xMzBfTQ/5.png"
                }};
                message.channel.send({ embed });
            }
            
        if(jack===6){
            const embed = {
                "title": "Quem quer ser um Milionário?",
                "description": "Vejamos a sorte desse Apostador...\n \nMinha noça Berg, Foi por Pouco!",
                "color": 1,
                "thumbnail": {
                "url": "https://i.ibb.co/3pWSqM0/6.png"
                }};
                message.channel.send({ embed });
            }
            
        if(jack===7){
            const embed = {
                "title": "Quem quer ser um Milionário?",
                "description": "Vejamos a sorte desse Apostador...\n \nMinha noça Berg, Foi por Pouco!",
                "color": 1,
                "thumbnail": {
                "url": "https://i.ibb.co/z69GmNx/7.png"
                }};
                message.channel.send({ embed });
            }
            
        if(jack===8){
            const embed = {
                "title": "Quem quer ser um Milionário?",
                "description": "Vejamos a sorte desse Apostador...\n \nÉ ELE! É ELE O ESCOLHIDO! VAI PAGAR TODAS AS MINHAS CONTAS!!! AMEM!!!",
                "color": 1,
                "thumbnail": {
                "url": "https://i.ibb.co/gFtMscp/8.png"
                }};
                message.channel.send({ embed });
            }
};

module.exports.help={
    name:"jp",
    aliases:["jp", "jackpot"]
}