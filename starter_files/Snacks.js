//api call 

//html template
{/* <div id='img-container'>
        <div class='card>
            <snack img/>
            <snack product/>
            <snack brand/>
        </div>
    </div> */}
var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:3000/snacks',)
request.setRequestHeader('Authorization', 'Bearer ' + '33b55673-57c7-413f-83ed-5b4ae8d18827');
const app = document.getElementById('img-container')

request.onload = function () {
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.forEach(snack => {
            const card = document.createElement('div')
            card.setAttribute('class', 'snack-card')
            const snackImg = document.createElement('img')
            snackImg.src = snack.image

            const snackProduct = document.createElement('p')
            snackProduct.textContent = snack.product

            const snackBrand = document.createElement('p')
            snackBrand.textContent = snack.brand

            app.appendChild(card)
            card.appendChild(snackImg)
            card.appendChild(snackProduct)
            card.appendChild(snackBrand)
        })
    } else{
        const errorMessage = document.createElement('h1')
        errorMessage.textContent = 'The website is down at the moment. Check back later!'
        app.appendChild(errorMessage)
        }
}

request.send()



