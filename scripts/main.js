let dataIndex
let categoryEventsFilter 
let searchEventsFilter 
const FilterNavbar = document.forms[0]
let categoriesFilterIndex = []
let eventsFilter = []
let searchValue=""

async function homeS() {
dataIndex = await getEvents()
categoryEventsFilter = dataIndex.events
searchEventsFilter = dataIndex.events
eventsCards(dataIndex.events)
categoriesChecks(dataIndex.events)
}
homeS()

catCheck.addEventListener('change',(e)=>{
    categoriesFilterIndex = checkboxfilter(e , categoriesFilterIndex, categories);
    console.log(categoriesFilterIndex)
    if(searchEventsFilter!=dataIndex.events){
      categoryEventsFilter = categoryFilter(searchEventsFilter, categoriesFilterIndex)
        eventsFilter = searchFilter(categoryEventsFilter, searchValue)
        eventsCards(eventsFilter)
    }else{
      categoryEventsFilter = categoryFilter(dataIndex.events, categoriesFilterIndex)
      eventsCards(categoryEventsFilter)
    }
})

document.forms[0].addEventListener('input', (e)=>{
    searchValue=e.target.value.toLowerCase()

    if (categoryEventsFilter!= dataIndex){
        searchEventsFilter = searchFilter(dataIndex.events, searchValue)
        eventsFilter = categoryFilter(searchEventsFilter,categoriesFilterIndex)
        eventsCards(eventsFilter)
    }else{
        searchEventsFilter = searchFilter(dataIndex.events, searchValue)
        eventsCards(searchEventsFilter)
    }
})
