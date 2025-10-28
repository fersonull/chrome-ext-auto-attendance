const interval = 10000; // 5 seconds

function handleAttend() {
    const xpath = "//button[normalize-space(.) = 'Available']";

    const result = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    );

    const button = result.singleNodeValue;

    if (button) {
        console.log("Found an 'Available' lesson. Clicking it...");
        button.click();
        console.log("Attendance task complete. Stopping check.");

    } else {
        console.log(`No available lessons found. Retrying in ${interval / 1000} seconds...`);
        setTimeout(handleAttend, interval);
    }
}

console.log("Starting attendance check...");
handleAttend();