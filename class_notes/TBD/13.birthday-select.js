// 建立物件
const year = document.getElementById('year')
const month = document.getElementById('month')
const date = document.getElementById('date')
const checkAge = document.getElementById('checkAge')

let yearOptionString = '<option value="0">請選擇西元年</option>'

for (let i = 2020; i > 1910; i--) {
  // 第一種寫法，把 html code 拆成五個字串，把年份的部分換成 i ，但很容易寫錯
  // 如果沒什麼意外我應該都會用樣板字串寫吧
  // yearOptionString += '<option value="' + i + '">' + i + '</option>'
  //
  // 樣板字串， 2015 年， ES6 之後才有的寫法
  // 用樣板字串寫，重音符號 ` 搭配 ${i}，比較容易閱讀
  yearOptionString += `<option value="${i}">${i}</option>`
}

// 用 console.log 來檢查 for 迴圈產生的 yearOptionString
// 因為 HTML 的特性的關係，上面的 for 迴圈產生的 option 全部都塞成一行
// 印出來會看到很長很長一行沒有斷行的 yearOptionString
// 但是在 HTML 裡會正常顯示成選項
// console.log(yearOptionString)

year.innerHTML = yearOptionString

// 以下寫月份
let monthOptionString = '<option value="0">請選擇月份</option>'

for (let i = 1; i < 13; i++) {
  monthOptionString += `<option value="${i}">${i}</option>`
}

month.innerHTML = monthOptionString

// 以下寫日
// 日的部分，每個月的天數不同
// 應該有前人寫好的可以用，我想

let dateOptionString = '<option value="0">請選擇日期</option>'

for (let i = 1; i < 32; i++) {
  dateOptionString += `<option value="${i}">${i}</option>`
}

date.innerHTML = dateOptionString

// 設定預設日期，或者從資料庫中拉出資料套入的時候可用
// year.value = 1991
// month.value = 2
// date.value = 2

// 其實上面這三行，與下面是一樣的效果
// document.getElementById('year').value = 1991
// document.getElementById('month').value = 2
// document.getElementById('date').value = 2

// 記錄目前使用者選的生日數字
let birthY = 0
let birthM = 0
let birthD = 0

console.log(birthY, birthM, birthD)

// change 事件
year.addEventListener('change', function () {
  birthY = +year.value

  // 處理每個月天數不同，以及閏年的二月天數的作法
  // 當有使用者先選月再選年時更新日期選項
  if (birthY && birthM) {
    const days = new Date(birthY, birthM, 0).getDate()
    console.log(days)
    let dateOptionString = '<option value="0">請選擇日期</option>'
    for (let i = 1; i < days + 1; i++) {
      dateOptionString += `<option value="${i}">${i}</option>`
    }
  }

  // 更新日期選項
  date.innerHTML = dateOptionString

  // 日期恢復預設值為0
  birthD = 0

  //確認目前輸入的數值
  console.log('使用者出生年：' + birthY)
  console.log(birthY, birthM, birthD)
})

month.addEventListener('change', function () {
  birthM = +month.value

  // 處理每個月天數不同，以及閏年的二月天數的作法
  // 當有使用者先選年再選月時更新日期選項
  if (birthY && birthM) {
    const days = new Date(birthY, birthM, 0).getDate()
    console.log(days)
    let dateOptionString = '<option value="0">請選擇日期</option>'
    for (let i = 1; i < days + 1; i++) {
      dateOptionString += `<option value="${i}">${i}</option>`
    }
  }

  // 更新日期選項
  date.innerHTML = dateOptionString

  // 日期恢復預設值為0
  birthD = 0

  console.log('使用者出生月份：' + birthM)
  console.log(birthY, birthM, birthD)
})

date.addEventListener('change', function () {
  birthD = +date.value
  console.log('使用者出生日期：' + birthD)
  console.log(birthY, birthM, birthD)
})

// 檢查是否滿 18 歲
// 但年齡可能是會有誤差的，例如時區與閏年的問題
checkAge.addEventListener('click', function () {
  if (birthY && birthM && birthD) {
    // 獲取當下的時間日期物件
    const now = new Date()
    const d = now.getDate()

    // 注意， 0~11 丟入 getMonth 是 1~12 ，例如 10 會得出 11月
    // 所以月份要 +1 去補回來
    const m = now.getMonth() + 1
    const y = now.getFullYear()

    // 可以用 console.log 來確認 m 的值
    // console.log(m)

    // 參考資料：為何要用 getFullYear
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date

    // 布林值代表有沒有超過 18 歲
    let isOver18 = false

    if (y - birthY > 18) isOver18 = true
    if (y - birthY === 18 && m - birthM > 0) isOver18 = true
    if (y - birthY === 18 && m - birthM === 0 && d - birthD > 0) isOver18 = true

    console.log(isOver18)

    message.innerHTML = isOver18 ? '滿 18 歲' : '未滿 18 歲'
  }
})
