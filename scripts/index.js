const divEvents = document.getElementById('events')

let cards = ''

for(dataEvent of data.events){
    cards += ` <div class="card">
    <img src="${dataEvent.image}" class="card-img-top" alt="Cinema">
    <div class="card-body">
      <h5 class="card-title text-center">${dataEvent.name}</h5>
      <p class="card-text">${dataEvent.description}</p>
      <p id="pdate" class="text-muted text-center"> Date: ${dataEvent.date}</p>
      <div class="footer-card">
      <p class="card-text"><small class="text-muted"> Price: $${dataEvent.price}</small></p>
      <a href="./details.html" class="btn btn-outline-dark">Details</a>
      </div>
    </div>
  </div>`
}

console.log(cards);

divEvents.innerHTML = cards;
  