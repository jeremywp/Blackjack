export function getCards(deckId, cardAmount) {
    let cardPromise = new Promise((resolve, reject) =>{
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