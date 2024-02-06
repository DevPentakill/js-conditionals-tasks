/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const myScore = 81;
const frndScore = 80;

if (myScore > 80) {
    if(frndScore > 80){
        console.log('Lets go to lunch Bondhu');
    }else if (frndScore >= 60 && frndScore <=80){
        console.log('Good luck nextime Dost');
    }else if (frndScore >=40 && frndScore <60){
        console.log('Ghosting my friend in whatsApp');
    }else{
        console.log('Block friend: K era, ko theke elo era?');
    }

} else {
    console.log('Sleeping in home and acting sadify');
}
