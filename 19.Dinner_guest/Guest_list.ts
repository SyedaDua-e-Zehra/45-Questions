let Guest_list :string[] = ['Sana','Zehra','Dua'];
// for(let i=0; i<Guest_list.length; i++){
    // console.log('Dear Miss. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
let absent_Guest :string = 'Sana';
let new_Guest :string = 'Maha';
Guest_list[0] = new_Guest ;
//for(let i=0; i<Guest_list.length; i++){
   // console.log('Dear Miss. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
//}
// console.log(`Miss.${absent_Guest} is not coming to the party`)
// console.log('Good news! we find Big Table So we are inviting guests.')
//yahan pr array mai 3 guest add kiye hain.
Guest_list.unshift('Saima');
Guest_list.splice(2 , 0 , 'Mariya');
Guest_list.push('Bina');
//yahan pr 6 guest k array ko remove karaya hai.
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Miss. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
//yahan pr mene guest remove kiye hain.
//console.log('\nSorry we can not arrange big table,only two people will be invited.');

while(Guest_list.length >2){
  let remove_Guest =  Guest_list.pop();
  //sorry guest for no invitation.
//   console.log(`Sorry Miss. ${remove_Guest},You are not invited for Dinner`);
}
//mere bache hoi 2 invited guest.
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Miss. ' + Guest_list[i] + ',\n\nYou are still invited.\n\nThank you!\n\n')
// }
//mene yahan sb guest remove kr diye 
Guest_list.splice(0,2);
console.log(Guest_list)
//Exercise 19
//print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of guest are: ${Guest_list.length}`);