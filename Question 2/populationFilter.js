function reqListener() {
    let countryArr = JSON.parse(this.responseText);
    const population = countryArr.filter(each => each.population < 200000);
    for (let popul of population) {
        console.log(popul.name.common);
    }
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
