function getDeck() {
    let aPromise = new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
            type: 'GET',
            success: (response) => {
                resolve(response);
            },
            error: (error) => {
                reject(error);
            }
        })
    });
    return aPromise;
    //return new Promise((resolve, reject) => {});
}

function getCards(deckId, cardAmount) {
    return new Promise((resolve, reject) =>{
        $.ajax({
            url: 'https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?count=' + cardAmount,
            type: 'GET',
            success: (response) => {
                resolve(response);
        },
        error: (error) => {
                reject(error);
        }
        });
    });
}

let deckPromise = getDeck();

deckPromise.then((data) => {
    getCards(data.deck_id, 2).then((cardData) => {
        document.getElementById('card0').src = cardData.cards[0].image;
        document.getElementById('card1').src = cardData.cards[1].image;
    });

    getCards(data.deck_id, 2).then((cardData) => {
        document.getElementById('card2').src = cardData.cards[0].image;
        document.getElementById('card3').src = cardData.cards[1].image;
    })
});

function hitP1() {
    deckPromise.then((data) => {
        getCards(data.deck_id, 1).then((cardData) => {
            $('#p1Cards').append("<img src='" + cardData.cards[0].image + "'>");
        })
    })
}

function hitP2() {
    deckPromise.then((data) => {
        getCards(data.deck_id, 1).then((cardData) => {
            $('#p2Cards').append("<img src='" + cardData.cards[0].image + "'>");
        })
    })
}

getDeck();