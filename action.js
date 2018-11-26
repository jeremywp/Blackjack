import {getDeck} from "./API Module";

import {getCards} from "./card Module";

let deckPromise = getDeck();

deckPromise.then((data) => {
    getCards(data.deck_id, 1).then((cardData) => {
        for (i=0; i < numcards; i++) {
        playerOne.push(cardData.cards[i]);}
    });

    getCards(data.deck_id, 2).then((cardData) => {
        document.getElementById('card2').src = cardData.cards[0].image;
        document.getElementById('card3').src = cardData.cards[1].image;
    })
});

function drawP1() {
    cardPromise.then((data) => {
        getCards(data.deck_id, 1).then((cardData) => {
            $('#p1Cards').append("<img src='" + cardData.cards[0].image + "'>");
        })
    })
}

function drawP2() {
    cardPromise.then((data) => {
        getCards(data.deck_id, 1).then((cardData) => {
            $('#p2Cards').append("<img src='" + cardData.cards[0].image + "'>");
        })
    })
}

getDeck();