import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-about",
	templateUrl: "./about.component.html",
	styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
	heading: string = "About Me";
	body: string =
		"Hi! I'm a B.Tech CSE Graduate currently working at Hughes Systique as an Associate Engineer.\
        I have knowledge in various domains such as ML, Deep Learning, Neural Networks, Frontend Development, IoT etc.\
        I've done most of my development in Python but am open to learn any language.";
	constructor() {}

	ngOnInit(): void {}
}
