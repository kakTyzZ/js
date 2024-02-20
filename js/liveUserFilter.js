const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];
//"https://randomuser.me/api?results=50"

/* `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info"> 
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country} </p>
    </div>
    
    ` */

getData()

filter.addEventListener("input", function (e) { filterData(e.target.value) })

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50")
  const { results } = await res.json()

  result.innerHTML = ""
  results.forEach((user) => {
    const myLi = document.createElement("li")
    myLi.innerHTML = `<img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info"> 
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country} </p>
    </div>`

    listItems.push(myLi)
    result.appendChild(myLi)
  })
}

function filterData(searchItem) {
  listItems.forEach((user) => {
    if (user.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
      user.classList.remove('hide')
    } else {
      user.classList.add('hide')
    }
  })
}


























/* filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");

  const { results } = await res.json();

  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info"> 
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country} </p>
    </div>
    
    `;

    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
} */
