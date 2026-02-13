const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");


let sampleEvent =
    [
        {
            title: "Web dev",
            date: "4-12-2026",
            category: "workshop",
            description: "hasvhuno oadhoo asoikla dfoi"
        },
        {
            title: "Web dev2",
            date: "5-12-2026",
            category: "conference",
            description: "hasvhuno oadshdbf hoo asoikla dfoi"
        }
    ]

    addSampleBtn.addEventListener("click",()=>{
        sampleEvent.forEach(addEvent);
    })


//   create event card  
function createEventCard(eventData){
    const card = document.createElement("div");
    card.className="card";

    card.innerHTML=`
    <button class=delete-btn>X</button>
    <h3>${eventData.title}</h3>
    <div>${eventData.date}</div>
    <span>${eventData.category}</span>
    <p>${eventData.description}</p>
    `
    return card;

}

function addEvent(eventData){
  const emptyState=document.querySelector(".empty-state");
  if(emptyState) emptyState.remove();

  eventContainer.appendChild(createEventCard(eventData));

}

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    }

    addEvent(eventData);
    eventForm.reset();

})

// clear all event
clearAllBtn.addEventListener("click",()=>{
    eventContainer.innerHTML=`<div class="empty-state">No events yet. Add your first event!</div>`
})



// delete individual card
eventContainer.addEventListener("click", (event) => {
  //closest use to target the closest child element of the targeted element i.e eventContainer
  const card = event.target.closest(".event-card");
  console.log(card);

  if (event.target.classList.contains("deleteBtn")) {
    card.remove();
  }
  if (!eventContainer.querySelector(".event-card")) {
    eventContainer.innerHTML = `<div class="empty-State">No events yet. Add your first event!</div>`;
  }
});
document.addEventListener("keydown", (e) => {
    demoContent.textContent = "You pressed: " + e.key;
});