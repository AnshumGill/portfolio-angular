import { Component, OnInit } from "@angular/core";
import { Project } from "../project.model";

import { PaginationModule } from "ngx-bootstrap/pagination";

@Component({
	selector: "app-project-list",
	templateUrl: "./project-list.component.html",
	styleUrls: ["./project-list.component.css"],
})
export class ProjectListComponent implements OnInit {
	categoryValue: string;
	webdev: string = "webdev";
	python: string = "python";
	ml: string = "ml";
	misc: string = "misc";
	picky: string = "picky";
	all: string = "all";
	projects: Project[] = [
		new Project(
			"Pneumothorax Identification",
			"Internship project in which Image segmentation was performed on a dataset consisting of Lung X-rays and masks were drawn for predicted areas of Pneumothorax in the X-ray using Encoded UNet Network.",
			"https://upload.wikimedia.org/wikipedia/commons/9/97/Rt_sided_pneumoD.jpg",
			["https://github.com/AnshumGill/dl-pneumothorax"],
			["Deep Learning", "ResUNet", "Image Segmentation", "Keras"],
			"ml"
		),
		new Project(
			"Image Classification",
			"Image Classification was performed using Random Forest and SVM Classifier on 200 photos of flowers clicked personally containing 10 classes each with 20 pictures.",
			"https://miro.medium.com/max/822/1*CV81vQUQTq-ko_ER9gvqjg.png",
			["https://github.com/AnshumGill/python-ml-flower"],
			["Python", "Machine Learning", "Random Forest", "SVM", "Logistic Regression"],
			"ml"
		),
		new Project(
			"Ecommerce Website",
			"Django based ecommerce website. This was my first website which I developed on Django framework. Decided to learn Django and make an ecommerce website for my mother's bakery. This was hosted on an EC2 instance on AWS where requests were handled by uWSGI and NGINX.",
			"https://makdigitaldesign.com/wp-content/uploads/2020/02/ecommerce.png",
			["https://github.com/AnshumGill/django-ecommerce"],
			["Djano", "NGINX", "uWSGI", "PostgreSQL", "2FA", "RazorPay", "MailChimp"],
			"webdev"
		),
		new Project(
			"Voting Application",
			"An application where users can cast vote online. Can be scaled from inter company voting to local or national government elections. Blockchain is used to cast and verify votes to make it secure. Frontend is developed in Django.",
			"https://appinventiv.com/wp-content/uploads/sites/1/2020/11/Role-of-blockchain-in-voting.gif",
			["https://github.com/AnshumGill/django-voting"],
			["Django", "HTML", "CSS", "Blockchain", "Truffle Suit"],
			"misc"
		),
		new Project(
			"Global Warming Assessment",
			"Using the GlobalLandTemperature Dataset from Kaggle change in Average Land Temperature a Regression Model was made for India with the help of which predictions were made for the future.",
			"https://upload.wikimedia.org/wikipedia/commons/8/88/Change_in_Average_Temperature.svg",
			["https://github.com/AnshumGill/r-ml-climate", "https://github.com/AnshumGill/r-ml-climate/blob/master/Paper.pdf"],
			["R", "Machine Learning", "Regression"],
			"ml"
		),
		new Project(
			"EDA Projects",
			"EDA was performed after data preprocessing and cleaning to find relevant correlations.\nFirst was Ecommerce Dataset in which Yearly Amount Spent was derived as an equation of other relevant columns such as Avg. Session Length or Length of Membership.\nSecond was Startups Dataset in which Profit was derived in terms of R&D and Marketing.",
			"https://miro.medium.com/max/376/1*mW9PgNjfWxHhbve3O2siNA.png",
			[
				"https://github.com/AnshumGill/python-ml-ecommerce",
				"https://github.com/AnshumGill/python-ml-ecommerce",
				"https://github.com/AnshumGill/python-ml-startups",
				"https://github.com/AnshumGill/python-ml-startups/blob/master/Report.pdf",
			],
			["Python", "Pandas", "Numpy", "EDA", "Regression"],
			"python"
		),
		new Project(
			"Movie Ticket Reservation System",
			"A Movie Ticket Reservation System GUI application was developed in Python using Tkinter with database in SQLite as a college project.",
			"https://cdn.educba.com/academy/wp-content/uploads/2020/02/Python-Tkinter.jpg",
			["https://github.com/AnshumGill/python-movieticket"],
			["Python", "Tkinter", "SQLite", "GUI"],
			"python"
		),
	];

	constructor() {}

	ngOnInit(): void {
		this.categoryValue = this.all;
	}

	onChange() {
		// console.log(this.categoryValue);
	}
}
