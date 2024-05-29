function reqListener() {
    let countryarray=JSON.parse(this.responseText);
   let countrys=countryarray.filter((country)=>country.region==="Asia");
   countrys.forEach((country) => {
    console.log(country.name.common);
});
}

  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  
  