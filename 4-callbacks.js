setTimeout(() => {

}, 2000);

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            'latitude': 0,
            'longitude': 0
        }
        callback(data)
    }, 2000) 
}

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a+b)
    }, 2000)
}

add(1, 4, (sum) => {console.log(sum)})