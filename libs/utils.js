function reload(arr, place, Component) {
    let box = document.querySelector(`.${place}`)

    for (let item of arr) {
        let elem = Component(item)

        box.append(elem)
    }
}

function generateToken(length = 12) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ''

    for (let i = 0; i < length; i++) {
        let rnd = Math.floor(Math.random() * characters.length)

        result += characters[rnd]
    }

    return result
}

let regEx = {
    name: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    surname: /^(\s|\w)\w*\W*$/,
    password: /^(\s|\w)\w*\W*$/,
}

function validate(elems) {
    let isValid = true

    let inputs = document.querySelectorAll(`.${elems}`)

    inputs.forEach(inp => {
        let name = inp.getAttribute('name')
        if (regEx[name].test(inp.value)) {
            inp.style.border = '2px solid green'
        } else {
            isValid = false
            inp.style.border = '2px solid red'
        }
    })
    return isValid
}

export { reload, generateToken, validate }