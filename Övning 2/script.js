function getYear(dateString) {
  if (dateString.length !== 10) {
    throw new Error("Strängen måste vara 10 karaktärer lång och i formatet YYYY-MM-DD");
  }
  const year = dateString.substring(0, 4); // få bara med året YYYY
  return parseInt(year, 10); // konvertera string till integer
}

console.log(getYear("2019-10-14"));
