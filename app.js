const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address)
{
    console.log('Invalid Input')
}
else
{
    geocode(address, (error, data) => {
        if(error)
        console.log(error)
        else
        {
            forecast(data.longitude, data.latitude, (error, data) => {
                if(error)
                console.log(error)
                else
                console.log(data)
            })
        }
    })
}



