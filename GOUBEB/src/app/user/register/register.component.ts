import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  firstName;
  lastName;
  email;
  confirmEmail;
  password;
  confirmPassword;
  userName;
  age;
  address;
  btnnext = true;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(formValues) {
    console.log(formValues);
  }

  onNext() {
    this.btnnext = false;
  }

  onBack() {
    this.btnnext = true;
  }
}
