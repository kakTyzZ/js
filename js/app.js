const container = document.querySelector('.container')

const ul = document.querySelector(".mainUl")

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);

    addHandler(key, JSON.parse(localStorage.getItem(key)))
}

container.addEventListener('click', function (e) {


    if (e.target.classList == "deleteButton") { deleteHandler(e) }
    if (e.target.id == "addButton") { addHandler() }
    if (e.target.classList == "saveButton") { saveHandler() }
})

for (let li of document.querySelectorAll('li')) {
    li.addEventListener('keyup', function (e) {
        e.preventDefault()

    })
}

function saveHandler() {

    updateLS()
}


function addHandler(id = "", text = '') {
    let ul = document.querySelector(".mainUl")
    const li = document.createElement('li')
    if (id == "") {
        li.id = new Date()
    } else { li.id = id }
    li.innerHTML = `<textarea name="" id="" cols="30" rows="5">${text}</textarea>
    <div class="divEdit">
        <button class="saveButton">Save</button>
        <button class="deleteButton" type="submit" >Delete</button>
    </div>
    `

    ul.append(li)

}
function deleteHandler(e) {

    localStorage.removeItem(e.target.closest('li').id)
    e.target.closest("li").remove()

}


function updateLS() {
    const allLi = document.querySelectorAll('li')
    for (let li of allLi) {
        if (localStorage.getItem(li.id) == li.id) { return }
        localStorage.setItem(li.id, JSON.stringify(li.querySelector('textarea').value))
    }


}