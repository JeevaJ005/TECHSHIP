
const products = [
  { name: "Phone", price: 15000 },
  { name: "Joystick", price: 800 },
  { name: "Tablet", price: 55000 }
];

const filteredProducts = products.filter(
    p => p.price > 1000);
    
console.log(filteredProducts);
