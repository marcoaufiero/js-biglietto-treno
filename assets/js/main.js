let km = prompt("inserisci i chilometri da percorrere");

let userAge = prompt("inserisci la tua età");

const priceKm = 0.21;

let ticketPrice = km * priceKm;

let ticketDiscount;

if(userAge < 18){
    ticketDiscount = (ticketPrice / 100) * 20;

}else if(userAge > 65){
    ticketDiscount = (ticketPrice / 100) * 40;

}else{
    ticketDiscount = 0;
}

let finalPrice = ticketPrice - ticketDiscount;


console.log(ticketPrice, ticketDiscount, finalPrice)