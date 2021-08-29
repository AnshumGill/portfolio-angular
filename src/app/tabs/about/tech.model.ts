import { Domain } from "./domain.model";

export class Tech {
	public name: string;
	public value: number;
	public domain: Domain;
	constructor(name: string, value: number, domain: Domain) {
		this.name = name;
		this.value = value;
		this.domain = domain;
	}
}
