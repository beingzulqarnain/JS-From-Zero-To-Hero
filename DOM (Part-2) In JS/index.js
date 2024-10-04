// Second Part Of DOM In JS
//getAttributes and SetAttributes

// let div = document.querySelector("#box");
// console.log(div);
// // let value = div.getAttribute("id");
// let value = div.setAttribute("id","newId");
// console.log(value);


// styling In JS 
//  let div = document.querySelector("#box");
//  div.style.background = "green";
//  div.style.cssText += "color:red; border:3px solid red; font-size:10px; text-align:center; padding:30px"


//Insert Element In JS



// let heading = document.createElement("h1");
// heading.innerHTML = "<i>Let's Started JavaScript</i>";
// document.querySelector("body").before(heading);
    //   let para = document.querySelector("p");
    //   para.before(heading)
    //   para.after(heading)


//Problem - 01

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!"
newBtn.style.cssText = "background-color:red;color:white; margin-bottom:20px; padding:8px; border:none;";
document.querySelector("body").prepend(newBtn);


   

