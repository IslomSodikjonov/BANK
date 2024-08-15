function createWallet(item) {
    let walletDiv = document.createElement('div');
    walletDiv.className = 'wallet';

    let typeCard = document.createElement('p');
    typeCard.className = 'visa';
    typeCard.textContent = item.wallettype;

    let sum = document.createElement('p');
    sum.className = 'num';
    sum.textContent = item.money;

    let rubP = document.createElement('p');
    rubP.className = 'rub';
    rubP.textContent = item.currency;

    walletDiv.append(typeCard, sum, rubP)

    return walletDiv
}

export { createWallet }