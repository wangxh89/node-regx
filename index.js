const fs = require('fs');

// 读取文件内容
fs.readFile('teste.txt', 'utf8', (err, data) => {
  if (err) throw err;

  // 进行正则替换
  let replacedData = data.replace(/<a name='(.*?)'><\/a>/g, "<a name=\"$1\"></a>");

  // 将修改后的内容写回到文件中
  fs.writeFile('file.html', replacedData, 'utf8', (err) => {
    if (err) throw err;
    console.log('文件内容替换成功！');
  });
});
