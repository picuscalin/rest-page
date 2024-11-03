import {pageLoad} from "./file.js"
import {populate} from "./menu.js"
import{contact} from "./contact.js"
import "./styles.css"
const menu=document.querySelector(".menu")
const home=document.querySelector(".home")

const mainDiv=document.querySelector("#content")
function updateDisplay(e){
    mainDiv.innerHTML=""
    mainDiv.appendChild(populate())
   
}
function updateDisplay2(){
    
    mainDiv.innerHTML=""
    mainDiv.appendChild(pageLoad())
   
}
pageLoad()


menu.addEventListener("click",updateDisplay)
home.addEventListener("click",updateDisplay2)




