
const listItem=document.querySelectorAll(".fruit");

listItem.forEach(li=>{
    const button=document.createElement("button");
    button.textContent="Edit";
    button.className="edit-btn";
    

    li.appendChild(button);
});

const form=document.querySelector("form");
const fruits=document.querySelector(".fruits");
form.addEventListener("click",function(event){
  event.preventDefault();
  const fruitToAdd=document.getElementById("fruit-to-add");
  const newLi=document.createElement("li");
  newLi.innerHTML=fruitToAdd.value+"<button class='delete-btn'>x</button><button class='edit-btn'>Edit</button>";
 


  fruits.appendChild(newLi);
})

fruits.addEventListener("click",function(event){
  if(event.target.classList.contains("delete-btn")){
    const fruitToDelete=event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
})
