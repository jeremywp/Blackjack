export function getDeck() {
    let deckPromise = new Promise((resolve, reject) => {
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
    return deckPromise;
    //return new Promise((resolve, reject) => {});
}

export function getCards(deckId, cardAmount) {
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