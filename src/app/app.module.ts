import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./views/register/register.component";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms"; // Combined imports
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { FormComponent } from './shared/components/form/form.component';
import { BlogPostComponent } from './shared/components/blog-post/blog-post.component';
import { PostDetailsComponent } from './views/post-details/post-details.component';
import { ChatBotComponent } from './shared/components/chat-bot/chat-bot.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    FormComponent,
    BlogPostComponent,
    PostDetailsComponent,
    ChatBotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,  // Keep FormsModule here for template-driven forms
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-right", 
      preventDuplicates: true,
    }),
  ],
  providers: [],  // You can add services here if needed
  bootstrap: [AppComponent],  // Bootstrap should generally only include the root component
})
export class AppModule {}
