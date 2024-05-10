function calculate()
{
    // Get input values from the form elements
    const principle=parseFloat(document.getElementById('principle').value);
    const intersRate=parseFloat(document.getElementById('interestRate').value);
    const tenure=parseFloat(document.getElementById('tenure').value);

    //perforn the calculation

    const m= principle * (principle * intersRate * tenure)/100;
    //display the result

    document.getElementById('result').innerText = `Maturity Amount: ${m.toFixed(2)}`;
}
document.getElementById('calculateBtn').addEventListener('click',calculate);


