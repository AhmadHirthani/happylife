var name = prompt('Enter your Name please!');
var age = prompt('Enter your Age please!');
var genderChar = prompt('Enter your Gender please! (m or f)');
var lowerCaseGenderChar=genderChar.toLocaleLowerCase();
var gender;
var styleLink = document.getElementsByTagName("link");
var alertMessage='';
ageWarningMessage='';


document.getElementById('loginName').innerText='Login as '+name;





if (lowerCaseGenderChar == 'f') {
    gender = 'Female';
    styleLink[0].href = "css/femaleStyle.css";
    alertMessage='You will change you to pink theme';
} else if (lowerCaseGenderChar = 'm') {
    gender = 'Male';
} else {
    gender='you enterd a wrong valur for the gender';
}

if(age < 18){
    ageWarningMessage='+18';
}

document.getElementById('warning').innerText=ageWarningMessage;


//document.getElementById('pageTitle').innerHTML='Happy Life '+ageWarningMessage;
var pageTilte=document.getElementsByTagName("title");
pageTilte[0].innerText = "css/femaleStyle.css";

//='ggg';



//document.write(ageWarningMessage);


alert('Wellcome '+name+','+ alertMessage);





