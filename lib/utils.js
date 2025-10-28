/**
 * Creates a promise that watches the page for an error element to appear.
 * Resolves with the error text if found, and rejects on timeout.
 * @param {string} selector - The CSS selector for the error element (e.g., '.alert_danger').
 * @param {number} timeout - How long to wait (in ms) before assuming success.
 * @returns {Promise<string>} A promise that resolves with the error message text.
 */
function waitForError(selector, timeout = 5000) {
    return new Promise((resolve, reject) => {
        // Check if the error already exists
        const existingError = document.querySelector(selector);
        if (existingError) {
            return resolve(existingError.textContent);
        }

        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const errorEl = node.matches(selector) ? node : node.querySelector(selector);
                        if (errorEl) {
                            observer.disconnect();
                            clearTimeout(timer);
                            resolve(errorEl.textContent);
                            return;
                        }
                    }
                }
            }
        });

        // Set a timeout. If no error appears, we assume the login was successful.
        const timer = setTimeout(() => {
            observer.disconnect();
            reject(new Error('Login check timed out. Assuming success.'));
        }, timeout);

        // Start observing the entire document for changes
        observer.observe(document.body, { childList: true, subtree: true });
    });
}


/**
 * Clicks an element at a specific time of day (24-hour format).
 * @param {string} selector - The CSS selector of the element to click.
 * @param {string} timeString - The target time in "HH:MM:SS" format (e.g., "14:30:00").
 */
function clickAtTime(selector, timeString) {
    const element = document.querySelector(selector);

    if (!element) {
        console.error(`Error: Could not find element with selector: ${selector}`);
        return;
    }

    // 1. Parse the target time
    const parts = timeString.split(':');
    const targetHours = parseInt(parts[0], 10);
    const targetMinutes = parseInt(parts[1], 10);
    const targetSeconds = parts[2] ? parseInt(parts[2], 10) : 0;

    // 2. Get the current time and set the target time for today
    const now = new Date();
    const targetDate = new Date();
    targetDate.setHours(targetHours, targetMinutes, targetSeconds, 0); // h, m, s, ms

    // 3. Calculate the delay
    let delay = targetDate.getTime() - now.getTime();

    // 4. If the time is already past, set it for tomorrow
    if (delay < 0) {
        console.log(`Time ${timeString} is already past for today. Scheduling for tomorrow.`);
        targetDate.setDate(targetDate.getDate() + 1);
        delay = targetDate.getTime() - now.getTime();
    }

    const readableDate = targetDate.toLocaleString();
    console.log(`Element "${selector}" will be clicked at: ${readableDate} (in ${delay}ms)`);

    // 5. Set the timeout
    setTimeout(() => {
        console.log(`Clicking "${selector}" at scheduled time!`);
        element.click();
    }, delay);
}
