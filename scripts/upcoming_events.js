const FilterNavbar = document.forms[0]

let categoryEventsFilter
let searchEventsFilter 
let categoriesFilterIndex = []
let eventsFilter = []
let searchValue=""
let upcomingCards 

async function upcomingS(){
    let dataEU = await getEvents()
    upcomingCards = dataEU.events.filter(event => event.date >= dataEU.currentDate)
    categoryEventsFilter = upcomingCards
    searchEventsFilter = upcomingCards
    eventsCards(upcomingCards)
    categoriesChecks(upcomingCards)
}

upcomingS()

catCheck.addEventListener('change',(e)=>{
    categoriesFilterIndex = checkboxfilter(e , categoriesFilterIndex, categories);
    if(searchEventsFilter!=upcomingCards){
      categoryEventsFilter = categoryFilter(searchEventsFilter, categoriesFilterIndex)
        eventsFilter = searchFilter(categoryEventsFilter, searchValue)
        eventsCards(eventsFilter)
    }else{
      categoryEventsFilter = categoryFilter(upcomingCards, categoriesFilterIndex)
      eventsCards(categoryEventsFilter)
    }
})

document.forms[0].addEventListener('input', (e)=>{
    searchValue=e.target.value.toLowerCase()

    if (categoryEventsFilter!= upcomingCards){
        searchEventsFilter = searchFilter(upcomingCards, searchValue)
        eventsFilter = categoryFilter(searchEventsFilter,categoriesFilterIndex)
        eventsCards(eventsFilter)
    }else{
        searchEventsFilter = searchFilter(upcomingCards, searchValue)
        eventsCards(searchEventsFilter)
    }
})
