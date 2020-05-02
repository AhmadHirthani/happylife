var name = prompt('Enter your Name please!');
var age = prompt('Enter your Age please!');
var genderValid = false;
var genderChar;
var quantityValid = false;
var quantity = '';

while (!genderValid) {
    genderChar = prompt('Enter your Gender please! (m or f)');
    if (genderChar == 'f' || genderChar == 'F' || genderChar == 'M' || genderChar == 'm') {
        genderValid = true;
    }
}

while (!quantityValid) {
    quantity = prompt('How many flowers do you want? Maximum 5');
    if (quantity > 0 && quantity < 6) {
        quantityValid = true;
    }
}


var article = document.createElement("ARTICLE");
article.setAttribute('id', 'imagesArticle')
var section = document.createElement("SECTION");
document.body.appendChild(article);
article.appendChild(section);

for (x = 1; x <= quantity; x++) {
    var img = document.createElement("IMG");
    img.setAttribute("src", "/images/" + x + ".jpg")
    img.setAttribute("width", "200");
    img.setAttribute("height", "200");
    img.setAttribute("alt", "The Pulpit Rock");
    section.appendChild(img);
}

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







