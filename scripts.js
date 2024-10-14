const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")



function convertvalues() {
    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert") //valor real 
    const currencyvalueconverted = document.querySelector(".currency-value") // outras moedas



    const dolartoday = 5.2
    const eurotoday = 6.2
    const libratoday = 7.33
    const bitcointoday = 62.675 

    const convertedvalue = inputcurrencyvalue / dolartoday

    if (currencyselect.value == "dolar")
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue / dolartoday)

    if (currencyselect.value == "euro")
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {     
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue / eurotoday)

        if (currencyselect.value == "libra")
            currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-UK", {
        stely: "currency",
    currency: "GBP"
}).format(inputcurrencyvalue / libratoday)


if(currencyselect.value == "bitcoin")
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-CU", {
        stely: "currency",
    currency:"CUC"
}).format(inputcurrencyvalue /bitcointoday)
    


    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyvalue)

   
}
   
function changecurrency() {
    const currencyname = document.getElementById("currency-name")
    const currencyimage = document.querySelector(".currency-img")


if (currencyselect.value == "dolar"){
    currencyname.innerHTML = "Dólar americano"
    currencyimage.src = "./assets/estados-unidos (1) 1.png"
}

  if (currencyselect.value == "euro"){
    currencyname.innerHTML = "Euro"
    currencyimage.src ="./assets/euro.png"
  }  
  if(currencyselect.value == "libra"){
    currencyname.innerHTML = "Libra"
    currencyimage.src ="./assets/libra 1.png"
  }

if(currencyselect.value == "bitcoin"){
    currencyname.innerHTML = "Bitcoin"
    currencyimage.src ="./assets/bitcoin 1.png"
}

  convertvalues()
}
currencyselect.addEventListener("change",changecurrency)
convertbutton.addEventListener("click", convertvalues) 