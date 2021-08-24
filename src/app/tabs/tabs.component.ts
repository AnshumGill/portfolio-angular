import { Component, OnInit } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
@Component({
	selector: "app-tabs",
	templateUrl: "./tabs.component.html",
	styleUrls: ["./tabs.component.css"],
})
export class TabsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
