// event-loader.js
// This script is now located at event/2025/event-loader.js
// It loads the event page content dynamically.
// Note: It imports the event-list.js file using a relative path.
import { events } from '/event-list.js';

document.addEventListener('DOMContentLoaded', function() {
    // Get the event slug from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const eventSlug = urlParams.get('event');
    
    // Find the event object that matches the slug
    const eventData = events.find(event => event.slug === eventSlug);

    const contentDiv = document.getElementById('event-content');

    if (eventData) {
        // Helper function to get event state text and color
        function getEventState(stateCode) {
            switch (stateCode) {
                case 0:
                    return { text: "N/A", color: "red" };
                case 1:
                    return { text: "Happening", color: "yellowgreen" };
                case 3:
                    return { text: "Coming Soon", color: "orange" };
                case 4:
                    return { text: "Done", color: "green" };
                default:
                    return { text: "Unknown", color: "black" };
            }
        }

        const stateInfo = getEventState(eventData.state);
        contentDiv.innerHTML = `
            <center>
                <h1 style="color: ${eventData.secondarycolor}">${eventData.name}</h1>
                <h2 style="color: ${eventData.maincolor}"><b style="color: rgb(0, 0, 0)">DATE: </b>${eventData.from.day} ${eventData.from.month} ${eventData.from.year}</h2>
                <h3 style="color: ${stateInfo.color}"><b style="color: rgb(0, 0, 0)">State: </b>${stateInfo.text}</h3>
                <p style="font-size: 20px; color: #555; margin-top: 10px;">${eventData.text1}</p>
                <img src="/${eventData.img}" alt="${eventData.name} Celebration" style="width:800%; max-width:600px; margin-top:20px; border-radius:10px;">
                <p style="font-size: 16px; color: #777; margin-top: 10px;">${eventData.text2}</p>
                <a href=${eventData.videolink} class="btn" style="background-color: ${eventData.secondarycolor};">Watch Video</a>
                <br><br><br>
            </center>
        `;
        // Also update the page title dynamicale
        document.title = `Lakhi Airconditioners | ${eventData.name}`;
    } else {
        // Handle case where event is not found
        contentDiv.innerHTML = '<br><br><p style="color:red;font-size:100px;font-family: Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;">Sorry<br>the Event not found.</p><br><br>';
        document.title = 'Lakhi Airconditioners | Event Not Found';
    }
});