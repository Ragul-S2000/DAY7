function reqListener() {
    let countryarray=JSON.parse(this.responseText);
    console.log(countryarray)
let totalPopulation=countryarray.reduce((acc,todays)=>{
    return acc+todays.population;
},0);
console.log(`Total population:${totalPopulation}`);
}

  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  
  