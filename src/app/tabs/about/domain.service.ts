import { Injectable } from "@angular/core";
import { Domain } from "./domain.model";

@Injectable()
export class DomainService {
    constructor() {}
    domains = [
        new Domain(
            "Monitoring and Observability",
            "systems I have worked on",
            "#ED4264",
            "#FFEDBC",
        ),
        new Domain(
            "Clouds and Infrastructure",
            "services I have worked on",
            "#acb6e5",
            "#86fde8",
        ),
        new Domain("CI/CD", "apps I have used", "#2BC0E4", "#EAECC6"),
        new Domain("Languages", "I am familiar with", "#9796f0", "#fbc7d4"),
    ];
    getDomainbyName(name: string) {
        const domain = this.domains.find((domain) => domain.name == name);
        return domain!;
    }
}
