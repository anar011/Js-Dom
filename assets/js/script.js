"use strict";


// let head = document.getElementsByTagName("h1");

// console.log(head)

// for(const item of head){
//     console.log(item)
// }

// let elem = document.getElementById("header");

// let elem = document.getElementsByClassName("header")

// let elem = document.querySelector("#header1")

// let elem = document.querySelectorAll("#header1")

// for (const iterator of elem) {

//     console.log(elem)
// }

// console.log(elem)


//  let h1 = document. querySelector("#products .card-item1 h1")

//  console.log(h1)

// let elem = document.querySelector("#products .card-item1 h1")

// console.log(elem.innerText)

// let elemText = elem.innerText;
// if(elemText == "Salam"){
//     console.log("Correct")
// }

// let a = document.querySelector("#products .card-item1 a")

// a.innerHTML = "<span>Roya</span>";

// a.innerText = "<span>Roya</span>";

// console.log(a)

// let element = document.querySelector("#products .card-item1 h1");

// element.classList.add("active")

// element.classList.add("Roya")
// element.classList.remove("header")

let button = document.querySelector("#products .switch");

// console.log(button)

// button.addEventListener("click", function(){
//     alert("Clicked1")
// })

// button.addEventListener("click", function(){
//     alert("Clicked2")
// })

// button.addEventListener("dblclick", function(){
//     alert("Clicked1")
// })

// button.addEventListener("dblclick", function(){
//     alert("Clicked2")
// })

// button.addEventListener("click", function(){
//     this.style.backgroundColor = "red"
// })

// button.addEventListener("click", function(event){

//     event.target.style.backgroundColor = "red"
// })

// let btnOn = document.querySelector("#products .button .on");
// let btnOff = documnet.querySelector("#products .button .off");

// let body = document.querySelector("body")

// let icon = document.querySelector("#products .icon i");


// button.addEventListener("click", function () {

//    body.style.backgroundColor = "white";

//    icon.style.color = "yellow" ;
// })


// button.addEventListener("click", function () {

//     body.style.backgroundColor = "black";

//     icon.style.color = "gray" ;
//  })



let btn = document.querySelector("#products button");
let input = document.querySelector("#products input");
// let header = document. querySelector("#products h1");

let ul = document.querySelector("#products ul")


// btn.addEventListener("click", function(){

//    let inputValue = input.value;
//    header.innerText = inputValue;
//    input.value = "";
// })

// btn.addEventListener("click", function () {

//     if (input.value == "") {
//         alert(" Dont empty")
//         return;
//     }

//     let items = document.querySelectorAll("li");

//     for (const item of items) {
//         if (item.innerText == input.value) {
//             input.value = "";
//             alert("Already exist")
//             return;
//         }
//     }

//     let inputValue = input.value;


// <i class="fa-solid fa-circle-xmark"></i>

// let li = document.createElement("li");
// li.className = "list-group-item mt-2";
// let span = document.createElement("span");
// let icon = document.createElement("i");
// icon.className = "fa-solid fa-circle-xmark";
// span.innerText = input.value;
// li.append(span,icon)

// ul.append(li);

// li.innerText = inputValue;





// ul.innerHTML += `<li class ="list-group-item mt-2">${input.value}</li>`


// input.value = "";

// deleteITem(li,icon)


//     let list = document.querySelectorAll("#products .list ul li")

//     deleteItems(list);

//  })


//  function deleteITem(li,icon){
//     icon.addEventListener("click", function(){
//         li.remove();
//     })
//  }

// function deleteItems(items) {
//     for (const item of items) {
//         item.addEventListener("click", function () {
//             this.remove();
//         })

//     }
// }


// btn.addEventListener("click", function () {

//     if (input.value == "") {
//         alert(" Dont empty")
//         return;
//     }

//     if(!isNaN(input.value)){
//         alert("test")
//         input.value = "";
//         return;
//     }

//     ul.innerHTML = "";

    

//     for (let i = 1; i <= input.value; i++) {
//         let li = document.createElement("li");
//         li.className = "list-group-item mt-2";
//         li.innerText = i;
//         ul.append(li);
        
//     }

//     input.value = "";

// })        