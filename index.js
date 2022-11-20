// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}

wrapGifts(gifts);




const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event) {
    for (let i = 0; i < names.length - 1; i++) {
   return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
}
return names;
}


let countdown=10;
function countDown(countdown){
while(countdown>0){
    console.log(countdown--);
   
    console.log(countdown);
}
}
