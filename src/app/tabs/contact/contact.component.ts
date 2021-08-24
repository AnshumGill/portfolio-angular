import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-contact",
	templateUrl: "./contact.component.html",
	styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
	socials = [
		{
			name: "phone",
			value: "+919811290033",
			href: "tel:+919811290033",
		},
		{
			name: "email",
			value: "anshumgill@gmail.com",
			href: "mailto:anshumgill@gmail.com",
		},
		{
			name: "linkedin",
			value: "anshum-gill",
			href: "https://www.linkedin.com/in/anshum-gill/",
		},
		{
			name: "github",
			value: "anshumgill",
			href: "https://www.github.com/anshumgill",
		},
		{
			name: "instagram",
			value: "anshum_gill",
			href: "https://www.instagram.com/anshum_gill/",
		},
		{
			name: "facebook",
			value: "AnshumGill",
			href: "https://www.facebook.com/AnShUmGilL1997/",
		},
	];
	constructor() {}

	ngOnInit(): void {}
}
