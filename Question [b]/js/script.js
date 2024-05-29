function reqListener() {
    let countryarray=JSON.parse(this.responseText);
    let countrys=countryarray.filter(function(country){
        if(country.population<200000){
            console.table(country.name.common,country.population);
        };
        }); 
    };
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  