// event-check.js
import { events } from './event-list.js';

document.addEventListener('DOMContentLoaded', function() {
    // --- Script Logic ---
    const today = new Date();
    // Set time to 00:00:00 to compare dates only
    today.setHours(0, 0, 0, 0);

    // Find an event that is active today
    const todaysEvent = events.find(event => {
        // Create Date objects from the event's 'from' and 'to' properties
        // Note: The month in the Date constructor is 0-indexed (0=Jan, 11=Dec), so we subtract 1.
        const fromDate = new Date(event.from.year, event.from.month - 1, event.from.day);
        const toDate = new Date(event.to.year, event.to.month - 1, event.to.day);
        
        // Set time to the end of the day for the 'to' date to make the range inclusive
        toDate.setHours(23, 59, 59, 999);

        return today >= fromDate && today <= toDate;
    });

    const eventDisplayMain = document.getElementById('event-display-main');
    const eventDefault = document.getElementById('event-default');

    if (todaysEvent && eventDisplayMain && eventDefault) {
        // An event was found for today
        
        // The bannerhtml in event-list.js uses template literal placeholders.
        // We need to replace them with the actual values from the event object.
        let finalBannerHtml = todaysEvent.bannerhtml
            .replace(/\$\{link\}/g, todaysEvent.link)
            .replace(/\$\{col2img\}/g, todaysEvent.col2img)
            .replace(/\$\{bannerimg\}/g, todaysEvent.bannerimg)
            .replace(/\$\{buttoncolor\}/g, todaysEvent.buttoncolor)
            .replace(/\$\{buttontextcolor\}/g, todaysEvent.buttontextcolor);

        let finalBannerStyle = todaysEvent.bannerstyle
            .replace(/\$\{maincolor\}/g, todaysEvent.maincolor)
            .replace(/\$\{secondarycolor\}/g, todaysEvent.secondarycolor);
            

        // Populate the event display element
        eventDisplayMain.innerHTML = finalBannerHtml;
        eventDisplayMain.style.cssText = finalBannerStyle;

        // Show the event display and hide the no-event message
        eventDisplayMain.style.display = 'block'; // Or 'flex', 'grid', etc., depending on your CSS
        eventDefault.style.display = 'none';
    } else if (eventDisplayMain && eventDefault) {
        // No event for today, or elements not found
        // Hide the event display and show the no-event message
        eventDisplayMain.style.display = 'none';
        eventDefault.style.display = 'block'; // Or 'flex', 'grid', etc.
    }
});