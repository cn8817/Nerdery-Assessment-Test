//api call 

//html template
{/* <div id='img-container'>
        <div class='card>
            <div img>
                <snack img/>
            </div>
            <div description>
                <snack product/>
                <snack brand/>
            </div>
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

            const imgContainer = document.createElement('div')
            imgContainer.setAttribute('class', 'snack-img-container')

            const snackImg = document.createElement('img')
            snackImg.setAttribute('class', 'snack-img')
            snackImg.src = snack.image

            const snackDescription = document.createElement('div')
            snackDescription.setAttribute('class', 'snack-description')

            const snackProduct = document.createElement('p')
            snackProduct.setAttribute('class', 'snack-product')
            snackProduct.textContent = snack.product

            const snackBrand = document.createElement('p')
            snackBrand.setAttribute('class', 'snack-brand')
            snackBrand.textContent = snack.brand

            app.appendChild(card)
            card.appendChild(imgContainer)
            card.appendChild(snackDescription)
            snackDescription.appendChild(snackProduct)
            snackDescription.appendChild(snackBrand)
            imgContainer.appendChild(snackImg)
        })
    } else{
        const errorMessage = document.createElement('h1')
        errorMessage.textContent = 'The website is down at the moment. Check back later!'
        app.appendChild(errorMessage)
        }
}

request.send()



