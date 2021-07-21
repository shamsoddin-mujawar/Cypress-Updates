const faker = require('faker');

 const customerData = {
    name : faker.name.firstName(),
    email: faker.internet.email(),
    pass: Math.floor((Math.random()*100000000) * 100),
    dropdown:"Male",
    productname:["Blackberry", "iphone X"] 
}

export {customerData};
