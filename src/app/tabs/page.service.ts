import { Page } from "./page.model";
export class PageService {
	pages = [
		new Page("assets/document.svg", "home.txt", "/"),
		new Page("assets/python.svg", "projects.py", "/projects"),
		new Page("assets/html.svg", "about.html", "/about"),
		new Page("assets/css.svg", "contact.css", "/contact"),
	];
}
