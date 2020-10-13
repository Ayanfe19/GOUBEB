import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  hidden = false;
  hidden2 = true;

  constructor() {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  onDisplay() {
    this.hidden = true;
    this.hidden2 = false;
    console.log("clicked");
  }

  // tslint:disable-next-line: typedef
  onDisplay2() {
    this.hidden = false;
    this.hidden2 = true;
    console.log("clicked");
  }
}
