import { Component, OnInit } from "@angular/core";
import { NAVBAR_LINKS, Link, NAVBAR_BUTTONS, ButtonLink } from "./links";
import {
  faHome,
  faInfoCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router"; // Import Router

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  faHome = faHome;
  public links: Link[] = [];
  public buttons: ButtonLink[] = [];

  // Inject the Router in the constructor
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.links = NAVBAR_LINKS;
    this.buttons = NAVBAR_BUTTONS;
  }

  // Method to check if the link is active
  isActive(url: string): boolean {
    return this.router.url === url;
  }
}
