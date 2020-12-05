# 筆記心得摘要

- 善用 console.log 來 debug
  - 確認各種變數或常數的值，陣列的內容等等
  - 確認執行的順序
- 練習的時候多寫註解
- 學習的方法與系統很重要

# 11/24 上課筆記

- Eddy 老師

  - JS
    - 教材：https://github.com/eyesofkids/mfee11-js
    - https://eddy-chang.gitbook.io/javascript-start-from-es6/
    - https://github.com/eyesofkids/mfee11-js/blob/main/%E6%95%99%E6%9D%90/
  - React
  - 老師的 blog ： https://eddychang.me/

- github

  - https://github.com/
  - 申請帳號

- node

  - https://nodejs.org/en/
  - 用 14.15.1 LTS
  - npm （ node package manager ）： https://www.npmjs.com/
  - 以後可能需要學習多版本管理。

- 編輯器 VSCode
  - Babel
  - ESLint
  - Prettier
  - vscode-icons

## 筆記

- 上午解說，下午實作
- ECMA 標準 / W3C / 瀏覽器廠商
- ES6 最大的版本修改
- 五個重要特色：
  - 直譯式程式語言（腳本程式語言）
    - 巨集
    - 電腦自動化
    - 動態類型，弱資料類型
  - 物件導向
    - 原型物件導向
  - 主要執行環境是瀏覽器
    - 安全性？
    - Node.js 後端
    - 桌面軟體（ VSCode 等）
  - 單執行緒
  - 高階函式
- 推薦參考資料
  - MDN ： https://developer.mozilla.org/zh-TW/docs/Web/JavaScript
  - w3school ： https://www.w3schools.com/
  - You Don't Know JS ： https://github.com/getify/You-Dont-Know-JS
    - 這套老師建議有基礎再看。
  - JavaScript: The Good Parts
    - 經典著作，但有些東西比較舊
- 開啟 auto save ， afterDelay （一秒）
- 一開始宣告就給定初始值，好習慣
- "=" 符號， assign, give
- 鬆散（弱）資料類型，動態資料類型，變數的資料類型可以重新給定。
- 常數是一種特別的變數，一旦被指定，就不能再指定。

```
const b = 1
b = 'hello' //這邊會出問題
```

- 資料結構，資料類型問題。
- 複合資料類型， obj ， Array 與 Function
- JS 的新資料類型， Big Int （額外談及），目前不見得所有瀏覽器都能用。

```
形式：
13n
```

- 原生 JS 能表示的最大整數 2^53 。
- ECMA 文件： https://www.ecma-international.org/publications/standards/Ecma-262.htm
- JS 的 undefined 的類型是 undefined ， **Null 的類型是 object** ，這是其他程式語言很少見的。
- TypeScript ，微軟做的： https://www.typescriptlang.org/
- 變數，常數，撰寫風格建議（參考投影片： https://github.com/eyesofkids/mfee11-js/blob/main/%E6%95%99%E6%9D%90/1124/es6.pdf ）
- 資料類型

  - 數字
    - 整數
    - 浮點數（有精度問題，為了需要的精度要找適當的函式庫去輔助計算）
    - 無限大
    - 負無限大
    - NaN （ Not an Number ）

- Math 與 Number
- 數字的基本運算：加減乘除餘
- 大於，小於，相等
- 字串轉為數字

```
+"123abc"

Number("123abc")

以上這兩個是同義的
```

- 老師建議用單引號，因為跟 HTML 搭配比較方便
- 英文使用者常建議使用雙引號，在表示英文語句比較方便，例如 "I'm a student" 。
- 字串串接運算優先高於高於數字相加。（只有加號會這樣，可能要避免）

### 布林值

- true
- false
- JavaScript 的關鍵字都是全小寫的
- 假家族 falsy （要背）： +0, -0, null, NaN, undefined, 空白字串(''), false
- 真家族 truthy ：不是假家族，也就是有值的狀況

```
兩個很容易搞錯的，空陣列 [ ] 與空物件 { } 都是真的。
```

- 一般發建議用 Null 而非 Undefined。
- 不能用保留字作為變數名稱。
- JavaScript Standard Style: https://standardjs.com/
  - 自稱標準規則，但可以參考
- VSCode 的終端機對新手應該不太容易理解他是做什麼的？雖然其實就是 cmd line 。
-

# 11/25

- JavaScript 是一個事件驅動的語言（ Event Triggered ？）
- 敏感的事件
- cheatsheet 小抄
- 一般來說不太需要轉字串， JS 的東西轉到 HTML 上就是字串（？）
- 今天的重點是迴圈（ loop ）
- 盡量不要用 else if ，容易出現邏輯錯亂的問題（？）（老師的個人偏好與建議）
  - 其他的語言的寫法可能是 elseif 或 elif ，寫法也容易錯亂（？）
- switch vs if/else
- switch case 最後一定要有 break
- Truthy / Falsy 一定要會，背 Falsy

```
! Not (真 -> 假 ； 假 -> 真)
&& AND (「真」的往下看，繼續找假的值，可以當作 if 的簡寫法)
|| OR (「假」的往下看，繼續找真的值)
```

- JS 的邏輯判斷叫做「短路求值法」
- 空的 [] 與 {} 是 true （？）。
- **可以單獨使用 if ，但是不能單獨使用 else 。只用 if 可以使邏輯單純。**
- 巢狀的語法結構也不建議，很容易打結。
- 日期的運算在程式語言中是比較困難的（比較不規則）。
- HTML5 input tag 的新功能，舊版瀏覽器不見得支援。
- JS 因為公開性質，安全性較低。要提升安全性，需要搭配伺服器的檢查。
- 09 account 要補練習

迴圈

- for 迴圈最常用
- 某些時候 while 比較方便
- 迴圈是用來做重複的事情
- for 迴圈與 array ，陣列，互相搭配
- 多重迴圈
- while

# 11/26

## 日期與時間

- JS 內建的 API 有時功能不足，因為本身是個很老的程式語言，每次改版都須考慮是否要向下相容。
- Date 的 API 不算好用。設計有點不符合人性直覺，不太好用。
- Date 是少數需要用 new 來開始的方法。
- Date 的月份是從 0~11...
- JS 常用函式庫
  - https://github.com/eyesofkids/mfee11-js/issues
  - 老師竟然把額外的參考資料放在 issues...
- 變數與常數命名
  - https://eddy-chang.gitbook.io/javascript-start-from-es6/part3/var_const_naming
- 微秒值（），常被用來當 id ，因為有唯一性

```
+new Date()
```

- 測試 JS 應用程式的執行時間， performance.now 或 benchmark.js
- 樣板字串
- 試著在上課的時候跟上每個範例並且寫好註解，後面複習比較輕鬆。
- 老師很喜歡說：「這是江湖術士的 trick 。」

# 11/27

- 建立陣列，一開始建空集合，後面再放入元素（？）
- 二維陣列
- iteration
- traveling
- 淺拷貝（ Shallow copy ）
- 深拷貝（ Deep copy ）
- 老師推薦「展開運算子」

```
const aArray = [1, 2, 3]
const copyArray = [...aArray]
```

- slice, concat
- 陣列屬性與方法
  - 針對陣列本身處理，通常有副作用（ side effect ，改變了原本陣列的樣子）

**記得看老師準備的講義**

- 寫程式的一些技巧都是為了減少重複的工作
- win map （？）
- 找不到問題出在哪一行的時候，注意一下編輯器的捲軸，確認一下行數

# 11/30

## 陣列

- map vs forEach
- async?
- findIndex vs find
- findIndex
- slice, 位置取 -1 ，從右邊算過來，但這個 -1 沒有索引值。
- API
- MDN 上的 "prototype"
- JSON, JS object notation
- B-JSON => NoSQL 資料庫格式，鍵值
- 不同瀏覽器的認定？
- VSCode 外掛 Rainbow Brackets
- Rainbow CSV 老師說也不錯
- Object.assign()
- JSON.parse 與 JSON.stringify 可以做深拷貝
- 置變定義法
- 物件工廠模式
- JS event loop
  - https://milletbard.com/2019/11/25/JavaScript-event-loop/
- 函式作用域，區塊作用域？
- ES6 的 TDZ
- 阮一峰的著作：ECMAScript 6 入门
  - https://es6.ruanyifeng.com/
- 連鎖語法，目的是讓程式碼簡潔。

# 12/01

- 物件的屬性名稱用中文字串，有可能有些瀏覽器會不支援。
- H：我覺得把學生資料改成物件之後， code 看起來更直覺了一些。
- 一個好習慣：函式先定義再使用。寫在程式碼比較上端。
- field, 傳進來的變數，動態屬性變數
- 演算法，計算機概論，跟數學有關
- Event Loop ，等待其他程序跑完才可以做的等候區，異步
- setTimeout() ，調整執行緒（？），作用的東西先放到等候區
- callback 語法？
- AJAX
- Node.js 預設 input 是異步（ Async ）的
- read / write
- AJAX, XML, 一些比較大比較嚴謹的系統常用
- 現在比較常用的是 JQuery.ajax()
- 為了跟伺服器相連
- JQuery ， Deferred 延時物件
- promise 在 ES6 已經成為標準
- **Fetch**
- async / await
