const DOMSelectors = {
   container: document.querySelector(".top"),
  button: document.querySelector("#button"),
  topinput: document.querySelector("#Top-text"),
  bottominput: document.querySelector("#bottom-text"),
  //image: document.image.querySelector("#image")
};

DOMSelectors.button.addEventListener("click", function(){
    
    const texttopinput = 
    DOMSelectors.topinput.value; 
    console.log(texttopinput);
})



/*const textbottominput = 
DOMSelectors.bottominput.value; 
console.log(textbottominput);

const textimage = 
DOMSelectors.image.value;
console.log(textimage);

    const newBox ='<div class="" style=": ${style}"></div>'
DOMSelectors.container.insertAdjacentElement("beforeend", '${newBox}')

//function addCard(){}

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
function object(){}
 let input = DOMSelectors.value;
 DOMSelectors.Name.insertAdjacentHTML("afterend", '<p> ${input} </p>');
 */