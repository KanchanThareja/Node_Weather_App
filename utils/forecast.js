const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0cde16046f05970f4881593170eaf0a1/37.8267,122.4233'

    request({ url: url, json: true }, (error, response) => { 
        if(error || response.body.error)
        callback('Unable to connect to internet', undefined)
        else
        callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + 
        ' degrees out. There is a ' + response.body.currently.precipProbability + 
        '% chance of rain.') 
    }) 

}

module.exports = forecast