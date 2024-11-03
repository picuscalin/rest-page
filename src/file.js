import image from "../img/download.jpeg"

function pageLoad(){
    const h1=document.createElement("h1")
const p=document.createElement("p")
const div=document.querySelector("#content")
const img=document.createElement("img")
img.src=image

h1.textContent="restaurant be so cool"
p.textContent="dasdasdacsdvsdjfsmdkasdioasdjioasjdioasjdioasjdioscfioasdafioasddioasjdioasdinas"
div.appendChild(h1)
div.appendChild(p)
div.appendChild(img)

}


export{pageLoad}