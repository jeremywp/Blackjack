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

