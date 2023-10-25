const DOMSelectors = {
    form:document.querySelector("#form"),
    Name:document.querySelector(".firstname"),
    h2s:document.querySelectorAll("h2"),
};

DOMSelectors.form.addEventListener("submit",function(event){
 event.preventDefault();
 let name = DOMSelectors.Name.value; 
console.log(DOMSelectors.firstname.value);
 });



// function object(){}
 //let input = DOMSelectors.value;
 //DOMSelectors.Name.insertAdjacentHTML("afterend", '<p> ${input} </p>');