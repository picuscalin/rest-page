function populate(){
    const div=document.createElement("div")
    const menu=document.createElement("ol")
    const li1=document.createElement("li")
    const li2=document.createElement("li")
    const li3=document.createElement("li")
    li1.textContent="beef"
    li2.textContent="stew"
    li3.textContent="sghetti"
    menu.appendChild(li1)
    menu.appendChild(li2)
    menu.appendChild(li3)
    div.appendChild(menu)
    return div
    
}
export{populate}