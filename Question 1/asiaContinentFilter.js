function reqListener() {
    let countryArr = JSON.parse(this.responseText);
    const asiaRegion = countryArr.filter(each => each.region == 'Asia');
    for (let country of asiaRegion) {
    console.log(country.name.common)
    }
    console.log("No of Countries from Asia Region:", asiaRegion.length);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();