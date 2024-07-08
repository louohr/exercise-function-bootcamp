function calculateSplit() {
  const totalSum = parseFloat(prompt("Enter the total sum ($):"));
  const numFriends = parseInt(prompt("Enter the number of friends:"));
  const tipPercent = parseFloat(
    prompt("Enter the tip percentage (as a decimal, e.g., 0.10 for 10%):")
  );

  if (isNaN(totalSum) || isNaN(numFriends) || isNaN(tipPercent) || numFriends <= 0) {
    alert("Please enter valid numbers:");
    return;
  }

  const totalWithTip = totalSum + totalSum * tipPercent;
  const amountPerPerson = totalWithTip / numFriends;

  console.log(`Each person needs to pay $${amountPerPerson.toFixed(2)}`);
}
