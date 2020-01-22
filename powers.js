// Event Handler Functions
const activate = (power) => {
    const section = document.querySelector(`#${power}`);
    section.classList.remove("disabled");
    section.classList.add("enabled");
}

const deactivate = (power) => {
    const section = document.querySelector(`#${power}`);
    section.classList.remove("enabled");
    section.classList.add("disabled");
}

const handlerFunction = (event) => {
    let power = event.target.id.split("-")[1];
    // In the case of activate / deactivate all:
    if (power === "all") {
        const state = event.target.id.split("-")[0];
        const sections = document.querySelectorAll(".power")
        if (state === "activate") {
            sections.forEach(section => {
                power = section.id
                activate(power);
            })
        } else if (state === "deactivate") {
            sections.forEach(section => {
                power = section.id
                deactivate(power);
            })
        }
    // In the case of every other button (all single activate):
    } else {
        activate(power);
    }
}

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
