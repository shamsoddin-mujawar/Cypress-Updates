const faker = require('faker');

const fakeData = {
     firstName : faker.name.firstName(),
     lastName : faker.name.lastName(),
     email : faker.internet.email(),
     password : faker.finance.account(),
     month : faker.date.month(),
     company : faker.company.companyName(),
     address : faker.address.direction(),
     city : faker.address.cityName(),
     day : Math.floor((Math.random()*10) + 1),
}

export default fakeData;
