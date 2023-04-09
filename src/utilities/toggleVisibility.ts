/**
 * Utilities for toggling visibility and what is displayed.
 */

type NavigationToggleButtons = {
	characters: HTMLElement,
	parasiteEnergy: HTMLElement,
	weapons: HTMLElement
}

type MainContentSections = {
	characters: HTMLElement,
	parasiteEnergy: HTMLElement,
	weapons: HTMLElement
}

const contentElements: MainContentSections = {
	characters: document.querySelector("#characters"),
	parasiteEnergy: document.querySelector("#parasite-energy"),
	weapons: document.querySelector("#weapons")
};

export const toggleActionElements: NavigationToggleButtons = {
	characters: document.querySelector("#characters-btn"),
	parasiteEnergy: document.querySelector("#parasite-energy-btn"),
	weapons: document.querySelector("#weapons-btn")
};

export const toggleVisibility = function(selectedElement: HTMLElement) {
	const parentElementSelector = document.querySelector(".primary-main");
	const sectionElements = parentElementSelector.querySelectorAll("section.active");

	for (let i = 0; i < sectionElements.length; i++) {
		const sectionItem = sectionElements[i];

		if ((selectedElement === toggleActionElements.characters) && !contentElements.characters.classList.contains("active")) {
			sectionItem.classList.add("hidden");
			sectionItem.classList.remove("active");
			contentElements.characters.classList.add("active");
			contentElements.characters.classList.remove("hidden");
		} else if ((selectedElement === toggleActionElements.parasiteEnergy) && !contentElements.parasiteEnergy.classList.contains("active")) {
			sectionItem.classList.add("hidden");
			sectionItem.classList.remove("active");
			contentElements.parasiteEnergy.classList.add("active");
			contentElements.parasiteEnergy.classList.remove("hidden");
		} else if ((selectedElement === toggleActionElements.weapons) && !contentElements.weapons.classList.contains("active")) {
			sectionItem.classList.add("hidden");
			sectionItem.classList.remove("active");
			contentElements.weapons.classList.add("active");
			contentElements.weapons.classList.remove("hidden");
		}
	}

};