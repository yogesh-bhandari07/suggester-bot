import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./views/register/register.component";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";
import { AuthGuard } from "./core/guards/auth.guard";
import { NoAuthGuard } from "./core/guards/no-auth.guard";
import { PostDetailsComponent } from "./views/post-details/post-details.component";

const routes: Routes = [
  {
    path: "auth/register",
    component: RegisterComponent,
    canActivate: [NoAuthGuard],
  },
  { path: "register", redirectTo: "/auth/register", pathMatch: "full" },
  {
    path: "auth/login",
    component: LoginComponent,
    canActivate: [NoAuthGuard],
  },
  { path: "login", redirectTo: "/auth/register", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    pathMatch: "full",
    canActivate: [AuthGuard],
  },
  {
    path: "post/:id",
    component: PostDetailsComponent,
    pathMatch: "full",
    canActivate: [NoAuthGuard],
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
