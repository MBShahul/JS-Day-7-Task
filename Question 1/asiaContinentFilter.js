function reqListener() {
    let countryArr = JSON.parse(this.responseText);
    const asiaRegion = data.filter(each => each.region == 'Asia');
    console.log(countryArr);
    for (let country of countryArr) { 
        console.log("asiaRegion", asiaRegion)
        console.log(asiaRegion.length);
    }
}
    
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();