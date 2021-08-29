import { Project, Link } from "./project.model";
export class ProjectService {
	projects = [
		new Project(
			"Pneumothorax Identification",
			"Image Segmentation using Encoded UNet Network",
			"assets/neural_net_s.jpg",
			[new Link("Source Code", "https://github.com/AnshumGill/dl-pneumothorax")],
			["Python", "ResUNet", "Tensorflow", "Keras"]
		),
		new Project(
			"Image Classification",
			"Image Classification using Random Forest and SVM Classifier.",
			"assets/ml_s.jpg",
			[new Link("Source Code", "https://github.com/AnshumGill/python-ml-flower")],
			["Python", "Machine Learning", "Random Forest", "SVM", "Regression"]
		),
		new Project(
			"Smart Parking Solution",
			"IoT Based Smart Parking Solution",
			"assets/neural_net_s.jpg",
			[],
			["Python", "Machine Learning", "Logistic Regression", "YOLOv3", "Orion"]
		),
		new Project(
			"Web Dev Projects",
			"",
			"assets/webdev_s.jpg",
			[
				new Link("LQI Smoothies", "https://www.lqibev.com/"),
				new Link("Awsum", "https://getawsum.com/"),
				new Link("NB Living", "https://nbliving.in/"),
				new Link("VS Munro Designs", "https://vsmunrodesigns.com/"),
				new Link("Mehak Spices", "https://mehak-spices.netlify.app/"),
			],
			["Shopify", "Angular", "Bootstrap", "Liquid"]
		),
		new Project(
			"Ecommerce Website",
			"E-Commerce based Website for Bakery.",
			"assets/ecommerce_s.jpg",
			[new Link("Source Code", "https://github.com/AnshumGill/django-ecommerce")],
			["Djano", "NGINX", "uWSGI", "PostgreSQL", "2FA", "RazorPay", "MailChimp"]
		),
		new Project(
			"Voting Application",
			"Smart Contracts based Django Web-App",
			"assets/blockchain_s.jpg",
			[new Link("Source Code", "https://github.com/AnshumGill/django-voting")],
			["Django", "Smart Contract", "Solidity", "Truffle Suit"]
		),
		new Project(
			"Global Warming Assessment",
			"Regression Model was made to predict future climate patterns.",
			"assets/ml_s.jpg",
			[new Link("Source Code", "https://github.com/AnshumGill/r-ml-climate")],
			["R", "Machine Learning", "Regression"]
		),
		new Project(
			"Movie Ticket Reservation System",
			"Tkinter based Python Application",
			"assets/python_s.jpg",
			[new Link("Source Code", "https://github.com/AnshumGill/python-movieticket")],
			["Python", "Tkinter", "SQLite"]
		),
	];
}
