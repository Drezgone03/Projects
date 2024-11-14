function inflationCalculator() {
  let stopaInflacije = parseFloat(
    document.querySelector("#inflationRate").value
  );
  let novac = parseFloat(document.querySelector("#money").value);
  let godine = parseFloat(document.querySelector("#years").value);

  let worth = novac + novac * (stopaInflacije / 100);
  console.log(worth);

  for (let i = 1; i < godine; i++) {
    worth += worth * (stopaInflacije / 100);
  }
  console.log(worth);

  worth = worth.toFixed(2);

  let recenica = document.createElement("div");
  recenica.className = "rec";

  recenica.innerText = `Inflation rate of ${stopaInflacije}% for period of ${godine} years is ${worth}€`;
  document.querySelector(".container").appendChild(recenica);
}
