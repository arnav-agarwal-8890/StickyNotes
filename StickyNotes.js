let body = document.getElementById("main-body")
body.style.display = "flex"
body.style.fontFamily = "Arial"
body.style.flexDirection = "column"
body.style.alignItems = "center"
body.style.justifyContent = "center"
body.style.position = "relative"


let container = document.createElement("div")
container.id = "main-container"
container.style.background = "#f1f1f1"
container.style.borderRadius = "25px"
container.style.boxShadow = "0px 2px 5px lightgray"
container.style.width = "1450px"
container.style.height = "690px"
container.style.display = "flex"
container.style.flexDirection = "column"
container.style.alignItems = "center"
container.style.justifyContent = "center"
container.style.position = "relative"

body.appendChild(container)


let heading = document.createElement("div")
heading.id = "main-heading"
heading.textContent = "Sticky Notes"
heading.style.fontFamily = 'DM Serif'
heading.style.textAlign = "center"
heading.style.fontSize = "65px"
heading.style.fontWeight = "bold"
heading.style.color = "#333"

container.appendChild(heading)


let notesList = document.createElement("ul")
notesList.style.listStyleType = "none"
notesList.style.display = "flex"
notesList.style.flexWrap = "wrap"
notesList.style.gap = "15px"
notesList.style.justifyContent = "center"
notesList.style.width = "795px"
notesList.style.padding = "5px"

container.appendChild(notesList)


let inputContainer = document.createElement("div")
inputContainer.id = "input-container"
inputContainer.style.position = "relative"
inputContainer.style.display = "flex"
inputContainer.style.flexDirection = "column"
inputContainer.style.alignItems = "center"
inputContainer.style.width = "250px"
inputContainer.style.height = "100px"

container.appendChild(inputContainer)


let textarea = document.createElement("textarea")
textarea.id = "text-area"
textarea.placeholder = "Type a new note..."
textarea.style.fontFamily = "Arial"
textarea.style.color = "#000000"
textarea.style.borderRadius = "3px"
textarea.style.width = "250px"
textarea.style.height = "100px"
textarea.style.background = "#fefec0"
textarea.style.border = "#f1f1f1"
textarea.style.boxShadow = "0px 2px 5px lightgray"

inputContainer.appendChild(textarea)


let addButton = document.createElement("button")
addButton.id = "add-button"

addButton.textContent = "+"
addButton.style.color = "#11ff00"
addButton.style.background = "#fefec0"
addButton.style.border = "#fefec0"
addButton.style.width = "30px"
addButton.style.height = "30px"
addButton.style.position = "absolute"
addButton.style.bottom = "5px"
addButton.style.right = "5px"
addButton.style.fontSize = "15px"

addButton.addEventListener("mouseover", () => {addButton.style.fontSize = "25px"})

addButton.addEventListener("mouseout", () => {addButton.style.fontSize = "15px"})

inputContainer.appendChild(addButton)


let notesCount = notesList.getElementsByTagName("li")

addButton.addEventListener("click", () => {
    if(textarea.value === "") return

    let note = document.createElement("li")
    note.style.width = "250px"
    note.style.height = "100px"
    note.style.borderRadius = "3px"
    note.style.display = "flex"
    note.style.flexDirection = "row"
    note.style.alignItems = "center"
    note.style.boxShadow = "0px 2px 5px lightgray"
    note.style.position = "relative"

    let cancelButton  = document.createElement("button")
    cancelButton.textContent = "x"
    cancelButton.style.color = "#fefffe"
    cancelButton.style.display = "flex"
    cancelButton.style.justifyContent = "center"
    cancelButton.style.alignItems = "center"
    cancelButton.style.width = "15px"
    cancelButton.style.height = "15px"
    cancelButton.style.position = "absolute"
    cancelButton.style.top = "5px"
    cancelButton.style.right = "5px"
    cancelButton.style.background = "#e54b3a"
    cancelButton.style.borderRadius = "3px"

    if((notesCount.length % 2) === 0) {
        note.style.background = "#d1e1ff"
        cancelButton.style.border = "#d1e1ff"
    }

    if((notesCount.length % 2) === 1) {
        note.style.background = "#fefffe"
        cancelButton.style.border = "#fefffe"
    }

    note.appendChild(cancelButton)

    let para = document.createElement("p")
    para.textContent = textarea.value
    para.style.position = "relative"
    para.style.left = "10px"
    para.style.bottom = "15px"

    note.appendChild(para)

    textarea.value = ""

    notesList.appendChild(note)

    cancelButton.addEventListener("click", () => {note.remove()})
})