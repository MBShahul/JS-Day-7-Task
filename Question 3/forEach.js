function reqListener() {
    let countryArr = JSON.parse(this.responseText);
    countryArr.forEach(element => {
        console.log("Name:", element.name.common);
        console.log("Capital:", element.capital[0]);
        console.log("Flag:", element.flags.png);
        console.log(`\n`);
    });
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();



