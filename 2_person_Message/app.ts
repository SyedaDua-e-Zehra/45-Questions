let personName :string =" ";
personName = prompt("What is your name?") ||'';

if(personName !== null && personName !== ' ')
{alert(`Hello ${personName}, wouid you like to learn typescript today`)}
else{
    alert(`You have to fill your name!`)
}
