// 1.
// 宣告常數 counterClicked ，指定為從 01.couter.html
// 取回 document 裡（ DOM 的 Document ？）的 'counter' 這個 ID 的元素內容
// 也就是 <h1 id="counter">0</h1> 裡的文字 '0'
const counterClicked = document.getElementById('counter')

// 2.
// 對 counterClicked 使用 addEventListener() 這個方法
// 在觸發 click 這個事件的時候會執行內部定義的函數
counterClicked.addEventListener('click', function () {
  // 3.
  // innerHTML 這個屬性可以返回或者設定 HTML 裡的某個元素的內容
  // 'counterClicked.innerHTML = +counterClicked.innerHTML + 1'
  // 上面這行的意思是「後來的 counterClicked 」的內容等於
  // 原本的 counterClicked 的內容的數值（前面有 '+' 的符號表示轉為數值）
  // 再加 1
  counterClicked.innerHTML = +counterClicked.innerHTML + 1

  // 確認 counterClicked 的內容用
  console.log(counterClicked)
})

// 參考資料：
// getElementByID() 方法
// https://www.w3school.com.cn/htmldom/met_doc_getelementbyid.asp
//
// HTML DOM addEventListener（）方法
// https://www.w3schools.com/Jsref/met_element_addeventlistener.asp
// https://developer.mozilla.org/zh-TW/docs/Web/API/EventListener
//
// click 這個 Event 的資訊
// https://www.w3schools.com/jsref/dom_obj_event.asp
//
// HTML DOM innerHTML屬性
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
//
// 文件物件模型 (DOM)
// https://developer.mozilla.org/zh-TW/docs/Web/API/Document_Object_Model
