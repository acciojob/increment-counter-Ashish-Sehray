//your JS code here. If required.
let p =document.querySelector("#counter");
let button = document.querySelector("#incrementBtn");
let counter=0;
button.addEventListener("click",()=>{
	counter+=1;
	alert(`${counter}`);
	p.textContent=`${counter}`;
})