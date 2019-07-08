const express = require('express') 
const path = require('path')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express() 

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname + "/public")))

const address = process.argv[2]

app.get('', (req, res) => {
    res.render('index', {
        title: 'weateryyyy',
        name: 'kanchan'
    })
})
if(!address)
{
    console.log('Invalid Input')
}
else
{
    geocode(address, (error, {latitude, longitude, location}) => {
        if(error)
        console.log(error)
        else
        {
            forecast(longitude, latitude, (error, data) => {
                if(error)
                console.log(error)
                else
                {
                    app.get('/weather', (req, res) => {     
                        res.send({
                            data,
                            location
                        }) 
                    }) 
                    
                }
            })
        }
    })
}

app.listen(3000, () => {
    console.log('Server is up')
})
