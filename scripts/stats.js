async function evMoreAsistF() {
  let data = await getEvents();
  let pastEvents = data.events.filter(event => event.date < data.currentDate); 
  let evData = pastEvents.map(event => ({
    'name': event.name,
    'assistance': event.assistance,
    'capacity': event.capacity
  }));

  let percentages = evData.map(function(event) {
    return (event.assistance * 100) / event.capacity;
  });
  
  let maxPercentage = Math.max(...percentages);
  
  let evMoreAsist = evData
    .filter(event => (event.assistance  * 100) / event.capacity === maxPercentage)
    .map(event => `${event.name}:  ${maxPercentage.toFixed(2)}%`);
  
  console.log(`Event with the highest percentage of assistance (${maxPercentage}%)`);
  console.log(evMoreAsist);

  document.getElementById('highestPer').innerHTML = evMoreAsist
}
evMoreAsistF()
 
async function evLowAsistF() {
  let data = await getEvents();
  let pastEvents = data.events.filter(event => event.date < data.currentDate); 
  let evData = pastEvents.map(event => ({
    'name': event.name,
    'assistance': event.assistance,
    'capacity': event.capacity
  }));

  let percentages = evData.map(function(event) {
    return (event.assistance * 100) / event.capacity; 
  });
  
  let minPercentage = Math.min(...percentages);
  
  let evLowAsist = evData
    .filter(event => (event.assistance * 100) / event.capacity === minPercentage)
    .map(event => `${event.name}:  ${minPercentage}%`);
  
  console.log(`Event with the lowest percentage of assistance (${minPercentage}%)`);
  console.log(evLowAsist);

  document.getElementById('lowPer').innerHTML = evLowAsist
}
evLowAsistF()

async function evHCapacity() {
  let data = await getEvents();
  let evData = data.events.map(event => ({
    'name': event.name,
    'capacity': event.capacity
  }));
  
  let maxCapacity = Math.max(...evData.map(event => event.capacity));
  
  let maxCapacityEvent = evData.find(event => event.capacity === maxCapacity);
  
  console.log(maxCapacityEvent)
  document.getElementById('highestCap').innerHTML = maxCapacityEvent.name + '  (' + maxCapacityEvent.capacity + ')';
}
evHCapacity()

function categoriesT(events) {
  const catUpTable = document.getElementById('categoriesUpT');
  const categories = Array.from(new Set(events.map(event => event.category)));
  let trs = '';
  categories.forEach(category => {
    let categoryRevenue = 0;
    events.forEach(event => {
      if (event.category === category && upcomingData) {
        categoryRevenue += event.price * event.estimate;
      }
    });
    let categoryPercent = events.filter(event => event.category === category)
    .reduce((sum, event) => sum + event.estimate, 0)
    / events.filter(event => event.category === category)
    .reduce((sum, event) => sum + event.capacity, 0) * 100;
    let tr = `<tr><td>${category}</td><td>$${categoryRevenue}</td><td>${categoryPercent.toFixed(2)}%</td></tr>`;
    trs += tr;
    });
  catUpTable.innerHTML = trs;
}

async function upcomingSTable(){
  let data = await getEvents()
  upcomingData = data.events.filter(event => event.date >= data.currentDate)
  categoriesT(upcomingData)
}
upcomingSTable()

function categoriesPT(events) {
  const catPastTable = document.getElementById('categoriesPstT');
  const categories = Array.from(new Set(events.map(event => event.category)));
  let trs = '';
  categories.forEach(category => {
    let categoryRevenue = 0;
    events.forEach(event => {
      if (event.category === category && pastData) {
        categoryRevenue += event.price * event.assistance;
      }
    });
    let categoryPercent = events.filter(event => event.category === category)
    .reduce((sum, event) => sum + event.assistance, 0)
    / events.filter(event => event.category === category)
    .reduce((sum, event) => sum + event.capacity, 0) * 100;  
    let tr = `<tr><td>${category}</td><td>$${categoryRevenue}</td><td>${categoryPercent.toFixed(2)}%</td></tr>`;
    trs += tr;
    });
  catPastTable.innerHTML = trs;
}

async function pastSTable(){
  let data = await getEvents()
  pastData = data.events.filter(event => event.date < data.currentDate)
  categoriesPT(pastData)
}

pastSTable()
