//api call
var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:3000')

request.onload = function () {
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.forEach(snack => {
            console.log(snack.snacks)
        })
    } else{
        console.log('error')
        }
}

request.send()

//displaying the data