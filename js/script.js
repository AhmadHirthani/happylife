var name = prompt('Enter your Name please!');
var age = prompt('Enter your Age please!');
var genderChar = prompt('Enter your Gender please! (m or f)');
var lowerCaseGenderChar = genderChar.toLocaleLowerCase();
var gender;
var alertMessage = '';
ageWarningMessage = '';

//this is my function calling
writeElementById('loginName', 'Login as ' + name);


var filePath = "css/femaleStyle.css";
var link = 'link';

function setStyleLink(filePath, link) {
    var styleLink = document.getElementsByTagName(link);
    styleLink[0].href = filePath;
}

if (lowerCaseGenderChar == 'f') {
    gender = 'Female'
    //this is my function calling
    setStyleLink(filePath, link);
    alertMessage = 'You will change you to pink theme';
} else if (lowerCaseGenderChar = 'm') {
    gender = 'Male';
} else {
    gender = 'you enterd a wrong valur for the gender';
}

if (age < 18) {
    ageWarningMessage = '+18';
}

function writeElementById(elementId, message) {
    document.getElementById(elementId).innerText = message;

}

//this is my function calling
writeElementById('warning', ageWarningMessage);




//document.getElementById('pageTitle').innerHTML='Happy Life '+ageWarningMessage;
var pageTilte = document.getElementsByTagName("title");
pageTilte[0].innerText = "css/femaleStyle.css";

//='ggg';



//document.write(ageWarningMessage);


alert('Wellcome ' + name + ',' + alertMessage);





