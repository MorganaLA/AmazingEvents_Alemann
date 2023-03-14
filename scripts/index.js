eventsCards(data.events)

const dataIndex=data.events

const FilterNavbar = document.forms[0]
let categoryEventsFilter = dataIndex
let searchEventsFilter = dataIndex
let categoriesFilterIndex = []
let eventsFilter = []
let searchValue=""

catCheck.addEventListener('change',(e)=>{
    categoriesFilterIndex = checkboxfilter(e , categoriesFilterIndex, categories);
    console.log(categoriesFilterIndex)
    if(searchEventsFilter!=dataIndex){
      categoryEventsFilter = categoryFilter(searchEventsFilter, categoriesFilterIndex)
        eventsFilter = searchFilter(categoryEventsFilter, searchValue)
        eventsCards(eventsFilter)
    }else{
      categoryEventsFilter = categoryFilter(dataIndex, categoriesFilterIndex)
      eventsCards(categoryEventsFilter)
    }
})

document.forms[0].addEventListener('input', (e)=>{
    searchValue=e.target.value.toLowerCase()

    if (categoryEventsFilter!= dataIndex){
        searchEventsFilter = searchFilter(dataIndex, searchValue)
        eventsFilter = categoryFilter(searchEventsFilter,categoriesFilterIndex)
        eventsCards(eventsFilter)
    }else{
        searchEventsFilter = searchFilter(dataIndex, searchValue)
        eventsCards(searchEventsFilter)
    }
})
