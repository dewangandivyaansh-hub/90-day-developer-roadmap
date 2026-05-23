const eventList = document.getElementById("eventList");

let events = JSON.parse(localStorage.getItem("events")) || [];

renderEvents();

function addEvent() {

    let eventDate =
        document.getElementById("eventDate").value;

    let eventText =
        document.getElementById("eventText").value.trim();

    let eventCategory =
        document.getElementById("eventCategory").value;

    if (eventDate === "" || eventText === "") {

        alert("Please fill all fields!");

        return;
    }

    const event = {
        date: eventDate,
        text: eventText,
        category: eventCategory
    };

    events.push(event);

    saveEvents();

    renderEvents();

    document.getElementById("eventDate").value = "";

    document.getElementById("eventText").value = "";
}

function deleteEvent(index) {

    events.splice(index, 1);

    saveEvents();

    renderEvents();
}

function renderEvents(filteredEvents = events) {

    eventList.innerHTML = "";

    filteredEvents.forEach((event, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            <div>
                <strong>${event.date}</strong><br>

                ${event.text}<br>

                <span class="category ${event.category}">
                    ${event.category}
                </span>
            </div>

            <button class="delete-btn"
                    onclick="deleteEvent(${index})">
                Delete
            </button>
        `;

        eventList.appendChild(li);
    });
}

/* 💾 SAVE TO LOCAL STORAGE */

function saveEvents() {

    localStorage.setItem(
        "events",
        JSON.stringify(events)
    );
}

/* 🔍 SEARCH EVENTS */

function searchEvents() {

    let searchText =
        document.getElementById("searchInput")
            .value
            .toLowerCase();

    let filteredEvents = events.filter(event =>
        event.text.toLowerCase().includes(searchText)
    );

    renderEvents(filteredEvents);
}