import { Page } from "./../tabs/page.model";
import { PageService } from "./../tabs/page.service";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-explorer",
	templateUrl: "./explorer.component.html",
	styleUrls: ["./explorer.component.css"],
	providers: [PageService],
})
export class ExplorerComponent implements OnInit {
	pages: Page[] = [];
	constructor(private pageService: PageService) {}

	ngOnInit(): void {
		this.pages = this.pageService.pages;
	}
}
