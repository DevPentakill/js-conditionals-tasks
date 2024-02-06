/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 60;
const is_student = false;
let ticktPrice=800;

if (age<10){
    ticktPrice *=0;
    console.log('Hello KID, your bus fare is:', ticktPrice);
}else if(is_student){
    ticktPrice *= 0.5;
    console.log('Dear Student, your bus fare is:', ticktPrice);
}else if (age >=60){
    ticktPrice = ticktPrice - (ticktPrice*0.15);
    console.log('Dear Uncle/Aunty, your bus fare is:', ticktPrice);
}else{
    console.log('Dear mango people, your bus fare is:', ticktPrice);
}
