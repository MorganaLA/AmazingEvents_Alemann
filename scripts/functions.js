const divEvents = document.getElementById('events');
let events = [];

async function getEvents() {
  let events = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then((response) => response.json())
    .catch(async ()=>{
      const response = await fetch('./assets/data/amazing.json');
      return await response.json();
    })
    .then((events) => {
      return events;
    })
    .catch(() => {
      alert('Try later');
    });
    
    return events;
    };

getEvents()

function eventsCards(events) {
  if(events.length == 0){
    divEvents.innerHTML = `
    <div id="nmfdiv">
    <h2>No matches found!</h2>
    <img id="nmf" src="../assets/calendar.png" alt="">
    </div>`
    return
}
  let cards = '';
  events.forEach(dataEvent => {
    let card = `
      <div class="card" data-tags="${dataEvent.category}">
        <img src="${dataEvent.image}" class="card-img-top" alt="Cinema">
        <div class="card-body">
          <h5 class="card-title text-center">${dataEvent.name}</h5>
          <p class="card-text">${dataEvent.description}</p>
          <p id="pdate" class="text-muted text-center"> Date: ${dataEvent.date}</p>
          <div class="footer-card">
            <p class="card-text"><small class="text-muted"> Price: $${dataEvent.price}</small></p>
            <a href="./details.html?id=${dataEvent._id}" class="btn btn-outline-dark">Details</a>
          </div>
        </div>
      </div>`;
    cards += card;
  });
  divEvents.innerHTML = cards;
}
const catCheck = document.getElementById('categories');
let categories

function categoriesChecks(events){
  categories = Array.from(new Set(events.map(event => event.category)));
  let checks = '';
categories.forEach(category => {
  let check = `
    <li class="list-group-item">
      <input class="form-check-input" type="checkbox" id="${category}" value="${category}"/>
      <label for="${category}" class="form-check-label stretched-link">${category}</label>
    </li>`;
  checks += check;
});
catCheck.innerHTML = checks;
}

function checkboxfilter(eventF, array, control){
    if (array==control) {array=[]}
    if (eventF.target.checked){
        array.push(eventF.target.value)
    }else {
        array.splice(array.indexOf(eventF.target.value),1)
        if(array[0]== undefined) {array = control}
    }; 
    return array
}

function categoryFilter(data, arrayCategoriesFilter){
    return data.filter((event)=> arrayCategoriesFilter.indexOf(event.category)!= -1)
}

function searchFilter(array, value){
    return array.filter((event) => event.name.toLowerCase().includes(value))
}