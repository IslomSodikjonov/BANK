function createOptions(item) {
    let option = document.createElement('option')
    option.value = item
    option.textContent = item

    return option
}

export { createOptions }