// console.log("welcome to project1");
showNotes();

// If user add a note,add it the local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myobj = {
        title:addTitle.value,
        text:addTxt.value
    }
    notesObj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard mx-2 my-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${index + 1} ${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button >
        </div>
    </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Add your first note`
    }
}

// function to delete a note
function deleteNotes(index) {
    // console.log('deleating note', index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
    let inputval = search.value.toLowerCase();
    // console.log('txt serch', inputval);
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputval)) {
            element.style.display = "block"
        } else {
            element.style.display = "none "
        }
        // console.log(cardTxt);


    })


})