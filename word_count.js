const fs = require('fs')
const numberOfWords = fs.readFileSync('/dev/stdin')
  .toString()
  .split(/\s+/)
  .length
process.stdout.write(numberOfWords + ' words')
