const cardArray = [
    {
        name: 'bell',
        img: 'images/bell.png',
    },
    {
        name: "tree",
        img: "images/christmas-tree-2.png",
    },
    {
        name: "hat",
        img: "images/santa-hat.png",
    },
    {
        name: "snowglobe",
        img: "images/snowglobe.png",
    },
    {
        name: "snowman",
        img: "images/snowman.png",
    },
    {
        name: 'wreath',
        img: 'images/wreath.png',
    },
    {
        name: 'bell',
        img: 'images/bell.png',
    },
    {
        name: "tree",
        img: "images/christmas-tree-2.png",
    },
    {
        name: "hat",
        img: "images/santa-hat.png",
    },
    {
        name: "snowglobe",
        img: "images/snowglobe.png",
    },
    {
        name: "snowman",
        img: "images/snowman.png",
    },
    {
        name: 'wreath',
        img: 'images/wreath.png',
    }
]

cardArray.sort(() => 0.5 - Math.random()); //sorting arrays randomly

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img") 
        card.setAttribute("src", "images/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener('click', flipKard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log("check for match")
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert("You have clicked the same image!")
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipKard)
        cards[optionTwoId].removeEventListener('click', flipKard)

        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == (cardArray.length/2))
    resultDisplay.textContent = "cOngratulations u found them all!"
}

function flipKard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}