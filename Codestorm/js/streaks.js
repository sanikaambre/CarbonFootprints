document.addEventListener("DOMContentLoaded", function () {
    const addEventBtn = document.getElementById("addEventBtn");
    const timelineContainer = document.getElementById("timeline-container");
    const eventModal = document.getElementById("eventModal");
    const eventForm = document.getElementById("eventForm");
    const eventTitleInput = document.getElementById("eventTitle");
    const eventDateInput = document.getElementById("eventDate");
    const eventDescriptionInput = document.getElementById("eventDescription");
    const closeButton = document.querySelector(".close");
    const modalOverlay = document.getElementById("modalOverlay"); // Add this line to get the modal overlay element

    // Function to retrieve events data from localStorage
    function getEvents() {
        const eventsJSON = localStorage.getItem("events");
        return eventsJSON ? JSON.parse(eventsJSON) : [];
    }

    // Function to update events data in localStorage
    function updateEvents(events) {
        localStorage.setItem("events", JSON.stringify(events));
    }

    // Function to add an event to the timeline
    function addEventToTimeline(title, date, description) {
        const timelineItem = document.createElement("div");
        timelineItem.className = "timeline-item";

        timelineItem.innerHTML = `
            <div class="timeline-img"></div>
            <div class="timeline-content js--fadeInLeft">
                <h2>${title}</h2>
                <div class="date">${date}</div>
                <p>${description}</p>
            </div>
        `;

        timelineContainer.appendChild(timelineItem);
    }

    // Load existing events from localStorage on page load
    const existingEvents = getEvents();
    existingEvents.forEach((event) => {
        addEventToTimeline(event.title, event.date, event.description);
    });

    addEventBtn.addEventListener("click", function () {
        modalOverlay.style.display = "block";
        eventModal.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        modalOverlay.style.display = "none";
        eventModal.style.display = "none";
    });

    eventForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user-entered event details
        const title = eventTitleInput.value;
        const date = eventDateInput.value;
        const description = eventDescriptionInput.value;

        // Add the event to the timeline
        addEventToTimeline(title, date, description);

        // Store the event in localStorage
        const newEvent = { title, date, description };
        const events = getEvents();
        events.push(newEvent);
        updateEvents(events);

        // Clear the form inputs
        eventTitleInput.value = "";
        eventDateInput.value = "";
        eventDescriptionInput.value = "";

        // Close the event entry modal and remove the dim effect
        modalOverlay.style.display = "none";
        eventModal.style.display = "none";
    });
});

