function timeSince(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) return Math.floor(interval) + " лет назад";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " месяцев назад";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " дней назад";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " часов назад";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " минут назад";
    return "только что";
}


function createTransaction(item) {
    let row_tr = document.createElement('tr')

    let td1 = document.createElement('td');
    td1.textContent = item.transacID;

    let td2 = document.createElement('td');
    td2.textContent = item.wallet; 

    let td3 = document.createElement('td');
    td3.textContent = item.category; 

    let td4 = document.createElement('td');
    td4.textContent = item.sum; 

    let td5 = document.createElement('td');
    let transactionDate = new Date(item.date);
    td5.textContent = timeSince(transactionDate);

    row_tr.append(td1, td2, td3, td4, td5)

    return row_tr
}

export { createTransaction }