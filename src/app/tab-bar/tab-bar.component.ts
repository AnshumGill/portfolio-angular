import { Page } from "./../tabs/page.model";
import { PageService } from "./../tabs/page.service";
import { Component, OnInit } from "@angular/core";
@Component({
	selector: "app-tab-bar",
	templateUrl: "./tab-bar.component.html",
	styleUrls: ["./tab-bar.component.css"],
	providers: [PageService],
})
export class TabBarComponent implements OnInit {
	pages: Page[] = [];
	constructor(private pageService: PageService) {}

	ngOnInit(): void {
		this.pages = this.pageService.pages;
	}
}
