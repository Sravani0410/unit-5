import {add,mult} from "./calc"
import "./index.css";
import image from "./webpack.png"
import logo from "./images/React-icon.svg.png"

console.log(add(1,3))
console.log(mult(2,3))

//


const container=document.getElementById("container");
const img=document.createElement("img")
//img.src=image
img.src=logo
img.setAttribute("class","images")
container.append(img)
