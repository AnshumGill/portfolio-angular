import { Injectable } from "@angular/core";
import { Tech } from "./tech.model";
import { DomainService } from "./domain.service";

@Injectable()
export class TechService {
	constructor(private domainService: DomainService) {}
	techs = [
		new Tech("Bootstrap", 10, this.domainService.getDomainbyName("Frontend")),
		new Tech("Angular", 6, this.domainService.getDomainbyName("Frontend")),
		new Tech("AngularJS", 5, this.domainService.getDomainbyName("Frontend")),
		new Tech("Liquid", 8, this.domainService.getDomainbyName("Frontend")),
		new Tech("jQuery", 7, this.domainService.getDomainbyName("Frontend")),
		new Tech("Python", 10, this.domainService.getDomainbyName("Languages")),
		new Tech("Java", 5, this.domainService.getDomainbyName("Languages")),
		new Tech("C", 7, this.domainService.getDomainbyName("Languages")),
		new Tech("C++", 6, this.domainService.getDomainbyName("Languages")),
		new Tech("HTML", 9, this.domainService.getDomainbyName("Languages")),
		new Tech("CSS", 9, this.domainService.getDomainbyName("Languages")),
		new Tech("JavaScript", 7, this.domainService.getDomainbyName("Languages")),
		new Tech("Bash", 9, this.domainService.getDomainbyName("Languages")),
		new Tech("Docker", 9, this.domainService.getDomainbyName("DevOps")),
		new Tech("Ansible", 9, this.domainService.getDomainbyName("DevOps")),
		new Tech("Kubernetes", 5, this.domainService.getDomainbyName("DevOps")),
		new Tech("Prometheus", 9, this.domainService.getDomainbyName("DevOps")),
		new Tech("Grafana", 7, this.domainService.getDomainbyName("DevOps")),
		new Tech("AlertManager", 8, this.domainService.getDomainbyName("DevOps")),
		new Tech("Django", 10, this.domainService.getDomainbyName("Backend")),
		new Tech("Flask", 10, this.domainService.getDomainbyName("Backend")),
		new Tech("SpringBoot", 8, this.domainService.getDomainbyName("Backend")),
	];
}
