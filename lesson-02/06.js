// code
let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let copyPassportWithAddress = {...passportWithAddress};

let oldCity = passportWithAddress.address.city;
let newCity = copyPassportWithAddress.address.city="Bobryisk";
console.log(oldCity);
console.log(newCity);
