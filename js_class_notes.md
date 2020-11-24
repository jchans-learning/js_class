# 11/24 上課筆記

- Eddy老師
  - JS
    - 教材：https://github.com/eyesofkids/mfee11-js
    - https://eddy-chang.gitbook.io/javascript-start-from-es6/
    - https://github.com/eyesofkids/mfee11-js/blob/main/%E6%95%99%E6%9D%90/一開始宣告就出市值
  - React


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
- JS的新資料類型， Big Int （額外談及），目前不見得所有瀏覽器都能用。

```
形式：
13n
```

- 原生 JS 能表示的最大整數 2^53 。
- ECMA文件： https://www.ecma-international.org/publications/standards/Ecma-262.htm
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
- 
