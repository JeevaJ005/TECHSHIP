let balance = 5000;
let withdrawalAmount = 2000;

if (withdrawalAmount <= balance) {
    balance -= withdrawalAmount;
    console.log("\nWithdrawal Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("\nInsufficient Balance");
}