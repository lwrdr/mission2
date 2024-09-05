"use strict";
console.log("=== Connect to Split the bill ===")

// access variable to elements
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
    result.textContent = splitAmount.toFixed(2);    //toFixed(2) worked to set max-decimals to 2.


    // orange underlign if value >= $100
    if (splitAmount >= 100) {
        result.style.borderBottom = "2px solid orange";
    } else {
        result.style.borderBottom = "none";
    }
    
    // "change results div from hidden to block so it can show the result.
    resultsDiv.style.display = "block";
    //add tip calc 
    totalTip = splitAmount * tip;
}

function showTipFunc(){
    showTip.style.display = "block";
    totalPlusTip.textContent = totalTip.toFixed(2);

}

calcBtn.addEventListener("click", splitTheBill);
yesBtn.addEventListener("click", showTipFunc);
noBtn.addEventListener("mouseover", () => {
    noBtn.style.display = "none";
})
