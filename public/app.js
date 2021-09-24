showNotes();
const hamburger=document.getElementById("hamburger");
const navUl=document.getElementById("nav-ul");
hamburger.addEventListener("click",()=>{
    navUl.classList.toggle("show");
});

let addTxt=document.getElementById("addTxt");
// console.log("To-Do List");
showNotes();//this is called so that the notes are displayed even when screen is refreshed
 

//If user adds a note, add it to the local storage
let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",function (e) {
    
    let addTxt=document.getElementById("addTxt");
    //getting any notes, if already added, from the local storage
    let notes=localStorage.getItem("notes");

    if(notes==null){
        notesObj=[];//an array is created to store the notes

    }
    else{
        
        notesObj=JSON.parse(notes);//to convert the added notes into items of the array
    
    }
    if (addTxt.value!="") {
        notesObj.push(addTxt.value);//the notes we added is passed on to join the notes i.e. to update the notes IF a blank note is not entered
        
    }
    else{
        alert("Please enter something!");
    }
    
    localStorage.setItem("notes",JSON.stringify(notesObj));//the updated array is now converted to string and added to the local storage
    addTxt.value="";//once Add to List btn is clicked, the note written is added to the local storage AND the textarea must now be cleared so that new notes can be added
    console.log(notesObj);
    showNotes();
});
//this is to display the notes added on the note cards
function showNotes() {
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];//again now if no notes in local storage, empty array created

    }
    else{
        notesObj=JSON.parse(notes);//if notes are there they are taken from the local storage in the form of an array

    }
    //the html of the filled up note cards
    let html="";
    notesObj.forEach(function(element,index) {
        html+=`
         <div class="comment-box">
               <p>${element}</p>
           </div>`
        
    });
    //the html is now added inside the div class notes so that it is displayed in the website
    let notesElm=document.querySelector(".notes");
    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }
    else{
        
        notesElm.innerHTML="<br><p class='msg'>Please add your comments</p>"//incase there is nothing to show
    }
}