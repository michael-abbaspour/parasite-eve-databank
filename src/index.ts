/**
 * The main file for the application.
 */

import { charactersSectionContent } from "./components/characters.js";
import { parasiteEnergySectionContent } from "./components/parasiteEnergy.js";
import { newCreateClubsSection, newCreatePistolsSection, newCreateRiflesSection } from "./components/weapons.js";
import { toggleActionElements, toggleVisibility } from "./utilities/toggleVisibility.js";

const promiseAllSectionContent = Promise.all([
	charactersSectionContent(),
	parasiteEnergySectionContent(),
	newCreateClubsSection,
	newCreatePistolsSection,
	newCreateRiflesSection
]);
promiseAllSectionContent.then(values => {
	return values;
});

document.addEventListener("click", function(event) {
	switch (event.target) {
	case toggleActionElements.characters:
		toggleVisibility(toggleActionElements.characters);
		break;
	case toggleActionElements.parasiteEnergy:
		toggleVisibility(toggleActionElements.parasiteEnergy);
		break;
	case toggleActionElements.weapons:
		toggleVisibility(toggleActionElements.weapons);
		break;
	}
});