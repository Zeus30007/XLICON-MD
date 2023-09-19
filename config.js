const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "6797309646"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '6797309646' 
global.devs = '6797309646';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0NLL2QvTWtUd3VVRlF1TkpPSE5ReFJLdmtlZWxzNDlaaTVNSUdMTk5FUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSk92SkptNXhGd1hMakNZdG5WaDQxMUZhM0ZNck1XVFdwSFdEQ3FMMVBUOD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTEdHVUhCQng5T092Um5yOVl0dkFFTzBiVEZRSGtoTjNjNEVibk84WjNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvbFhWOW5KbXEyWTR5V3A3ZlJpRGk5NzlUb1g0eitrOFhmQ0VUeFRHQVNJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFPcFdNMnpGa25Gcmh3VVVGS010NXFVZ21vWThnSmx5MWN6ZVdGZTRLbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkYwTThiQUxBTzR3TnMrTnhvdk94RDFVa09DR2N2cER2emdXU09VVCtCQ0k9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SFpuN1l2WnRjMVJkQzJmaVQyVjhGWlBhL2tpelQ0dlRVVmhaUzZyNjUzaXpoSkc1dWxJL0I4NUp1VGdyb0Z5ZWtqVnNkZkJnOWFVTGNoK0xjSTlDQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE2MywiYWR2U2VjcmV0S2V5IjoiNmRBTnV6Z3ZZdmlmWUxhTS9YdWVxcDhsTnJLRFJQS1ZzNnNVV3ZZTHMwTT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieTk4SHZxeE5SWGU5MkZLSFp2V2NuZyIsInBob25lSWQiOiIzODQ3MTJhNi1kMGYyLTQyYzAtYTVkNi1lYzBjZDZmNjg3YTUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnFmV2RZMXIyR2JwNnNlaXdvcUduUVc0cWRrPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHdUhWUG1ndXRPNW9VV2xmZXJVcWN2R21wU0k9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNNzhqNWNIRU1mY3FLZ0dHQW89IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imhpc3hlUTNsVXVYSHZKbEpDcjJPSXlwWDMwNVBIdEVWNlo4OHBRME9vRkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1NMm1KTzhjb1FxVmpTR2RkbmNHSUlPNFROaGtkdzF6K0w2UVQ0eHlyai9RUTQ0VTdzRG12VWhqRWgvdjhjNmNFVUc2WHUxVzVqeXdZTkJqZnFNQ0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4dklXMzNXTjYvelVmUVJzU1JNSjlEM2MzbnZabVJqN1NyNWdySzlkc2dPTHlxaUl5Q0JCbnVaYTJ3eGJrN3EwTXdrcWg3Z0tZeGJzZlAxaytsSEJDZz09In0sIm1lIjp7ImlkIjoiMjYwNzYyNDMyMTAyOjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkogSSBOIFgtTSBEIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MDc2MjQzMjEwMjoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZWXJNWGtONVZMbHg3eVpTUXE5amlNcVY5OU9UeDdSRmVtZlBLVU5EcUJTIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk1MTY2MDI3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdMUyJ9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'J I N X - M D - #v2﻿ ﻿ 🔗',
  packname:  process.env.PACK_NAME || 'MADE BY MIRAI!!🦊🦊',
   
  botname:   process.env.BOT_NAME === undefined ? "J I N X - M D - #v2﻿ ﻿ 🔗" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Mirai' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '!' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? true : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? true : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'J I N X - M D - #v2﻿ ﻿ 🔗',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
