const app = document.getElementById('stock-section')

//////////////////////////////////////////////
//in stock section code                     //
/////////////////////////////////////////////
const stockBg = document.createElement('div')
stockBg.setAttribute('class', 'stock-bg')

const stockHd = document.createElement('div')
stockHd.setAttribute('class', 'stock-hd')

const stockH1 = document.createElement('h1')
stockH1.textContent = 'Currently In Stock'

const stockContentP = document.createElement('div')
stockContentP.setAttribute('class', 'stock-content-p')

const stockP = document.createElement('p')
stockP.setAttribute('class', 'copy')
stockP.textContent = 'Here are the snacks that are available in the Nerdery kitchen now.'

const imageContainer = document.createElement('div')
imageContainer.setAttribute('class', 'img-container')

app.appendChild(stockBg)
stockBg.appendChild(stockHd)
stockBg.appendChild(stockContentP)
stockBg.appendChild(imageContainer)
stockHd.appendChild(stockH1)
stockContentP.appendChild(stockP)

//////////////////////////////////////////////
//Voting section code                      //
/////////////////////////////////////////////
const votingSection = document.createElement('div')
votingSection.setAttribute('class', 'voting-section')

const voteSpacing = document.createElement('div')
voteSpacing.setAttribute('class', 'vote-spacing')

const snackHd = document.createElement('h1')
snackHd.setAttribute('class', 'snack-hd')
snackHd.textContent = 'Snack Voting'

const snackP = document.createElement('p')
snackP.setAttribute('class', 'snack-p')
snackP.textContent = `Vote on the snacks you want to see in this month's rotation`

const voteLine = document.createElement('div')
voteLine.setAttribute('class', 'vote-line line-spacing')

const voteSpacing2 = document.createElement('div')
voteSpacing2.setAttribute('class', 'vote-spacing')

const votingItems = document.createElement('div')
votingItems.setAttribute('class', 'voting-items')

const availableItems = document.createElement('div')
availableItems.setAttribute('class', 'available-items')

const availableHd = document.createElement('h2')
availableHd.setAttribute('class', 'available-hd')
availableHd.textContent = 'Available Items'

const voteCard = document.createElement('div')
voteCard.setAttribute('class', 'vote-card')

const selection = document.createElement('div')
selection.setAttribute('class', 'selection')

const selectionHd = document.createElement('h2')
selectionHd.setAttribute('class', 'selection-hd')
selectionHd.textContent = 'Selection'

const selectionLine = document.createElement('div')
selectionLine.setAttribute('class', 'selection-line')

app.appendChild(votingSection)
app.appendChild(votingItems)
votingSection.appendChild(voteSpacing)
votingSection.appendChild(voteSpacing2)
votingSection.appendChild(voteLine)
voteSpacing.appendChild(snackHd)
voteSpacing2.appendChild(snackP)
votingItems.appendChild(availableItems)
votingItems.appendChild(selection)
availableItems.appendChild(availableHd)
availableItems.appendChild(voteCard)
selection.appendChild(selectionHd)
selection.appendChild(selectionLine)

//////////////////////////////////////////////
//Api call                                 //
/////////////////////////////////////////////
var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:3000/snacks',)
request.setRequestHeader('Authorization', 'Bearer ' + '33b55673-57c7-413f-83ed-5b4ae8d18827');

request.onload = function () {
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.forEach(snack => {
            // The Currently in stock section code
            const card = document.createElement('div')
            card.setAttribute('class', 'snack-card')

            const imgContainer = document.createElement('div')
            imgContainer.setAttribute('class', 'snack-img-container')

            const snackImg = document.createElement('img')
            snackImg.setAttribute('class', 'snack-img')
            snackImg.src = snack.image

            const inStock = document.createElement('p')
            inStock.setAttribute('class', 'in-stock')
            inStock.textContent = snack.inStock

            const snackDescription = document.createElement('div')
            snackDescription.setAttribute('class', 'snack-description')

            const snackProduct = document.createElement('p')
            snackProduct.setAttribute('class', 'snack-product')
            snackProduct.textContent = snack.product

            const snackBrand = document.createElement('p')
            snackBrand.setAttribute('class', 'snack-brand')
            snackBrand.textContent = snack.brand

            imageContainer.appendChild(card)
            card.appendChild(imgContainer)
            card.appendChild(snackDescription)
            snackDescription.appendChild(snackProduct)
            snackDescription.appendChild(snackBrand)
            imgContainer.appendChild(snackImg)
            imgContainer.appendChild(inStock)

            //The voting section code
            const snackVotingCard = document.createElement('div')
            snackVotingCard.setAttribute('class', 'snack-voting-card')

            const plusImg = document.createElement('div')
            plusImg.setAttribute('class', 'plus-img')

            const voteContainer = document.createElement('div')
            voteContainer.setAttribute('class', 'vote-container')

            const snackProduct2 = document.createElement('p')
            snackProduct2.setAttribute('class', 'snack-product2')
            snackProduct2.textContent = snack.product

            const inStock2 = document.createElement('p')
            inStock2.setAttribute('class', 'in-stock2')
            inStock2.textContent = snack.inStock

            app.appendChild(snackVotingCard)
            snackVotingCard.appendChild(plusImg)
            snackVotingCard.appendChild(voteContainer)
            voteContainer.appendChild(snackProduct2)
            voteContainer.appendChild(inStock2)
        })
    } else{
        const errorMessage = document.createElement('h1')
        errorMessage.textContent = 'The website is down at the moment. Check back later!'
        app.appendChild(errorMessage)
        }
}

request.send()


///////////////////////////////////////////////
//html template                             //
/////////////////////////////////////////////
{/* <div class="stock-section">
    <div class="stock-bg">
        <div class="stock-hd">
            <h1>Currently In Stock</h1>
         </div>
         <div class="stock-content-p">
            <p class="copy">Here are the snacks that are available in the Nerdery kitchen now.</p>
        </div>
         <div id='img-container'>
            <div class='card>
            <div img>
                <snack img/>
                <in stock number>
            </div>
            <div description>
                <snack product/>
                <snack brand/>
            </div>
        </div>
    </div>
</div> 

<div class="voting-container">
    <div class="voting-section">
        <div class="vote-spacing">
            <h1 class="snack-hd">Snack Voting</h1>
        </div>
        <div class="vote-spacing">
            <p class="snack-p">Vote on the snacks you want to see in this month's rotation</p>
        </div>
        <div class="vote-line line-spacing"></div>
        <div class="vote-spacing"></div>
    </div>
    <div class="voting-items">
        <div class="available-items">
            <div> 
                <h2 class="available-hd">Available Items</h2> 
                <number of available items>
            </div>
            <div id="voting-items">
                <div>
                    <card>
                        <img/>
                        <div>
                            <snack name></snack>
                            <snack votes></snack>
                        </div>
                    </card>
                </div>
            </div>
        </div>
        <div class="selection">
            <div>
                <h2 class="selection-hd">Selection</h2>
                <number of items selected/>
            </div>
            <div class="selection-line"></div>
            <div>
                <card>
                    <snack name>
                    <snack vote number>
                </card>
            </div>
        </div>

    </div>
*/}

