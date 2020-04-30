
var name = prompt('Enter your Name please!');
var age = prompt('Enter your Age please!');
var genderChar = prompt('Enter your Gender please! (m or f)');
var lowerCaseGenderChar=genderChar.toLocaleLowerCase;
var gender;

if (lowerCaseGenderChar == 'm') {
    gender = 'Male';
} else if (lowerCaseGenderChar = 'f') {
    gender = 'Female';
} else {
    gender='you enterd a wrong valur for the gender';
}

document.getElementById('loginName').innerHTML='Login as '+name;


alert('Wellcome '+name+', Your age is: '+age+', your Gender is: '+gender);


console.log(name);
console.log(age);
console.log(gender);