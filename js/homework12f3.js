// 1
const user = {
    hobby: "gaming",
    premium: "true",

}

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = 'false';

const keys = Object.keys(user);
for(const key of keys) {
    console.log(`${key}: ${user[key]},`);
}

// 2
const obj = {
    prop1: "sofa",
    prop2: "table",
    prop3: "chair",
}

console.log(Object.keys(obj).length);

// 3
const employees = {
    jorik1: 12,
    jorik2: 110,
    "lazy Jorik": 0,
}

function findBestEmployee(employees) {
    const employeesArray = Object.entries(employees);
    let bestName = null;
    let bestScore = 0;

    for(const employee of employeesArray) {
    const name = employee[0];
    const score = employee[1];
    
    if (score > bestScore) {
        bestScore = score;
        bestName = name;
    } 
    } 
    
    console.log(`Найкращий працівник: ${bestName} з показником ${bestScore}`);
}
findBestEmployee(employees);

// 4

const employees2 = {
    jorik1: 1200,
    jorik2: 5000,
    "lazy Jorik": 0,
}

function countTotalSalary(employees) {
    const toArray = Object.values(employees2);
    let sum = 0;
    for (let i = 0; i < toArray.length; i++) {
    sum += toArray[i];
    }
    console.log(`Загальна сума зарплат усіх працівників: ${sum}`)
}
countTotalSalary(employees)

// 5

const products = [
  { name: "Яблуко", price: 30, quantity: 3 },
  { name: "Банан", price: 20, quantity: 5 },
  { name: "Груша", price: 25, quantity: 2 }
];
function getAllPropValues(arr, prop) {
    const result = [];
    for(const item of arr) {
        if (prop in item) {
        result.push(item[prop]);
    }
    }
    return result;
}

console.log(getAllPropValues(products, "price"));


// 6

const products2 = [
  { name: "Яблуко", price: 30, quantity: 3 },
  { name: "Банан", price: 20, quantity: 5 },
  { name: "Груша", price: 25, quantity: 2 }
]; 

function calculateTotalPrice(allProdcuts, productName) {
  for(const product of allProdcuts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
}

console.log(calculateTotalPrice(products2, "Яблуко"));