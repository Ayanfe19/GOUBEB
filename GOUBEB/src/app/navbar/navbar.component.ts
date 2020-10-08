import { Component, OnInit } from "@angular/core";
import { NbSidebarService } from "@nebular/theme";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(private sidebarService: NbSidebarService) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  toggle() {
    this.sidebarService.toggle();
  }
}
