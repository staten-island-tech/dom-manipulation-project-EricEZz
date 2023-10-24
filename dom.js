const DOMSelectors = {
    form:document.querySelector("#form"),
    Name:document.querySelector(".firstname"),
    h2s:document.querySelectorAll("h2"),
    button: document.getElementById("btn"),
    box: document.getElementById("container-box"),
    input: document.querySelector('#input'),
};
console.log(DOMSelectors.h2s);
DOMSelectors.form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstname.value);
    
 });
