global.owner = ['263784818639']  
global.mods = ['263784818639'] 
global.prems = ['263784818639']
global.nameowner = 'Tcroneb'
global.numberowner = '263784818639' 
global.mail = 'tcronebtech2022@gmail.com' 
global.gc = 'https://chat.whatsapp.com/LqD6utmLF699JIW9R82O95'
global.instagram = 'https://instagram.com/badboybot'
global.wm = '© Tcroneb'
global.wait = '_*Wait..Bad..Boy...Wait...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sending ...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.autobio = false // Set true untuk mengaktifkan autobio
global.maxwarn = '5' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'YOUR_APIKEY_HERE' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org',
  widipe: 'https://widipe.com'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'APIKEY' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
