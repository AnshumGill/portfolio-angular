import {
    Component,
    OnInit,
    AfterViewInit,
    ElementRef,
    ViewChild,
} from "@angular/core";
import { Tech } from "./tech.model";
import { Domain } from "./domain.model";
import { TechService } from "./tech.service";
import { DomainService } from "./domain.service";

@Component({
    selector: "app-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.css"],
    providers: [TechService, DomainService],
})
export class AboutComponent implements OnInit {
    heading: string = "About Me";
    body: string =
        "Hi! I'm a B.Tech CSE Graduate currently working at Airbnb as an Operations Engineer.\
        5+ years of experience architecting and automating solutions for high-volume and distributed systems. Proven expertise in AWS, Kubernetes, Python, and CI/CD pipelines, with a strong focus on SRE principles to enhance scalability and streamline operations. Eager to apply skills in building and managing robust infrastructure to a challenging role.\
        I've done most of my development in Python but am open to learn any language.";
    techs: Tech[] = [];
    domains: Domain[] = [];
    constructor(
        private techService: TechService,
        private domainService: DomainService,
    ) {}

    ngOnInit(): void {
        this.techs = this.techService.techs;
        this.domains = this.domainService.domains;
    }

    getBarWidth(value: number) {
        return value * 10 + "%";
    }

    getBgGradient(domain: Domain) {
        return (
            "linear-gradient(to right," +
            domain.color1 +
            "," +
            domain.color2 +
            ")"
        );
    }
}
