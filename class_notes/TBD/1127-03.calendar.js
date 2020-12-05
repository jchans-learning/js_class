const calendar = document.getElementById('calendar')
const title = document.getElementById('title')

// 呈現星期幾的標頭
const calHeaders = ['日', '一', '二', '三', '四', '五', '六']

let tableHeader = ''
for (let i = 0; i < calHeaders.length; i++) {
  tableHeader += `<th>${calHeaders[i]}</th>`
}

calendar.innerHTML = `<thead><tr>${tableHeader}</thead></tr>`

// 計算本月有幾天

const now = new Date()

// const month = now.getMonth()
// const year = now.getFullYear()

const month = 9
const year = 2020

const days = new Date(year, month + 1, 0).getDate()

console.log('本月有幾天-', days)

const firstDay = new Date(year, month, 1).getDay()
console.log('本月第一天是星期幾(0-6)-', firstDay)

const daysArray = []

for (let j = 0; j < firstDay + 1; j++) {
  daysArray.push('')
}

for (let i = 1; i < days + 1; i++) {
  daysArray.push(i)
}

console.log(daysArray)
