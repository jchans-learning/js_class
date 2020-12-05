const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`

const data = document.getElementById('data')

const rawDataArray = rawData.split('\n')

// console.log(rawDataArray)

const titleArray = rawDataArray[0].replaceAll('"', '').split(',')

// console.log(titleArray)

let dataDisplay = ''
let titleDisplay = ''

for (let i = 0; i < titleArray.length; i++) {
  titleDisplay += `<th>${titleArray[i]}</th>`
}

let bodyDisplay = ''

for (let i = 1; i < rawDataArray.length; i++) {
  const bodyArray = rawDataArray[i].replaceAll('"', '').split(',')
  console.log(bodyArray)

  for (let i = 0; i < bodyArray.length; i++) {
    bodyDisplay += `<td>${bodyArray[i]}</td>`
  }

  bodyDisplay += '</tr>'
}

dataDisplay +=
  `<thead><tr>${titleDisplay}</tr></thead>` +
  `<thead><tr>${bodyDisplay}</tr></thead>`

data.innerHTML = dataDisplay
