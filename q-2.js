/**
 * Q.2:- fetch data based on city and show the temperature of given city
 */

const { BASE_URL } = require("./baseUrl");

function cityWeather(city) {
    if (typeof city !== "string") {
        throw Error("not a string")
    }
    if (!city || !city.trim()) {
        // console.log('here')
        throw Error("string is empty")
    }

    return new Promise((resolve, reject) => {
        // call an axios call to fetch data with respect to city
        axios.get(`${BASE_URL}&q=${city}`).then((response) => {
            // check if data retrieved from api is empty
            if (!response.data || !Object.keys(response.data).length) {
                return reject("city not found")
            }
            // return the desired temperature output at last 
            resolve(response.data.main);

        }).catch((error) => {
            return reject('city not found')
        })
    })
}

exports = {
    cityWeather
}