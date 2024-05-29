function reqListener() {
    let countryarray=JSON.parse(this.responseText);
    console.log(countryarray)

   countryarray.forEach((country) => {
    console.log(country.name.common,country.capital,country.flags.png);
});
}

  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  
  