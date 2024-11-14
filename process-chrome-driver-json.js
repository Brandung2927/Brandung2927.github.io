const fs = require('fs');
const rawData = fs.readFileSync('known-good-versions-with-downloads.json', 'utf8');
const data = JSON.parse(rawData);

data.versions = data.versions.filter(i=>i.version.split('.')[0]>='126')

for(let i=0;i<data.versions.length;i++){
  let obj = data.versions[i].downloads
  for (let key in obj) {
    if (key !== 'chromedriver') {
      delete obj[key];
    }
  }
  if(obj['chromedriver']) {
  obj['chromedriver'] = obj['chromedriver'].filter(i=>i.platform==='win64')
  }
}

// 写入新的 JSON 文件
fs.writeFileSync('known-good-versions-with-downloads.json', JSON.stringify(data, null, 2), 'utf8');

console.log('处理完成，已生成 known-good-versions-with-downloads.json 文件');