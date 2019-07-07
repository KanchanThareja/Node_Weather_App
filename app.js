const request = require('request')

const url = 'https://api.darksky.net/forecast/0cde16046f05970f4881593170eaf0a1/37.8267,122.4233'

request({ url: url, json: true }, (error, response) => { 
    if(error || response.body.error)
    console.log('Unable to connect to internet')
    else
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + 
    ' degrees out. There is a ' + response.body.currently.precipProbability + 
    '% chance of rain.') 
}) 


const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia3RoYXIiLCJhIjoiY2p4dDV2YmhmMG9zczNtbWZmNXgwaWl6NyJ9.x5fljwTX9UpVqtc5L8JGtQ'

request({ url: url2, json: true }, (error, response) => { 
    if(error || response.body.features.length === 0)
    console.log('Unable to connect to Location Services')
    else{
        const lattitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
    }
 }) 

