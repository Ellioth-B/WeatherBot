require("dotenv").config()
const Discord = require("discord.js")
const bot = new Discord.Client()
  
var prefix = "-";

function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})

bot.on("message", weather => {
  if (weather.content === prefix + 'w') {
      var x = random(10);
      switch (x) {
      case 0:
      weather.reply("Forte chaleur \:fire:");
      break; 
      case 1:
      weather.reply("Journée ensoleillée \:sunny:");
      break; 
      case 2:
      weather.reply("Pluie \:cloud_rain:");
      break;
      case 3:
      weather.reply("Nuageux \:cloud:");   
      break;
      case 4:
      weather.reply("Neige \:cloud_snow:");   
      break;
      case 5:
      weather.reply("Grêle \:ice_cube:");   
      break;
      case 6:
      weather.reply("Orage \:cloud_lightning:");   
      break;
      case 7:
      weather.reply("Inondations \:ocean:");   
      break;
      case 8:
      weather.reply("Vent violent \:cloud_tornado:");   
      break;
      case 9:
      weather.reply("Brise légère \:dash:");   
      break;
      }
  }
})

bot.login(process.env.BOT_TOKEN);
