"use strict";
let Guest_list = ['Sana', 'Zehra', 'Dua'];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Miss. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
let absent_Guest = 'Sana';
let new_Guest = 'Maha';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Miss. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log(`Miss.${absent_Guest} is not coming to the party`);
