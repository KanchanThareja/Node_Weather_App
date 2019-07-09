const express = require('express') 
const path = require('path')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const hbs = require('hbs')

const app = express() 
const port =process.env.PORT || 3000
const partialsDir = path.join(__dirname, "/partials" )


app.set('view engine', 'hbs')

hbs.registerPartials(partialsDir)
app.use(express.static(path.join(__dirname, "/public")))

app.get('', (req, res) => {
    res.render('index', {
        title: 'WeatherOn',
        name: 'kanchan'
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'kanchan'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'WeatherOn Help',
        name: 'kanchan'
    })
})

app.get('/weather', (req, res) => {     
    if(!req.query.address)
    {
        return res.send({
            error: 'NO address provided'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error)
        return res.send({error})
        else
        {
            forecast(longitude, latitude, (error, data) => {
                if(error)
                return res.send({error})
                else
                { 
                        res.send({
                            'forecast': data,
                            location,
                            'address': req.query.address
                        })
                }
            })
        }
    })
})
    

app.get('*', (req, res) => {
    res.render('404', {
        error: 'MY bad 404 error!'
    })
})

app.listen(port, () => {
    console.log('Server is up')
})
