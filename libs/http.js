import axios from "axios";
let apiUrl = 'http://localhost:8080'

export async function getData(endpoint) {
    try {
        let res  = await axios.get(`${apiUrl}/${endpoint}`)
        return res
    } catch (error) {
        throw error
    }
}

export async function getCurrency(endpoint) {
    let currencyApi = "https://api.apilayer.com/currency_data" 

    try {
        let res = await axios.get(`${currencyApi}/${endpoint}`, {
            headers: {
                apiKey: "2rAnZupYXfkosR1WhPpIqbFTd255HjVF"

            }
        })
            return res
    }  catch (error) {
        console.log(error)
        throw error
    }
}

export async function postData(endpoint, body) {
    try {
        let res  = await axios.post(`${apiUrl}/${endpoint}`, body)
        return res
    } catch (error) {
        throw error
    }
}