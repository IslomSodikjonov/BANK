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

    if (validate('input')) {
        getData(`users?email=${user.email}`)
            .then(res => {
                console.log(res.data);
                if (res.data.length && res.data[0].password == user.password) {
                    window.location.replace('/')
                    localStorage.setItem("userId", res.data[0].userId)
                    localStorage.setItem('token', res.data[0].token) 
                    console.log(res.data);
                } else {
                    console.log("no");
                }
            })
            .catch(error => console.error(error))
    }

    console.log(user);
    form.reset()
}   

let signUpBtn = document.querySelector('.sign_up_btn')

signUpBtn.onclick = () => {
    window.location.replace('/pages/signup/')
}