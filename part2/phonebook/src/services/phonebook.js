import axios from "axios"
const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () => {
    return axios
        .get(baseUrl)
        .then(response => response.data)
}

const addPersonToDb = (personObject) => {
    return axios
        .post(baseUrl, personObject)
        .then(response => response.data)
}

export default {
    addPersonToDb,
    getAllPersons
}