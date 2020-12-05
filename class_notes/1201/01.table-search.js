const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`

// 學生的資料物件的樣子
// {
//     name: '李一百'
//     chinese: 100,
//     math: 60,
//     english: 85
// }

const data = document.getElementById('data')
const search = document.getElementById('search')
const searchWord = document.getElementById('searchWord')

//--------

function displayStudentData(studentArray) {
  let bodyDisplay = ''
  let chineseTotal = 0
  let mathTotal = 0
  let englishTotal = 0

  for (let i = 0; i < studentArray.length; i++) {
    bodyDisplay += `<tr>
                      <td>${studentArray[i].name}</td>
                      <td>${studentArray[i].chinese}</td>
                      <td>${studentArray[i].math}</td>
                      <td>${studentArray[i].english}</td>
                    </tr>`

    chineseTotal += studentArray[i].chinese
    mathTotal += studentArray[i].math
    englishTotal += studentArray[i].english
  }

  console.log(studentArray)
  console.log(chineseTotal, mathTotal, englishTotal)

  bodyDisplay += `
    <tr>
        <td>總平均</td>
        <td>${(chineseTotal / studentArray.length).toFixed(2)}</td>
        <td>${(mathTotal / studentArray.length).toFixed(2)}</td>
        <td>${(englishTotal / studentArray.length).toFixed(2)}</td>
    </tr>
`

  return bodyDisplay
}

//--------

const rawDataArray = rawData.split('\n')
const titleArray = rawDataArray[0].replaceAll('"', '').split(',')

// console.log(rawDataArray)
// console.log(titleArray)

let titleDisplay = ''

for (let i = 0; i < titleArray.length; i++) {
  titleDisplay += `<th>${titleArray[i]}</th>`
}

let bodyDisplay = ''

const studentArray = []

for (let i = 1; i < rawDataArray.length; i++) {
  const bodyArray = rawDataArray[i].replaceAll('"', '').split(',')
  console.log(bodyArray)

  //   for (let i = 0; i < bodyArray.length; i++) {
  //     bodyDisplay += `<td>${bodyArray[i]}</td>`
  //   }

  //   bodyDisplay += '</tr>'

  //   console.log('bodyArray', bodyArray)

  const student = {
    name: bodyArray[0],
    chinese: +bodyArray[1],
    math: +bodyArray[2],
    english: +bodyArray[3],
  }

  studentArray.push(student)
}

data.innerHTML =
  titleDisplay + `<tbody>${displayStudentData(studentArray)}</tbody>`

search.addEventListener('click', function () {
  // 得到查詢字串是什麼
  const nameSearchWord = searchWord.value
  const newStudentArray = studentArray.filter(function (value) {
    return value.name.includes(nameSearchWord)
  })

  data.innerHTML =
    titleDisplay + `<tbody>${displayStudentData(newStudentArray)}</tbody>`
})
