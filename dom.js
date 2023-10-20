const DOMSelectors = {
    form:document.querySelector("#form"),
    Name:document.querySelector(".name"),
    h2s:document.querySelectorAll("h2"),
    button: document.getElementById("btn"),
    box: document.getElementById("container-box"),
    input: document.querySelector('#input'),
};
DOMSelectors.form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(DOMSelectors.name.value);
    
 });

 /* DOMSelectors.form.addEventListener("click",function(){
    preventDefault();
    let input = DOMSelector.input.value;
    console.log(input);
 });
*/
