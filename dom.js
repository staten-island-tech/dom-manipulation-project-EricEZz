const DOMSelectors = {
    container: document.querySelector(".container"),
  Submit: document.querySelector(".submit"),
  topinput: document.querySelector("#top-text"),
  bottominput: document.querySelector("#bottom-text"),
  image: document.querySelector("#img"),
  form: document.querySelector("#form") 
};

function addCard(){

        const inputTop = DOMSelectors.topinput.value 
        const inputBottom = DOMSelectors.bottominput.value
        const inputImage = DOMSelectors.image.value


        const card = `
        <div class="box">
            <h2>
                ${inputTop}
            </h2>
            <img src="${inputImage}" alt="user">
            <p>${inputBottom}</p>
            <button class="but">delete</button>
        </div>`
        DOMSelectors.container.insertAdjacentHTML("beforebegin", `${card}`)
    }
    DOMSelectors.form.addEventListener("submit", function(event){
        event.preventDefault();
        addCard();
        del();
    })
    function del(){
        let and = document.querySelectorAll(".but")
        and.forEach((forms)=> forms.addEventListener('click', function(event){
            forms.parentElement.remove();
        }))
    }



//const DOMSelectors = {
  // container: document.querySelector(".box"),
  //button: document.querySelector("#button"),
  //topinput: document.querySelector("#Top-text"),
  //bottominput: document.querySelector("#bottom-text"),
  //submit: document.querySelector("#submit"),
  //image: document.querySelector("#image")
//};


//function addCard(){//
      

//DOMSelectors.button.addEventListener("click", function(){
  //  console.log("hey");

//    const card = `
  //  <div class="box">
    //<h2>
      //  ${inputTop}
   // </h2>  <p>${inputBottom}</p></div>`

 //   DOMSelectors.container.insertAdjacentElement("beforeend",)
//})
//}



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

 //<div class="gallery">
 /*<div class="card">
 <h2 class=card></h2>
     </div>
 </div>
 <form action="" id= "form">
     <label for="firstname">Name</label>
     <input type="text" name="firstname" class="first-name">
     <input type="submit" value="Enter Name" id="">
     <h2></h2>
</form>
</input> */ 