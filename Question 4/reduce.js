function reqListener() {
    let countryArr = JSON.parse(this.responseText);
    const totalPopulation = countryArr.reduce((accumulator, each) => {
        return accumulator + each.population;
    }, 0);

    console.log("Total Population:", totalPopulation);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();