// Event Handler Functions
const handlerFunction = (event) => {
    const power = event.target.id.split("-")[1];
    if (power === "all") {
        const state = event.target.id.split("-")[0];
        if (state === "activate") {
            sectionsAllPowers.forEach(power => {
                power.classList.remove("disabled");
                power.classList.add("enabled");
            })
        } else if (state === "deactivate") {
            sectionsAllPowers.forEach(power => {
                power.classList.remove("enabled");
                power.classList.add("disabled");
            })
        }
    } else {
        const section = document.querySelector(`#${power}`)
        section.classList.remove("disabled");
        section.classList.add("enabled");
    }
}

// NON-DRY Practice Run
// const flightHandlerFunction = (event) => {
//     sectionFlight.classList.remove("disabled");
//     sectionFlight.classList.add("enabled");
// }

// const mindReaderHandlerFunction = (event) => {
//     sectionMindReading.classList.remove("disabled");
//     sectionMindReading.classList.add("enabled");
// }

// const xRayHandlerFunction = (event) => {
//     sectionXRay.classList.remove("disabled");
//     sectionXRay.classList.add("enabled");
// }

// const activateAllHandlerFunction = (event) => {
//     sectionsAllPowers.forEach(power => {
//         power.classList.remove("disabled");
//         power.classList.add("enabled");
//     })
// }

// const deactivateAllHandlerFunction = (event) => {
//     sectionsAllPowers.forEach(power => {
//         power.classList.remove("enabled");
//         power.classList.add("disabled");
//     })
// }

// DOM Sections
const sectionFlight = document.querySelector("#flight");
const sectionMindReading = document.querySelector("#mindreading")
const sectionXRay = document.querySelector("#xray");
const sectionsAllPowers = document.querySelectorAll(".power")

// DOM Buttons
const activateFlightButton = document.querySelector("#activate-flight")
const activateMindReadingButton = document.querySelector("#activate-mindreading")
const activateXRayButton = document.querySelector("#activate-xray")
const activateAllButton = document.querySelector("#activate-all");
const deactivateAllButton = document.querySelector("#deactivate-all");

// Event Listeners
activateFlightButton.addEventListener("click", handlerFunction)
activateMindReadingButton.addEventListener("click", handlerFunction)
activateXRayButton.addEventListener("click", handlerFunction)
activateAllButton.addEventListener("click", handlerFunction)
deactivateAllButton.addEventListener("click", handlerFunction)

// NON-DRY Practice Run
// activateFlightButton.addEventListener("click", flightHandlerFunction)
// activateMindReadingButton.addEventListener("click", mindReaderHandlerFunction)
// activateXRayButton.addEventListener("click", xRayHandlerFunction)
// activateAllButton.addEventListener("click", activateAllHandlerFunction)
// deactivateAllButton.addEventListener("click", deactivateAllHandlerFunction)

