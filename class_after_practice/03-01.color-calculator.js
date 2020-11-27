// 0.
// 可以先用這行測試一下改 'Hello World' 的顏色
// document.getElementById('target').style.color = 'tomato'
// 注意事項：這個檔案的寫法先讓改變顏色的功能出現。
// 缺乏補 0 的功能，以及數字超過 255 時的應對，待新增 03-02 檔練習。

// 1.
// 先把幾個要用到，要操作的東西都從 HTML 叫進來
const color1 = document.getElementById('colorInput1')
const color2 = document.getElementById('colorInput2')
const color3 = document.getElementById('colorInput3')
const convertColorClicked = document.getElementById('convertColor')
const targetText = document.getElementById('target')
// 不太熟的時候可以用 console.log 來確認設定的東西是不是你要的
// 另一方面是 eslint 的規則會一直靠北你定義的東西沒有被使用
// 可以讓錯誤訊息少一點
console.log(color1, color2, color3, convertColorClicked)

// 2.
// 設定「轉換顏色」這個按鈕的行為
convertColorClicked.addEventListener('click', function () {
  // 一開始什麼都沒有寫的時候，可以先用 console.log 確認按按鈕有沒有被聽到
  // 有聽到就會在 console 印出 'test' 這個字串
  // console.log('test')

  // 確認輸入的數值有讀取到，在 console 印出三個輸入的顏色數值
  // 可以比較一下 color1.value 與 color 在 console 印出來的差別
  console.log(color1.value, color2.value, color3.value)
  console.log(color1, color2, color3)

  // 把三個數值轉換成 16進位色碼 字串，我把它設定成一個變數 hexColor
  let hexColor =
    '#' +
    (+color1.value).toString(16) +
    (+color2.value).toString(16) +
    (+color3.value).toString(16)

  // 在 console 印出 hexColor 的 16進位色碼 字串
  console.log(hexColor)

  // 把 HTML 裡的 target 的顏色的樣式換成 hexColor
  targetText.style.color = hexColor
})

// 參考資料：
//
// Hex Color Codes
// https://5xruby.tw/posts/understand-hex-color-codes/
//
// toString() 方法
// https://www.w3schools.com/jsref/jsref_tostring_number.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
//
// style 語法，用 JS 改變 HTML 元素樣式的方式
// https://www.w3schools.com/js/js_htmldom_css.asp
