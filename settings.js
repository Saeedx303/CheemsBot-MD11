//base by BABLI
//re-upload? recode? copy code? give credit ya :)
//YouTube: @BABLI
//Instagram: saeedx302
//Telegram: https://i.postimg.cc/SsJwVDf9/616883f81d89ff8a878da6db77dce122.webp
//GitHub: @DGXeon
//WhatsApp: +923137183974
//want more free bot scripts? subscribe to my youtube channel: https://i.postimg.cc/SsJwVDf9/616883f81d89ff8a878da6db77dce122.webp

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "pakistan, punjab, bhakkar" //ur location

//new
global.botname = 'BABLI Bot MD V11' //ur bot name
global.ownernumber = '923137183974' //ur owner number
global.ownername = '🦄BABLI' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "🦄BAB:I"
global.creator = "923137183974@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["923137183974"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v6' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '95' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
