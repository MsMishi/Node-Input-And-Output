const fs = require('fs')
console.log('kitty_cat.js start')
console.log(fs.readFileSync(process.argv[2]).toString())
console.log('kitty_cat.js end')
