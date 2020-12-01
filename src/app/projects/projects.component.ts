import { Component, OnInit, Input } from "@angular/core";
import { Project } from "./project.model";
@Component({
	selector: "app-projects",
	templateUrl: "./projects.component.html",
	styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {
	@Input("project") project: Project;
	// @Input("category") category: string;
	constructor() {}

	ngOnInit(): void {
		console.log(this.project);
	}
}
