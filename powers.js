// Event Handler Functions
const flightHandlerFunction = (event) => {
    sectionFlight.classList.remove("disabled");
    sectionFlight.classList.add("enabled");
}

const mindReaderHandlerFunction = (event) => {
    sectionMindReading.classList.remove("disabled");
    sectionMindReading.classList.add("enabled");
}

const xRayHandlerFunction = (event) => {
    sectionXRay.classList.remove("disabled");
    sectionXRay.classList.add("enabled");
}

const activateAllHandlerFunction = (event) => {
    sectionsAllPowers.forEach(power => {
        power.classList.remove("disabled");
        power.classList.add("enabled");
    })
}

const deactivateAllHandlerFunction = (event) => {
    sectionsAllPowers.forEach(power => {
        power.classList.remove("enabled");
        power.classList.add("disabled");
    })
}

// DOM Sections
const sectionFlight = document.querySelector("#flight");
const sectionMindReading = document.querySelector("#mindreading")
const sectionXRay = document.querySelector("#xray");
const sectionsAllPowers = document.querySelectorAll(".power")


console.log("All Powers: ", sectionsAllPowers)

// DOM Buttons
const activateFlightButton = document.querySelector("#activate-flight")
const activateMindReadingButton = document.querySelector("#activate-mindreading")
const activateXRayButton = document.querySelector("#activate-xray")
const activateAllButton = document.querySelector("#activate-all");
const deactivateAllButton = document.querySelector("#deactivate-all");

// Event Listeners
activateFlightButton.addEventListener("click", flightHandlerFunction)
activateMindReadingButton.addEventListener("click", mindReaderHandlerFunction)
activateXRayButton.addEventListener("click", xRayHandlerFunction)
activateAllButton.addEventListener("click", activateAllHandlerFunction)
deactivateAllButton.addEventListener("click", deactivateAllHandlerFunction)

