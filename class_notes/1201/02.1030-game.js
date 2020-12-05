const desk = document.getElementById('desk')
const pointTotal = document.getElementById('pointTotal')
const message = document.getElementById('message')
const deal = document.getElementById('deal')

const cards = []
const suitArray = ['h', 'd', 's', 'c']

// 工廠，生產卡牌
function createCard(suit, point) {
  let cardImg = null
  switch (point) {
    case 1:
      cardImg = Poker.getCardImage(60, suit, 'A')
      break
    case 11:
      cardImg = Poker.getCardImage(60, suit, 'J')
      break
    case 12:
      cardImg = Poker.getCardImage(60, suit, 'Q')
      break
    case 13:
      cardImg = Poker.getCardImage(60, suit, 'K')
      break
    default:
      cardImg = Poker.getCardImage(60, suit, point)
      break
  }

  // 一張牌的物件
  return { suit, point, cardImg }
}

function shuffleArray(inputArray) {
  const array = [...inputArray]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 13; j++) {
    cards.push(createCard(suitArray[i], j + 1))
  }
}

console.log(cards)
console.log(typeof cards)

const shuffleCards = shuffleArray(cards)
console.log(typeof shuffleCards)

// poker函式庫產生卡片圖形的參數
// 參考：https://tairraos.github.io/Poker.JS/#chinese-version-readme
// size  - 牌的象素高度。牌的宽高比固定为3:4。缺省值为200。
// suit  - 牌面花色。取值大小写不敏感，必须为下列[]内的值之一：
//         ['h', 'hearts', 'd', 'diamonds', 's', 'spades', 'c', 'clubs']
//         值对应红桃，方块，黑桃，梅花, 'h', 'd', 's', 'c' 是缩略写法
//         当牌面点数为'JOKER'时，红桃和方块表示牌为大王；黑桃和梅花表示牌为小王。
//         缺省值为'h'
// point - 牌面点数。取值大小写不敏感，必须为下列[]内的值之一：
//         ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'O', 'JOKER']
//         'O'(字母O)是'JOKER'的缩略写法
//         缺省值为'O'

desk.appendChild(cards[11].cardImg)
desk.appendChild(cards[20].cardImg)
