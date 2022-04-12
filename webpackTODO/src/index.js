document.querySelector("button").addEventListener("click",webpackTodo)
function webpackTodo(){
  let inputvalue=document.querySelector("input").value
  let output=document.createElement("li")
  output.textContent=inputvalue;
  document.querySelector("ol").append(output)
}