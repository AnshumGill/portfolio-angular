import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ExplorerComponent } from "./explorer/explorer.component";
import { StatusBarComponent } from "./status-bar/status-bar.component";
import { TabBarComponent } from "./tab-bar/tab-bar.component";
import { TabsComponent } from "./tabs/tabs.component";
import { HomeComponent } from "./tabs/home/home.component";
import { AboutComponent } from "./tabs/about/about.component";
import { ContactComponent } from "./tabs/contact/contact.component";
import { ProjectsComponent } from "./tabs/projects/projects.component";
import { DomainService } from "./tabs/about/domain.service";

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		SidebarComponent,
		ExplorerComponent,
		StatusBarComponent,
		TabBarComponent,
		TabsComponent,
		HomeComponent,
		AboutComponent,
		ContactComponent,
		ProjectsComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [DomainService],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
