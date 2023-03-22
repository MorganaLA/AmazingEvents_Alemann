const FilterNavbar = document.forms[0] 
let categoryEventsFilter
let searchEventsFilter 
let categoriesFilterIndex = []
let eventsFilter = []
let searchValue=""

async function pastS(){
    let dataEP = await getEvents()
    pastCards = dataEP.events.filter(event => event.date < dataEP.currentDate)
    categoryEventsFilter = pastCards
    searchEventsFilter = pastCards
    eventsCards(pastCards)
    categoriesChecks(pastCards)
    console.log(pastCards)
}

pastS()

catCheck.addEventListener('change',(e)=>{
    categoriesFilterIndex = checkboxfilter(e , categoriesFilterIndex, categories);
    if(searchEventsFilter!=pastCards){
      categoryEventsFilter = categoryFilter(searchEventsFilter, categoriesFilterIndex)
        eventsFilter = searchFilter(categoryEventsFilter, searchValue)
        eventsCards(eventsFilter)
    }else{
      categoryEventsFilter = categoryFilter(pastCards, categoriesFilterIndex)
      eventsCards(categoryEventsFilter)
    }
})

document.forms[0].addEventListener('input', (e)=>{
    searchValue=e.target.value.toLowerCase()

    if (categoryEventsFilter!= pastCards){
        searchEventsFilter = searchFilter(pastCards, searchValue)
        eventsFilter = categoryFilter(searchEventsFilter,categoriesFilterIndex)
        eventsCards(eventsFilter)
    }else{
        searchEventsFilter = searchFilter(pastCards, searchValue)
        eventsCards(searchEventsFilter)
    }
})