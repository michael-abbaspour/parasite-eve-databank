/**
 * The Weapons component.
 */

import { getJsonFetch } from "../utilities/makeFetch.js";
import { propertyOf } from "../utilities/accessKeys.js";

type WeaponTypeProps = {
	"activeTimeRate": number,
	"preFireTime": number,
	"attackCycleRate": number,
	"weapons": Array<{
		"name": string,
		"baseAttack": number,
		"plusAttack": number,
		"baseRange": number,
		"plusRange": number,
		"baseBullets": number,
		"plusBullets": number,
		"slots": number,
		"maxSlots": number,
		"special": string,
		"location": string
	}>
}

type WeaponsProps = {
	clubs: Array<WeaponTypeProps>,
	pistols: Array<WeaponTypeProps>,
	rifles: Array<WeaponTypeProps>
}

type CreateWeaponListElements = {
	list: HTMLUListElement,
	listItem: HTMLLIElement,
	activeTimeRate: HTMLSpanElement,
	preFireTime: HTMLSpanElement,
	attackCycleRate: HTMLSpanElement
}

type CreateWeaponsTableElements = {
	table: HTMLTableElement,
	tableHead: HTMLTableSectionElement,
	tableBody: HTMLTableSectionElement
}

class CreateWeaponsSection {
	public sectionContainer: HTMLElement;
	public sectionHeading: string;
	readonly weaponDataType: keyof WeaponsProps;
	private createListElements: CreateWeaponListElements;
	private createTableElements: CreateWeaponsTableElements;
	private fetchWeaponsData: Promise<WeaponsProps>;

	constructor(
		sectionContainer: HTMLElement,
		sectionHeading: string,
		weaponDataType: keyof WeaponsProps
	) {
		this.sectionContainer = sectionContainer;
		this.sectionHeading = sectionHeading;
		this.weaponDataType = weaponDataType;
		this.createListElements = {
			list: document.createElement("ul"),
			listItem: document.createElement("li"),
			activeTimeRate: document.createElement("span"),
			preFireTime: document.createElement("span"),
			attackCycleRate: document.createElement("span")
		};
		this.createTableElements = {
			table: document.createElement("table"),
			tableHead: document.createElement("thead"),
			tableBody: document.createElement("tbody")
		};
		this.fetchWeaponsData = getJsonFetch<WeaponsProps>("../../data/weapons.json");
	}
	createSection() {
		return this.fetchWeaponsData.then(data => {
			const getProperty = propertyOf<WeaponsProps>(this.weaponDataType);
			data[getProperty].forEach(property => {
				/////////// Heading and List Items
				const sectionHeadingElement = document.createElement("h3");
				sectionHeadingElement.innerText = this.sectionHeading;
				this.sectionContainer.appendChild(sectionHeadingElement);

				this.createListElements.list.classList.add("no-bullets");
				this.sectionContainer.appendChild(this.createListElements.list);

				this.createListElements.activeTimeRate.innerText = `Active Time Rate: x${property.activeTimeRate}`;
				this.createListElements.activeTimeRate.classList.add("line-break-after");
				this.createListElements.preFireTime.innerText = `Pre-fire Time: ${property.preFireTime} second(s)`;
				this.createListElements.preFireTime.classList.add("line-break-after");
				this.createListElements.attackCycleRate.innerText = `Attack Cycle Rate: ${property.attackCycleRate} second(s)`;

				this.createListElements.listItem.append(this.createListElements.activeTimeRate, this.createListElements.preFireTime, this.createListElements.attackCycleRate);
				this.createListElements.list.appendChild(this.createListElements.listItem);

				/////////// Table
				this.createTableElements.table.classList.add("data-table");
				this.sectionContainer.appendChild(this.createTableElements.table);
				this.createTableElements.table.append(this.createTableElements.tableHead, this.createTableElements.tableBody);

				const tableRowElements = {
					headerRow: document.createElement("tr")
				};
				this.createTableElements.tableHead.appendChild(tableRowElements.headerRow);

				const tableHeadColumnElements = {
					name: document.createElement("th"),
					baseAttack: document.createElement("th"),
					plusAttack: document.createElement("th"),
					baseRange: document.createElement("th"),
					plusRange: document.createElement("th"),
					baseBullets: document.createElement("th"),
					plusBullets: document.createElement("th"),
					slots: document.createElement("th"),
					maxSlots: document.createElement("th"),
					special: document.createElement("th"),
					location: document.createElement("th")
				};
				tableHeadColumnElements.name.innerText = "Name";
				tableHeadColumnElements.baseAttack.innerText = "Atk";
				tableHeadColumnElements.plusAttack.innerText = "+Atk";
				tableHeadColumnElements.baseRange.innerText = "Rng";
				tableHeadColumnElements.plusRange.innerText = "+Rng";
				tableHeadColumnElements.baseBullets.innerText = "Blts";
				tableHeadColumnElements.plusBullets.innerText = "+Blts";
				tableHeadColumnElements.slots.innerText = "Slots";
				tableHeadColumnElements.maxSlots.innerText = "Slots(Max)";
				tableHeadColumnElements.special.innerText = "Special";
				tableHeadColumnElements.location.innerText = "Location";
				tableRowElements.headerRow.append(
					tableHeadColumnElements.name,
					tableHeadColumnElements.baseAttack,
					tableHeadColumnElements.plusAttack,
					tableHeadColumnElements.baseRange,
					tableHeadColumnElements.plusRange,
					tableHeadColumnElements.baseBullets,
					tableHeadColumnElements.plusBullets,
					tableHeadColumnElements.slots,
					tableHeadColumnElements.maxSlots,
					tableHeadColumnElements.special,
					tableHeadColumnElements.location
				);

				for (let i = 0; i < property.weapons.length; i++) {
					const weaponRow = document.createElement("tr");
					const weaponData = {
						name: document.createElement("td"),
						baseAttack: document.createElement("td"),
						plusAttack: document.createElement("td"),
						baseRange: document.createElement("td"),
						plusRange: document.createElement("td"),
						baseBullets: document.createElement("td"),
						plusBullets: document.createElement("td"),
						slots: document.createElement("td"),
						maxSlots: document.createElement("td"),
						special: document.createElement("td"),
						location: document.createElement("td")
					};
					const weaponDataText = {
						name: document.createTextNode(`${property.weapons[i].name}`),
						baseAttack: document.createTextNode(`${property.weapons[i].baseAttack}`),
						plusAttack: document.createTextNode(`${property.weapons[i].plusAttack}`),
						baseRange: document.createTextNode(`${property.weapons[i].baseRange}`),
						plusRange: document.createTextNode(`${property.weapons[i].plusRange}`),
						baseBullets: document.createTextNode(`${property.weapons[i].baseBullets}`),
						plusBullets: document.createTextNode(`${property.weapons[i].plusBullets}`),
						slots: document.createTextNode(`${property.weapons[i].slots}`),
						maxSlots: document.createTextNode(`${property.weapons[i].maxSlots}`),
						special: document.createTextNode(`${property.weapons[i].special}`),
						location: document.createTextNode(`${property.weapons[i].location}`)
					};
					weaponData.name.appendChild(weaponDataText.name);
					weaponData.baseAttack.appendChild(weaponDataText.baseAttack);
					weaponData.plusAttack.appendChild(weaponDataText.plusAttack);
					weaponData.baseRange.appendChild(weaponDataText.baseRange);
					weaponData.plusRange.appendChild(weaponDataText.plusRange);
					weaponData.baseBullets.appendChild(weaponDataText.baseBullets);
					weaponData.plusBullets.appendChild(weaponDataText.plusBullets);
					weaponData.slots.appendChild(weaponDataText.slots);
					weaponData.maxSlots.appendChild(weaponDataText.maxSlots);
					weaponData.special.appendChild(weaponDataText.special);
					weaponData.location.appendChild(weaponDataText.location);
					weaponRow.append(
						weaponData.name,
						weaponData.baseAttack,
						weaponData.plusAttack,
						weaponData.baseRange,
						weaponData.plusRange,
						weaponData.baseBullets,
						weaponData.plusBullets,
						weaponData.slots,
						weaponData.maxSlots,
						weaponData.special,
						weaponData.location
					);
					this.createTableElements.tableBody.appendChild(weaponRow);
				}
			});
		});
	}
}

const weaponsSectionElement: HTMLElement = document.querySelector("#weapons");

export const newCreateClubsSection = new CreateWeaponsSection(weaponsSectionElement, "Clubs", "clubs").createSection();
export const newCreatePistolsSection = new CreateWeaponsSection(weaponsSectionElement, "Pistols", "pistols").createSection();
export const newCreateRiflesSection = new CreateWeaponsSection(weaponsSectionElement, "Rifles", "rifles").createSection();