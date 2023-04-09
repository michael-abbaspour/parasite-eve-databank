/**
 * The component for Characters.
 */

import { getJsonFetch } from "../utilities/makeFetch.js";

type CharactersProps = {
	characters: Array<{
		characterId: number,
		firstName: string,
		lastName: string,
		age: number | null,
		occupation: string,
		description: string
	}>
};

export const charactersSectionContent = function() {
	const charactersSection: HTMLElement = document.querySelector("#characters");
	const charactersData = getJsonFetch<CharactersProps>("../../data/characters.json");

	return charactersData.then(function(data) {
		data.characters.forEach(property => {
			const charactersList = document.createElement("ul");
			charactersList.classList.add("no-bullets");
			const charactersListItem = document.createElement("li");
			charactersListItem.classList.add("list-item-box-item");
			const charactersListAppended = charactersSection.appendChild(charactersList);
			const charactersListItemElements = {
				name: document.createElement("h3"),
				age: document.createElement("span"),
				occupation: document.createElement("span"),
				description: document.createElement("p")
			};

			charactersListItemElements.name.innerText = `${property.firstName} ${property.lastName}`;
			charactersListItemElements.age.innerText = `Age: ${property.age}`;
			charactersListItemElements.age.classList.add("line-break-after");
			charactersListItemElements.occupation.innerText = `Occupation: ${property.occupation}`;
			charactersListItemElements.description.innerText = `${property.description}`;

			charactersListItem.append(charactersListItemElements.name, charactersListItemElements.age, charactersListItemElements.occupation, charactersListItemElements.description);
			charactersListAppended.insertAdjacentElement("beforeend", charactersListItem);
		});
	});
};

