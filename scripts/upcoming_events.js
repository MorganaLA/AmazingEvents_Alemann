const upcomingCards = data.events.filter(event => event.date >= data.currentDate)

eventsCards(upcomingCards);

const FilterNavbar = document.forms[0]

let categoryEventsFilter = upcomingCards
let searchEventsFilter = upcomingCards
let categoriesFilterIndex = []
let eventsFilter = []
let searchValue=""

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
