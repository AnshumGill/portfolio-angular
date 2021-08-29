import { Injectable } from "@angular/core";
import { Domain } from "./domain.model";

@Injectable()
export class DomainService {
	constructor() {}
	domains = [
		new Domain("Languages", "I am familiar with", "#9796f0", "#fbc7d4"),
		new Domain("Frontend", "frameworks I have worked on", "#acb6e5", "#86fde8"),
		new Domain("DevOps", "technologies I have implemented", "#ED4264", "#FFEDBC"),
		new Domain("Backend", "frameworks I have worked on", "#2BC0E4", "#EAECC6"),
	];
	getDomainbyName(name: string) {
		const domain = this.domains.find((domain) => domain.name == name);
		return domain!;
	}
}
