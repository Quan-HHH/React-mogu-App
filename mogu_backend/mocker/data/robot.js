const fs = require('fs')
const readFnc = path => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const infos = JSON.parse(data);
        const resArr = infos.map(item => {
            return {
                id: item.sort,
                title: item.title,
                image: item.image,
            }
        })
        console.log(resArr.length)
        const content = JSON.stringify(resArr,'','\t')
        fs.writeFile('./resItem.json',content,err => {
            if (!err) {
                console.log('写入成功')
            }
        })
    })
}
readFnc('./all.json')
