//footer
let footer = document.querySelector('#credit')
footer.innerHTML = 'Created By: Ryan M Blake'

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let cookieTotal = 0 //cookie total



//Display Update Functions
function gbQuantity(displayQuantity){
    let gbQuantity = document.querySelector('#qty-gb')
    gbQuantity.innerHTML = displayQuantity
}
function ccQuantity(displayQuantity){
    let ccQuantity = document.querySelector('#qty-cc')
    ccQuantity.innerHTML = displayQuantity
}
function sugarQuantity(displayQuantity){
    let sugarQuantity = document.querySelector('#qty-sugar')
    sugarQuantity.innerHTML = displayQuantity
}
function totalQuantity(displayQuantity){
    let quantity = document.querySelector('#qty-total')
    quantity.innerHTML = displayQuantity
}

//Button setup Gingerbread
const gbButtonUp = document.querySelector('#add-gb')
const gbButtonDown = document.querySelector('#minus-gb')

gbButtonUp.addEventListener('click', function(){
    gb++
    cookieTotal++
    gbQuantity(gb)
    totalQuantity(cookieTotal)
})
gbButtonDown.addEventListener('click', function(){
    if(gb > 0){
        gb--
        cookieTotal--
    }
    gbQuantity(gb)
    totalQuantity(cookieTotal)
})

//Button setup Chocolate Chip
const ccButtonUp = document.querySelector('#add-cc')
const ccButtonDown = document.querySelector('#minus-cc')

ccButtonUp.addEventListener('click', function(){
    cc++
    cookieTotal++
    ccQuantity(cc)
    totalQuantity(cookieTotal)
})
ccButtonDown.addEventListener('click', function(){
    if(cc > 0){
        cc--
        cookieTotal--
    }
    ccQuantity(cc)
    totalQuantity(cookieTotal)
})

//Button setup sugar cookie
const sugarButtonUp = document.querySelector('#add-sugar')
const sugarButtonDown = document.querySelector('#minus-sugar')

sugarButtonUp.addEventListener('click', function(){
    sugar++
    cookieTotal++
    sugarQuantity(sugar)
    totalQuantity(cookieTotal)
})
sugarButtonDown.addEventListener('click', function(){
    if(sugar > 0){
        sugar --
        cookieTotal--
    }
    sugarQuantity(sugar)
    totalQuantity(cookieTotal)
})