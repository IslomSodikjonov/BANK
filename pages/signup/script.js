import { getData, postData } from "../../libs/http.js"
import { generateToken, reload, validate } from "../../libs/utils.js"

let form = document.forms[0]

form.onsubmit = (e) => {
    e.preventDefault()

    let user = {}
    let fn = new FormData(form)

    fn.forEach((value, key) => {
        user[key] = value
    })

    let token = generateToken()
    if (validate('input')) {
        postData('users', { ...user, token })
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userId', res.data.userId)
                window.location.replace('/')
            })
            .catch(error => console.error(error))
    } else {
        console.log('no');
    }

    form.reset()
}

let signInBtn = document.querySelector('.sign_in_btn')
signInBtn.onclick = () => {
    window.location.replace('/pages/signin/')
}

