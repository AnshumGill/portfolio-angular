import { Injectable } from "@angular/core";
import { Tech } from "./tech.model";
import { DomainService } from "./domain.service";

@Injectable()
export class TechService {
    constructor(private domainService: DomainService) {}
    techs = [
        // Observability
        new Tech(
            "Prometheus",
            10,
            this.domainService.getDomainbyName("Monitoring and Observability"),
        ),
        new Tech(
            "Grafana",
            9,
            this.domainService.getDomainbyName("Monitoring and Observability"),
        ),
        new Tech(
            "AlertManager",
            8,
            this.domainService.getDomainbyName("Monitoring and Observability"),
        ),
        new Tech(
            "OpenSearch",
            6,
            this.domainService.getDomainbyName("Monitoring and Observability"),
        ),
        new Tech(
            "Vector",
            7,
            this.domainService.getDomainbyName("Monitoring and Observability"),
        ),
        // Clouds and Infrastructure
        new Tech(
            "AWS",
            9,
            this.domainService.getDomainbyName("Clouds and Infrastructure"),
        ),
        new Tech(
            "Kubernetes",
            7,
            this.domainService.getDomainbyName("Clouds and Infrastructure"),
        ),
        new Tech(
            "Docker",
            8,
            this.domainService.getDomainbyName("Clouds and Infrastructure"),
        ),
        new Tech(
            "GCP",
            6,
            this.domainService.getDomainbyName("Clouds and Infrastructure"),
        ),
        new Tech(
            "Azure",
            4,
            this.domainService.getDomainbyName("Clouds and Infrastructure"),
        ),

        // CICD
        new Tech("Terraform", 9, this.domainService.getDomainbyName("CI/CD")),
        new Tech("Ansible", 8, this.domainService.getDomainbyName("CI/CD")),
        new Tech("ArgoCd", 7, this.domainService.getDomainbyName("CI/CD")),
        new Tech("Helm", 5, this.domainService.getDomainbyName("CI/CD")),

        // Languages
    ];
}
