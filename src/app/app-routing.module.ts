import { ProjectsComponent } from "./tabs/projects/projects.component";
import { ContactComponent } from "./tabs/contact/contact.component";
import { AboutComponent } from "./tabs/about/about.component";
import { HomeComponent } from "./tabs/home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "about", component: AboutComponent },
	{ path: "contact", component: ContactComponent },
	{ path: "projects", component: ProjectsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
