const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia3RoYXIiLCJhIjoiY2p4dDV2YmhmMG9zczNtbWZmNXgwaWl6NyJ9.x5fljwTX9UpVqtc5L8JGtQ'
    request({url: url, json: true}, (error, response) => {
        if(error || response.body.features.length === 0)
        {
            callback('Unable to connect', undefined)
        }
        else
        {
            callback(undefined, {
                'latitude': response.body.features[0].center[0],
                'longitude': response.body.features[0].center[1],
                'location': response.body.features[0].place_name
            })
        }
    })
 }
module.exports = geocode