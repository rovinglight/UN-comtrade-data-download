const download = require('download-file')
const schema = require('./schema.json')
const sleep = require('sleep')
const fs = require('fs')

function storeData (folder, cc, year) {
  let str = `https://comtrade.un.org/api/get?max=50000&type=C&freq=A&px=S3&ps=${year}&r=${schema.reporters}&p=0&rg=2&cc=${cc}&uitoken=468882ee7dc070c12209164ce746dd23&fmt=csv`
  let options = {
      directory: `./data/${folder}`,
      filename: `${cc}.csv`
  }
  return new Promise ((resolve, reject) => {
    download(str, options, function(err){
        if (err) {
          console.error('err',cc)
          console.log(str)
          return reject(err)
        }
        console.log('succ', cc)
        resolve(cc)
    })
  })
}

async function beginSchema (year) {
    for (let folder of schema.folders) {
      for (let cc of folder.cc) {
        if (!fs.existsSync(`./data/${folder.folder}/${cc}.csv`)) {
          await storeData (folder.folder, cc, year).catch(err => {
          })
        }
      }
    }
}

(async function () {
  await beginSchema(schema.year)
})()
