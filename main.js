import axios from "axios"
import { getData } from "./libs/http.js"
import { createWallet } from "./components/wallets.js"
import { reload } from "./libs/utils.js"
import { header } from "./components/header.js"
import { createTransaction } from "./components/transactions.js"

header()

let token = localStorage.getItem("token")
let headEmail = document.querySelector('.mail')
let emailTxt = document.querySelector('.main_mail')
let name = document.querySelector('.name')
let surname = document.querySelector('.surname')

let signOut = document.querySelector('.signout')

signOut.onclick = () => {
    window.location.replace('/pages/signup/')
}

if(!token) {
  window.location.replace('/pages/signup/')  
}



let id = localStorage.getItem('userId')
console.log(id)
getData(`users?token=${token}`)
    .then(res => {
        for (let item of res.data) {
            headEmail.textContent = item.email  
            emailTxt.textContent = item.email  
            name.textContent = item.name 
            surname.textContent = item.surname  
        }
    })
    .catch(error => console.error(error))

getData(`users?userId=${id}`)
    .then(res => {
        console.log(res.data);

        let data = res.data[0]

        
            headEmail.textContent = data.email  
            emailTxt.textContent = data.email  
            name.textContent = data.name 
            surname.textContent = data.surname  
        
    })
    .catch(error => console.error(error))

getData(`wallets?walletId=${id}`)
    .then(res => {
        reload(res.data.slice(0, 4), 'wallets_box', createWallet)
        
    })
    .catch(error => console.error(error))

getData(`transactions?id=${id}`)
    .then(res => {
        reload(res.data, 'data_table', createTransaction)
        
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


getData("users")
    .then(res => console.log(res))
    .catch(error => console.error(error))