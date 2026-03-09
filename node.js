const TelegramBot = require("node-telegram-bot-api")

const token = "ТВОЙ_ТОКЕН"

const bot = new TelegramBot(token,{polling:true})

bot.on("message",(msg)=>{

if(msg.web_app_data){

bot.sendMessage(
msg.chat.id,
"Новый заказ: "+msg.web_app_data.data
)

}

})