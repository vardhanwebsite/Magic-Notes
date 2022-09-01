shownotes();

let addbtn = document.getElementById("addBtn");
addbtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj)
    shownotes();
})

function shownotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
  let html="";
  notesObj.forEach(function(element,index){
    html +=`
    <div class="noteCard my-2 mx-2 card " style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Notes${index+1}</h5>
    <p class="card-text">${element}</p>
    <button id="${index}" onclick="deletNotes(this.id)" class="btn btn-primary">Delete Node</button>
  </div>
  </div>
    `
    
  });

  let elem=document.getElementById("notes")
  if(notesObj.length!=0){
    elem.innerHTML=html;
  }
  else{
    elem.innerHTML=`nothing to show! "Pls add note`
  }

}


function deletNotes(index){
   console.log("i am dlt", index)
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();

}

