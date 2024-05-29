function reqListener() {
    let countryarray=JSON.parse(this.responseText);
   let countrys=countryarray.filter((country)=>{
    let currencies=country.currencies;
    return currencies && country.currencies.USD});
   countrys.forEach((country) => {
    console.log(country.name.common,country.currencies.USD);
});
}

  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  
  