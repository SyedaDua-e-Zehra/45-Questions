// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
//   and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time
function make_sandwiches(item:string[]){
    console.log("\n\nMake your sandwiches with:");
    item.forEach(element => console.log("-" + element));
    console.log("\n\nEnjoy your sandwiches !");
}
make_sandwiches(['cheese','egg','jelly']);
make_sandwiches(['beef','buter']);
make_sandwiches(['chicken','veg','potato']);