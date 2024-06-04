function reqListener() {
    let countryArr = JSON.parse(this.responseText);
    const usdCountries = countryArr.filter(country => country.currencies?.USD?.symbol === '$');
  
    const countryNames = usdCountries.map(country => country.name.common);
    console.log("USD Countries:", countryNames);
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  