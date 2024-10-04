import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./views/register/register.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";

const routes: Routes = [
  { path: "auth/register", component: RegisterComponent },
  { path: "register", redirectTo: "/auth/register", pathMatch: "full" },
  { path: "auth/login", component: LoginComponent },
  { path: "login", redirectTo: "/auth/register", pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: "full" },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
