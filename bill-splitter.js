console.log("=== Connect to Split the bill ===")

// declare variable to elements
const totalAmountInput = document.getElementById("total-amount-to-split");
const amountPeople = document.getElementById("amount-people");
const calcBtn = document.getElementById("calc-btn");
const result = document.getElementById("bill-per-person");
const resultsDiv = document.querySelector(".results");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const noTip = document.querySelector(".no-tip");
const addTipBtn = document.getElementById("add-tip-btn");
const showTip = document.getElementById("show-tip")
const totalPlusTip = document.getElementById("total-plus-tip")
const tip = 0.2;
let totalTip = 0;

// function to calc the bill per person
function splitTheBill (amount, people) {
     amount = parseFloat(totalAmountInput.value);
     people = parseInt(amountPeople.value);

    if (amount <= 0 || people <= 0 || isNaN(amount) || isNaN(people)) { 
        alert("Please enter a valid amount.");
        return;
    }
    
    const splitAmount = amount / people;
    result.textContent = splitAmount.toFixed(2);    

// orange underlign if value >= $100
    if (splitAmount >= 100) {
        result.style.borderBottom = "2px solid orange";
    } else {
        result.style.borderBottom = "none";
    }
    
// "change results div from hidden to block so it can show the result.
    resultsDiv.style.display = "block";
    totalTip = splitAmount * tip;
}

// Function to display tip amount per person.
function showTipFunc(){
    showTip.style.display = "block";
    totalPlusTip.textContent = totalTip.toFixed(2);

}
// Event Listeners - Calculate, Yes and No Buttons
calcBtn.addEventListener("click", splitTheBill);
yesBtn.addEventListener("click", showTipFunc);
noBtn.addEventListener("mouseover", () => {
    noBtn.style.display = "none";
})
