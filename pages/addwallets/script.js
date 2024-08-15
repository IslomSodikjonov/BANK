import { createOptions } from "../../components/options.js";
import { getCurrency, getData, postData } from "../../libs/http.js";
import { reload } from "../../libs/utils.js";

let id = localStorage.getItem('userId')
let walletId = id


let form = document.forms[0]

form.onsubmit = (e) => {
    e.preventDefault()

    let user = {}
    let fn = new FormData(form)

    fn.forEach((value, key) => {
        user[key] = value
    })

    postData('wallets', { ...user, walletId })
        .then(res => {
            console.log(res.data)
            window.location.replace('/pages/mywallets/')
        })
        .catch(error => console.error(error))
    
}

getCurrency("list")
    .then((res) => {
        let currency = Object.keys(res.data.currencies) 
        console.log(currency)
        reload(currency, 'currencies', createOptions)
    })
    .catch((error) => console.error(error))