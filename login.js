
function authorize()
// authorize is the function name and when paired with onclick in the html everything within the function brackets will take place as accordingly
{// the var is a variable that plays a role because with the "var" and ".value" the input in the html is able to be accessed because it has value which in turn gives the code ability to use functions and equations
var EmployeeName = document.getElementById("EmployeeName").value;
var BadgeNumber = document.getElementById("BadgeNumber").value;

if (EmployeeName.length > 20 || EmployeeName.length < 1 ) {
    document.getElementById("Authorization").innerHTML = alert("Name is not authorized. All names MUST BE under 20 characters.")
}
// getElementbyId is simply using the id name from the html(hence ".innerHTML") to be able to use the actions properly
else if (BadgeNumber > 1000 || BadgeNumber < 100 ) {
    document.getElementById("Authorization").innerHTML = alert("Badge number is not authorized. All employee badge numbers MUST BE 3 digits.")
}
        
else {
alert("Employee Authorized!")
window.open("The Countdown Assignment (1) (1).html");
}
//The code states that if the employee name length is more than 20 charcters or less than 1  the user cannot be authorized
// The code states that if the badge number is more than 1000 or less than 100 the badge number is  unable to be authorized
// The else shows that if the if and else if are passed by successfully the user is authorized



}
