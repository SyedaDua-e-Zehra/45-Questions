// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array
let numbers: number[]=[1,2,3,4,5,6,7,8,9,10];
for(let num of numbers) {
    let ordinalEnding: string;
    if(num === 1){
        ordinalEnding="st";
    }
    else if (num === 2){
        ordinalEnding="nd";   
    }
    else if (num === 3){
        ordinalEnding="rd";   
    }
    else {
        ordinalEnding="th";   
    }
    console.log(`${num}${ordinalEnding}`);
}