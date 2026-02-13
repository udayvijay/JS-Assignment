// const hamburger = document.getElementById("hamburger");
// const navLinks = document.getElementById("navLinks");

// hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("show");
// });



// const form = document.getElementById("eventForm");
// const eventContainer = document.getElementById("eventContainer");
// const clearAllBtn = document.getElementById("clearAllBtn");
// const addSampleBtn = document.getElementById("addSampleBtn");

// let events = [];

// function renderEvents() {
//     eventContainer.innerHTML = "";
//     if (events.length === 0) {
//         eventContainer.innerHTML = '<div class="empty-state">No events yet. Add your first event!</div>';
//         return;
//     }

//     events.forEach((event, index) => {
//         const div = document.createElement("div");
//         div.className = "event-card";

//         div.innerHTML = `
//             <h3>${event.title}</h3>
//             <p><b>Date:</b> ${event.date}</p>
//             <p><b>Category:</b> ${event.category}</p>
//             <p>${event.description}</p>
//             <button onclick="deleteEvent(${index})">Delete</button>
//         `;

//         eventContainer.appendChild(div);
//     });
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const newEvent = {
//         title: document.getElementById("eventTitle").value,
//         date: document.getElementById("eventDate").value,
//         category: document.getElementById("eventCategory").value,
//         description: document.getElementById("eventDescription").value
//     };

//     events.push(newEvent);
//     renderEvents();
//     form.reset();
// });

// function deleteEvent(index) {
//     events.splice(index, 1);
//     renderEvents();
// }

// clearAllBtn.addEventListener("click", () => {
//     events = [];
//     renderEvents();
// });

// addSampleBtn.addEventListener("click", () => {
//     events.push(
//         { title: "Tech Conference", date: "2026-03-10", category: "Conference", description: "AI & ML event" },
//         { title: "Workshop", date: "2026-04-12", category: "Workshop", description: "Web dev hands-on" }
//     );
//     renderEvents();
// });


// const demoContent = document.getElementById("demoContent");

// document.addEventListener("keydown", (e) => {
//     demoContent.textContent = "You pressed: " + e.key;
// });

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