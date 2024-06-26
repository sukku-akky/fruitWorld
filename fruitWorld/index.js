

const descriptionInput=document.createElement("input");
descriptionInput.id="description";
descriptionInput.type="text";
descriptionInput.style.fontStyle="italics";

const buttons = document.querySelectorAll('button');

        // Assuming you want to insert the input before the first button
const buttonToInsertBefore = buttons[0]; // Change the index based on your requirement
buttonToInsertBefore.parentNode.insertBefore(descriptionInput, buttonToInsertBefore);


const form=document.querySelector("form");
const fruits=document.querySelector(".fruits");
form.addEventListener("click",function(event){
    event.preventDefault();
    const fruitToAdd=document.getElementById("fruit-to-add");
    const descriptionToAdd=document.getElementById("description");
    const newLi=document.createElement("li");
    newLi.innerHTML= `${fruitToAdd.value} <p>${descriptionToAdd.value}</p> <button class="delete-btn">x</button>`;
    newLi.querySelector(".delete-btn").addEventListener("click",function(e){
        
        fruits.removeChild(newLi);
    })
    fruits.appendChild(newLi);
});













const filter=document.getElementById("filter");

filter.addEventListener("keyup",function(event){
    const textEntered=event.target.value.toLowerCase();
    const fruitItems=document.getElementsByClassName("fruit");
    for(let i=0;i<fruitItems.length;i++){
        const currentFruit=fruitItems[i].firstChild.textContent.toLowerCase();
        const currentDescription=fruitItems[i].querySelector("p").textContent.toLowerCase();
        if(currentFruit.indexOf(textEntered)===-1 && currentDescription.indexOf(textEntered)===-1){
            fruitItems[i].style.display="none";
        } else{
            fruitItems[i].style.display="flex";
        }
    }
});
// Show the fruit description in italics on the next line


// Create a filter that shows only those fruits whose either name or description or both matches the entered text

