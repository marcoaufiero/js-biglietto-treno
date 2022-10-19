function displayPrice(){

let km = document.getElementById("inputKm").value;

let userAge = document.getElementById("inputAge").value;

const priceKm = 0.21;

let ticketPrice = parseFloat(km * priceKm).toFixed(2);

let ticketDiscount = parseFloat().toFixed(2);

if(userAge < 18){
    ticketDiscount = (ticketPrice / 100) * 20;

}else if(userAge > 65){
    ticketDiscount = (ticketPrice / 100) * 40;

}else{
    ticketDiscount = 0;
}

let ticketDiscountAlert = parseFloat(ticketDiscount).toFixed(2);

let finalPrice = parseFloat(ticketPrice - ticketDiscount).toFixed(2);

if(ticketDiscount !== 0){

    document.getElementById('ticketDiscountDisplay').innerHTML = `E' stato applicato uno sconto di € ${ticketDiscountAlert}`;
}

document.getElementById('finalPriceDisplay').innerHTML = `Il prezzo del biglietto è € ${finalPrice}`;

console.log(ticketPrice, ticketDiscountAlert, finalPrice);

}

