"use strict";
let Guest_list = ['Sana', 'Zehra', 'Dua'];
// for(let i=0; i<Guest_list.length; i++){
// console.log('Dear Miss. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
let absent_Guest = 'Sana';
let new_Guest = 'Maha';
Guest_list[0] = new_Guest;
//for(let i=0; i<Guest_list.length; i++){
// console.log('Dear Miss. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
//}
console.log(`Miss.${absent_Guest} is not coming to the party`);
console.log('Good news! we find Big Table So we are inviting guests.');
Guest_list.unshift('Saima');
Guest_list.splice(2, 0, 'Mariya');
Guest_list.push('Bina');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Miss. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log('\nSorry we can not arrange big table,only two people will be invited.');
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    console.log(`Sorry Miss. ${remove_Guest},You are not invited for Dinner`);
}
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Miss. ' + Guest_list[i] + ',\n\nYou are still invited.\n\nThank you!\n\n');
}
Guest_list.splice(0, 2);
console.log(Guest_list);
