import { createOptions } from "../../components/options.js";
import { getCurrency, getData, postData } from "../../libs/http.js";
import { reload } from "../../libs/utils.js";

let id = localStorage.getItem('userId')

let form = document.forms[0]

getData(`wallets?walletId=${id}`)
    .then((res) => {
        let walletTypes = res.data.map(wallet => wallet.wallettype);

        console.log(walletTypes)
    reload(walletTypes, 'wallets', createOptions)

    })
    .catch((error) => console.error(error))

form.onsubmit = (e) => {
    e.preventDefault()

    let user = {}
    let fn = new FormData(form)

    fn.forEach((value, key) => {
        user[key] = value
    })

    postData('transactions', { ...user, id })
        .then(res => {
            console.log(res.data)
            window.location.replace('/pages/mytransactions/')
        })
        .catch(error => console.error(error))
    
}
