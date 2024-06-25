const header=document.querySelector("#header")
const mainHeading=document.querySelector("#main-heading");
const head3=document.createElement("h3");
const heading=document.createTextNode("Buy high quality organic fruits online");
head3.appendChild(heading);
header.appendChild(head3);

head3.style.fontStyle=("italic");

const unorderedList=document.querySelector(".fruits");
const para=document.createElement("p");
const paraText=document.createTextNode("Total fruits: 4");
para.appendChild(paraText);
const divs=document.getElementsByTagName("div");
const secondDiv=divs[1];
secondDiv.insertBefore(para,unorderedList);

para.id="fruits-total";

