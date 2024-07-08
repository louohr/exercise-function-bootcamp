function calculateSplit() {
  // fråga användaren om summan, antal personer, dricks
  const totalSum = parseFloat(prompt("Ange den totala summan (kr):"));
  const numFriends = parseInt(prompt("Ange hur många ni är:"));
  const tipPercent = parseFloat(prompt("Ange dricks (10% är 0.10):"));

  const totalWithTip = totalSum + totalSum * tipPercent; // uträkning av summan
  const amountPerPerson = totalWithTip / numFriends; // uträkning hur mycket varje person måste betala

  console.log(`Varje person måste betala ${amountPerPerson} kr`);
}

calculateSplit();
