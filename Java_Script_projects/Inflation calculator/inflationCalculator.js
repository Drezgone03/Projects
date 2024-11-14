function inflationCalculator() {
  let stopaInflacije = parseFloat(
    document.querySelector("#inflationRate").value
  );
  let novac = parseFloat(document.querySelector("#money").value);
  let godine = parseFloat(document.querySelector("#years").value);

  let zbir = stopaInflacije + novac;
  console.log(zbir);
}
