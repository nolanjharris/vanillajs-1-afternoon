console.log("yeah buddy");
let cardID = document.getElementById('cardId');
let cardStyle = document.getElementById('cardStyle');

console.log(cardID);
console.log(cardStyle);

function setCard() {
    let card = document.getElementById(cardID.value);
    card.style.color = cardStyle.value;
    console.log(cardID.value);
}

function resetCards() {
    let allCards = document.getElementsByTagName('section');
    for (let i = 0; i < allCards.length; i++) {
        allCards[i].removeAttribute("style");
    }
}