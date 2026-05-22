const eventList = document.getElementById("eventList");

let events = [];

function addEvent() {

    let eventDate =
        document.getElementById("eventDate").value;

    let eventText =
        document.getElementById("eventText").value.trim();

    if (eventDate === "" || eventText === "") {

        alert("Please fill all fields!");

        return;
    }

    const event = {
        date: eventDate,
        text: eventText
    };

    events.push(event);

    renderEvents();

    document.getElementById("eventDate").value = "";

    document.getElementById("eventText").value = "";
}

function deleteEvent(index) {

    events.splice(index, 1);

    renderEvents();
}

function renderEvents() {

    eventList.innerHTML = "";

    events.forEach((event, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            <div>
                <strong>${event.date}</strong><br>
                ${event.text}
            </div>

            <button class="delete-btn"
                    onclick="deleteEvent(${index})">
                Delete
            </button>
        `;

        eventList.appendChild(li);
    });
}