import { header } from "../../components/header.js";
import { createWallet } from "../../components/wallets.js";
import { getData, postData } from "../../libs/http.js"
import { generateToken, reload, validate } from "../../libs/utils.js"

header()

let id = localStorage.getItem("userId") 
console.log(id);

let emailTxt = document.querySelector(".main_mail")
let headEmail = document.querySelector('.mail')

getData(`users?userId=${id}`)
.then(res => {
        let data = res.data[0]
        emailTxt.textContent = data.email
        headEmail.textContent = data.email
    
    })
    .catch(error => console.error(error))

getData(`wallets?walletId=${id}`)
    .then(res => {
        reload(res.data, 'wallets_box', createWallet)
        
    })
    .catch(error => console.error(error))

let showMoreWallet = document.querySelectorAll('.show_more_wallet')
    showMoreWallet.forEach(btn => {
    btn.onclick = () => {
        window.location.href = '/pages/mywallets/'
    }
})

let showMoreTran = document.querySelectorAll('.show_more_transac')
    showMoreTran.forEach(btn => {
    btn.onclick = () => {
        window.location.href = '/pages/mytransactions/'
    }
})

let showMain = document.querySelectorAll('.main')
    showMain.forEach(btn => {
    btn.onclick = () => {
        window.location.href = '/'
    }
})

let addWallet = document.querySelector('.add_wallet')
addWallet.onclick = () => {
    window.location.href = '/pages/addwallets/'
}

let signOut = document.querySelector('.signout')

signOut.onclick = () => {
    window.location.replace('/pages/signup/')
}
