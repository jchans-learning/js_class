// 1.
// 分別從 HTML 抓取 counter, minusOne, plusOne 三個 id 的 HTML 元素
// 並分別定義為常數
const counterText = document.getElementById('counter')
const minusOneClicked = document.getElementById('minusOne')
const plusOneClicked = document.getElementById('plusOne')

// 2. 設定 minusOne 這個按鈕被按下時 counter 的行為
minusOneClicked.addEventListener('click', function () {
  counterText.innerHTML = +counterText.innerHTML - 1

  // 確認 HTML 的內容變化
  console.log(counterText, minusOneClicked, plusOneClicked)
})

// 3. 設定 plusOne 這個按鈕被按下時 counter 的行為
plusOneClicked.addEventListener('click', function () {
  counterText.innerHTML = +counterText.innerHTML + 1

  // 確認 HTML 的內容變化
  console.log(counterText, minusOneClicked, plusOneClicked)
})

// 參考資料：
// 無
