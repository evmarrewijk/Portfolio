window.onload = () => {
    const button = document.querySelector(".btn");
  
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
  
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    const height = parseInt(document.querySelector(".height").value);
  
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    const weight = parseInt(document.querySelector(".weight").value);
  
    const result = document.querySelector(".result");
  
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Voer een geldige lengte in!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Voer een gelidge gewicht in!";
  
    // If both input is valid, calculate the bmi
    else {
  
        // Fixing upto 2 decimal places
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  
        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `Onder Gewicht : <p>${bmi}</p>`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Gezond : <p>${bmi}</p>`;
  
        else result.innerHTML =
            `Over Gewicht : <p>${bmi}</p>`;
    }
}