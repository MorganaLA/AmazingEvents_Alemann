const locationURL = document.location.search
const param = new URLSearchParams(locationURL)
let id = param.get("id")
let details

async function detailsS(){
    let dataDet = await getEvents()
    details = dataDet.events.filter( data => data.name )
    detailCard(details)
    detailsAux(details)
}

detailsS()

function detailsAux(){
let details_aux 
    details_aux = details.map( data => {
    let aux = {}
    aux.image = data.image
    aux.name = data.name
    aux.date = data.date
    aux.description = data.description
    aux.category = data.category
    aux.place = data.place
    aux.capacity = data.capacity
    aux.assistance = data.assistance
    aux.estimate = data.estimate
    aux.price = data.price
    aux._id = data._id
    return aux
 })}


function detailCard(details_aux){
let idDetails = details_aux.find(data => data._id == id) 
let detail = document.getElementById('details-div') 

detail.innerHTML = `<figure class="details-figure">
<img src="${idDetails.image}" class="details-img" alt="">
</figure>
<article class="details-info">
<ul class="details-list">
<li><h1 class="details-title" >${idDetails.name}</h1></li>
<li>Date: ${idDetails.date}</li>
<li>${idDetails.description}</li>
<li>Category: ${idDetails.category}</li>
<li>Place: ${idDetails.place}</li>
<li>Capacity: ${idDetails.capacity}</li>
<li>${idDetails.assistance?"Assistance: ": "Estimate: " }${idDetails.assistance?idDetails.assistance:idDetails.estimate}</li>
<li>Price: $${idDetails.price}</li>
</ul>
</article>`

}
