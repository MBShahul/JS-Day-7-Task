function reqListener() {
    let countryArr = JSON.parse(this.responseText);
    countryArr.forEach(element => {
        console.log("Name:", element.name.common);
        if (element.capital && Array.isArray(element.capital) && element.capital.length > 0) {
            console.log("Capital:", element.capital[0]);
        } else {
            console.log("Capital: N/A");
        }
        console.log("Flag:", element.flags.png);
        console.log(`\n`);
    });
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
