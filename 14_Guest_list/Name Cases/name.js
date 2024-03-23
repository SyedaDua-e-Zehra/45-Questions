var personName = '';
personName = prompt(' What is your name?') || '';
var lowercase = personName.toLowerCase();
var Uppercase = personName.toUpperCase();
var titlecase = personName.split('').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(' ');
if (personName !== null && personName !== '') {
    alert("Hello ".concat(personName, ", Here are your name in:\n    lowercase: ").concat(lowercase, "\n    uppercase: ").concat(Uppercase, "\n    titlecase: ").concat(titlecase));
}
else {
    alert('please fill your name !');
}
