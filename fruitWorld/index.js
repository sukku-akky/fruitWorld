
const mainHeading=document.querySelector("#main-heading");
mainHeading.style.textAlign="right";
// Write answer to the questions asked below:
const basketHeading=document.querySelector("#basket-heading");
basketHeading.style.color="brown";
basketHeading.style.margin="20px";

const fruitItems=document.querySelector(".fruits");

fruitItems.style.backgroundColor="grey";

fruitItems.style.margin="20px";
fruitItems.style.padding="20px";
fruitItems.style.borderRadius="5px";
fruitItems.style.listStyleType="none";
const fruit=document.querySelectorAll(".fruit");
for(let i=0;i<fruit.length;i++){
  fruit[i].style.backgroundColor="white";
  fruit[i].style.padding="10px";
  fruit[i].style.margin="10px";
  fruit[i].style.borderRadius="5px";
}

const evenFruit=document.querySelectorAll(".fruit:nth-child(even)");
for(let i=0;i<evenFruit.length;i++){
  evenFruit[i].style.backgroundColor="brown";
  evenFruit[i].style.color="white";
}