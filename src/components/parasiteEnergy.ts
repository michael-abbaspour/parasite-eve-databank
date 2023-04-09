/**
 * Component for Parasite Energy.
 */

import { getJsonFetch } from "../utilities/makeFetch.js";

type ParasiteEnergyProps = {
	abilities: Array<{
		parasiteEnergyId: number,
		name: string,
		levelLearned: number | string,
		peCost: number | string,
		effect: string
	}>
}

export const parasiteEnergySectionContent = function() {
	const parasiteEnergyContent: HTMLElement = document.querySelector(".grid-card-container");
	const parasiteEnergyData = getJsonFetch<ParasiteEnergyProps>("../../data/parasiteEnergy.json");

	return parasiteEnergyData.then(function(data) {
		data.abilities.forEach(property => {
			const parasiteEnergyList = document.createElement("ul");
			parasiteEnergyList.classList.add("no-bullets");
			const parasiteEnergyListItem = document.createElement("li");
			const parasiteEnergyListAppended = parasiteEnergyContent.appendChild(parasiteEnergyList);
			const parasiteEnergyListItemElements = {
				name: document.createElement("h3"),
				levelLearned: document.createElement("span"),
				peCost: document.createElement("span"),
				effect: document.createElement("p")
			};

			parasiteEnergyListItemElements.name.innerText = `${property.name}`;
			parasiteEnergyListItemElements.levelLearned.innerText = `Level Learned: ${property.levelLearned}`;
			parasiteEnergyListItemElements.levelLearned.classList.add("line-break-after");
			parasiteEnergyListItemElements.peCost.innerText = `PE Cost: ${property.peCost}`;
			parasiteEnergyListItemElements.effect.innerText = `${property.effect}`;

			parasiteEnergyListItem.append(parasiteEnergyListItemElements.name, parasiteEnergyListItemElements.levelLearned, parasiteEnergyListItemElements.peCost, parasiteEnergyListItemElements.effect);
			parasiteEnergyListAppended.insertAdjacentElement("beforeend", parasiteEnergyListItem);
		});
	});
};