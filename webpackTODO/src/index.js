
import "./index.css";
//import image from "./webpack.png"
import logo from "./images/Simplenote_Todo.png"


const navbar=document.getElementById("Navbar");
const img=document.createElement("img")
//img.src=image
img.src=logo
img.setAttribute("class","images")
navbar.append(img)

document.querySelector("button").addEventListener("click",webpackTodo)
function webpackTodo(){
  let inputvalue=document.querySelector("input").value
  let output=document.createElement("li")
  output.textContent=inputvalue;
  document.querySelector("ol").append(output)
}
//document.querySelector("Navbar").append(image,btn)