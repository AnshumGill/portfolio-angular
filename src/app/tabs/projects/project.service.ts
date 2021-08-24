import { Project } from "./project.model";
export class ProjectService {
	projects = [
		new Project(
			"Pneumothorax Identification",
			"Image Segmentation using Encoded UNet Network",
			"assets/neural_net.jpg",
			["https://github.com/AnshumGill/dl-pneumothorax"],
			["Python", "ResUNet", "Tensorflow", "Keras"],
			"ml"
		),
		new Project(
			"Image Classification",
			"Image Classification using Random Forest and SVM Classifier.",
			"assets/ml.jpg",
			["https://github.com/AnshumGill/python-ml-flower"],
			["Python", "Machine Learning", "Random Forest", "SVM", "Logistic Regression"],
			"ml"
		),
		new Project(
			"Ecommerce Website",
			"E-Commerce based Website for Bakery.",
			"assets/ecommerce.jpg",
			["https://github.com/AnshumGill/django-ecommerce"],
			["Djano", "NGINX", "uWSGI", "PostgreSQL", "2FA", "RazorPay", "MailChimp"],
			"webdev"
		),
		new Project(
			"Voting Application",
			"Smart Contracts based Django Web-App",
			"assets/blockchain.jpg",
			["https://github.com/AnshumGill/django-voting"],
			["Django", "Smart Contract", "Solidity", "Truffle Suit"],
			"misc"
		),
		new Project(
			"Global Warming Assessment",
			"Regression Model was made to predict future climate patterns.",
			"assets/ml.jpg",
			["https://github.com/AnshumGill/r-ml-climate"],
			["R", "Machine Learning", "Regression"],
			"ml"
		),
		new Project(
			"Movie Ticket Reservation System",
			"Tkinter based Python Application",
			"assets/python.jpg",
			["https://github.com/AnshumGill/python-movieticket"],
			["Python", "Tkinter", "SQLite"],
			"python"
		),
	];
}
