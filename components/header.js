function header() {
    let header = document.querySelector('header')

    header.innerHTML = `<div class="container">
    <div class="head_box">
        <div class="left">
            <p class="main">Главная</p>
            <p class="my_wallet show_more_wallet"">Мои кошельки</p>
            <p class="my_transactions show_more_transac">Мои транзакции</p>
        </div>
        <div class="right">
            <p class="mail">alexadams@google.com</p>
            <svg class="signout" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6.75 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H6.75" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 12.75L15.75 9L12 5.25" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.75 9H6.75" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        </div>
    </div>`
}

export { header }