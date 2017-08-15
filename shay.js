//excuse the messy and amateurish coding pls dont hurt me 
//Discord bot built for the miserydungeon discord by user Kiji#6354

const botSettings = require("./settings.json");
const Discord = require("discord.js");
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async function(args) {
    console.log(`${bot.user.username} is here!`);

    bot.generateInvite(["ADMINISTRATOR"]).then(function(link) {
        console.log(link);
    }).catch (err => {
        console.log(err.stack);
    });

    await bot.generateInvite(["ADMINISTRATOR"]);

    bot.user.setGame("in a grassy meadow!");
});

    bot.on("message", async message => {
    if(message.author.bot) return; 
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

         // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

        return array;
}
    if(message.content.startsWith(botSettings.prefix + 'honk')) {
        var request = require('request');

        var client_id = "b58d8176a833077";
        var auth_header = "Authorization: Client-ID " + client_id;
        var album_url = "https://api.imgur.com/3/album/vFylX/images";

        request({
            headers: {
                'Authorization': 'Client-ID ' + client_id
            },
            uri: album_url,
            method: 'GET'
        }, function (err, res, body) {
            var images = JSON.parse(body).data;

        var random_images = shuffle(images);
            (random_images[0].link);
            var rand = random_images[0].link
            message.channel.send(rand);
        });
    }
});

bot.on("message", async message => {
    if(message.author.bot) return; 
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(message.content.startsWith(botSettings.prefix + 'honk')) {
        var request = require('request');

        var client_id = "b58d8176a833077";
        var auth_header = "Authorization: Client-ID " + client_id;
        var album_url = "https://api.imgur.com/3/album/vFylX/images";

        request({
            headers: {
                'Authorization': 'Client-ID ' + client_id
            },
            uri: album_url,
            method: 'GET'
        }, function (err, res, body) {
            fs.writeFile("./data/honk.json", body, function(err) {
                if(err) {
                    return console.log(err);
                }
                    
                console.log("Saved album data!"); 
            });
    }); 

bot.on("message", async message => {
    if(message.author.bot) return; 
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(botSettings.prefix)) return;

    if(command === `${botSettings.prefix}userinfo`) {
        let embed = new Discord.RichEmbed()
            .addField("Avatar Link", message.author.avatarURL)
            .setAuthor(message.author.username)
            .setColor("#5DADE2")
            .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
            .addField("ID", message.author.id)
            .addField("Created At", message.author.createdAt);

        message.channel.sendEmbed(embed);

        return;    
}
    if(command === `${botSettings.prefix}botinfo`) {
        let embed = new Discord.RichEmbed()
            .setTitle("About Shaymin#4561")
            .setDescription("Shaymin#4561 is a general multipurpose bot created for the miserydungeon Discord. It was created by user Kiji#6453 using the discord.js libraries with lots of love.", message.author.description)
            .setImage("http://i.imgur.com/2HDNLue.png", message.author.image)

        message.channel.sendEmbed(embed)

         return;    
}
    if(message.content.startsWith(botSettings.prefix + 'ping')) {
        message.channel.send('Pong! Your ping is `' + `${bot.ping}` + ' ms`');
    }
    if(message.content.startsWith(botSettings.prefix + 'invite')) {
        message.channel.send('miserydungeon Discord Server invite: https://discord.gg/AkSqPXv. Invite your friends!')
}
    if(!command.startsWith(botSettings.prefix)) return;

    if(command === `${botSettings.prefix}say`) {
        message.delete().catch(O_o=>{}).then; 
        message.channel.send(args.join(" "));
}
    if (message.content.startsWith(botSettings.prefix + 'spark')) { 
      var spark = [
        `http://i.imgur.com/F9tYijG.jpg`,
        `http://i.imgur.com/hqaGtGj.jpg`,
        `http://i.imgur.com/6PeNkqr.png`,
        `http://i.imgur.com/95NNUZA.jpg`,
        `http://i.imgur.com/saO5dnv.png`,
        `http://i.imgur.com/YeO13BH.png`,
        `http://i.imgur.com/SwvvOcq.png`,
        `http://i.imgur.com/kEMfa23.png`,
        `http://i.imgur.com/x40MrF9.gif`,
        `http://i.imgur.com/YeXuO7M.jpg`,
        `http://i.imgur.com/QVjlv8e.jpg`,
        `http://i.imgur.com/zFy8Eqy.png`,
        `http://i.imgur.com/YU3Eufr.jpg`,
        `http://i.imgur.com/RsnLFgs.jpg`,
        `http://i.imgur.com/pDehFpS.png`,
        `http://i.imgur.com/DExFdyy.png`,
        `http://i.imgur.com/sK2Qa48.png`,
        `http://i.imgur.com/8amdSil.png`,
        `http://i.imgur.com/WyzbLZz.png`,
        `http://i.imgur.com/xw7hvi8.png`,
        `http://i.imgur.com/gnWuOm5.jpg`,
        `http://i.imgur.com/SWi8ASv.png`,
        `http://i.imgur.com/ZpiiNXC.png`,
        `http://i.imgur.com/vUTibW8.png`,
        `http://i.imgur.com/bZwOPbM.jpg`,
        `http://i.imgur.com/cWVRpp4.jpg`,
        `http://i.imgur.com/mxFhQ8I.png`,
        `http://i.imgur.com/zfbT5Q7.jpg`,
        `http://i.imgur.com/VHn8lpe.jpg`,
        `http://i.imgur.com/3kgwyTL.gif`,
        `http://i.imgur.com/6nft1nl.gif`,
        `http://i.imgur.com/wJuWGT5.gif`,
        `http://i.imgur.com/ckIkd11.png`,
        `http://i.imgur.com/DSicT8H.png`,
        `http://i.imgur.com/repGEpC.png`,
        `http://i.imgur.com/7dXHkHN.jpg`,
        `http://i.imgur.com/M3hDlXv.png`,
        `http://i.imgur.com/tCZYj0y.jpg`,
        `http://i.imgur.com/j7lX8IZ.png`,
        `http://i.imgur.com/2j2Duyc.jpg`,
        `http://i.imgur.com/wow58ej.png`,
        `http://i.imgur.com/3kVVNij.png`,
        `http://i.imgur.com/UC5Qxbl.jpg`,
        `http://i.imgur.com/DX4RNei.jpg`,
        `http://i.imgur.com/bSCcbza.jpg`,
        `http://i.imgur.com/9NzkT43.png`,
        `http://i.imgur.com/6fecy87.png`,
        `http://i.imgur.com/5xQ8cn5.png`,
        `http://i.imgur.com/TDiUJsz.jpg`,
        `http://i.imgur.com/vubZVjN.png`,
        `http://i.imgur.com/jzIiH26.png`,
        `http://i.imgur.com/8oLrrbH.jpg`,
        `http://i.imgur.com/F0IuPVI.jpg`,
        `http://i.imgur.com/AxO0tCq.jpg`,
        `http://i.imgur.com/B7EcAPs.png`,
        `http://i.imgur.com/oiyS7sq.jpg`,
        `http://i.imgur.com/zBBWyaT.jpg`,
        `http://i.imgur.com/pT7MDfg.jpg`,
        `http://i.imgur.com/RbINI7l.jpg`,
        `http://i.imgur.com/Ns8cZXb.jpg`,
        `http://i.imgur.com/ASMJNYX.jpg`,
        `http://i.imgur.com/BH2jr2G.png`,
        `http://i.imgur.com/DvLeUJR.jpg`,
        `http://i.imgur.com/KLYZ3Li.jpg`,
        `http://i.imgur.com/YnwDqLY.png`,
        `http://i.imgur.com/lkdYQE4.png`,
        `http://i.imgur.com/yz3TM8R.png`,
        `http://i.imgur.com/YKUMQjj.png`,
        `http://i.imgur.com/n5P6IrT.jpg`,
        `http://i.imgur.com/E7PCBgy.jpg`,
        `http://i.imgur.com/Wvk5iWm.jpg`,
        `http://i.imgur.com/UVFuTpt.png`,
        `http://i.imgur.com/loCeRHq.png`,
        ];
      //rand generator selects from array
      var rand = spark[Math.floor(Math.random() * spark.length)];
      message.channel.send(rand);
}
    if (message.content.startsWith(botSettings.prefix + 'ask')) {
      var ask = [
        //Yes
        `Heck yeah!`,
        `It's as definite as how I like Grass Pokemon!`,
        `All these files seem to be pointing at yes, actually. I'm not lying.`,
        `Prim, my big sis, thinks so!`,
        `That sounds like it'll work!`,
        `Of course!`,
        `My sources say yes! Except those sources are a sheet of paper that says "yes!". Still a yes from me.`,
        //No
        `About as likely as when I'll be able to count my uptime in seconds. Which is never.`,
        `Probably not.`,
        `Well, maybe when I fly.`,
        `Um.. I don't think so?`,
        `Perhaps if you were to collect the 7- wait, oh, they don't exist in either of our universes, huh.`,
        `I'll say yes when flying fluffy grass hedgehogs become a thing.`,
        `I'll say yes when I become a starter in Pokemon Mystery Dungeon.`,
        `It'll be a yes from me once Sinnoh remakes come out.`,
        //Maybe
        `If you give me an Oran Berry, I'll say yes.`,
        `You wanna know something? I'm not a Alakazam. I can't really tell you the answer for this question, as I don't know. My Twisted Spoon isn't really helping.`,
        `Yeah, sounds- wait uh, no that- nono that's definitely rig- eh uh, I think that's a ye- AH _HECK_, I can't decide on this one!`,
        `Yes? I think? Wait.. no.. um...`,
        //Reply Hazy
        `Uhm... I misplaced your question somewhere, sorry.`,
        `...I can't seem to find anything relating to it. Actually, where did I put- did I just lose your question? ...Oh great, I did just lose your question.`,
        `Well, the answer is simple really- just *y-n-y-n-y-n-m-m-m* ...What just happened?`,
        `I'm not sure if I heard what you said, mind asking again?`,
        `Come again?`,
        //Ask later
        `Mind asking me in a bit? My mom is telling me to clean my room.`,
        `Ask me again in a sec, I'm busy stuffing my mouth with food.`,
        `*yawn* You should ask me in a bit, I'm too sleepy right now..`,
        ];
      var rand = ask[Math.floor(Math.random() * ask.length)];
      message.channel.send(rand);
    }
});
        
bot.login(botSettings.token);