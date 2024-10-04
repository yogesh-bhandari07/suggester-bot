import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http"; // Import HttpClient
import { Router } from "@angular/router"; // Import Router for navigation
import { ToastrService } from "ngx-toastr"; // Import ToastrService

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.registerForm = this.fb.group(
      {
        name: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        phone: ["", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirm_password: ["", Validators.required],
      },
      { validator: this.checkPasswords }
    );
  }

  ngOnInit(): void {}

  checkPasswords(group: FormGroup) {
    const password = group.get("password")!.value;
    const confirmPassword = group.get("confirm_password")!.value;

    return password === confirmPassword ? null : { notSame: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      this.http.post("https://your-api-endpoint/register", formData).subscribe(
        (response) => {
          console.log("User registered successfully", response);
          this.router.navigate(["/login"]);
          this.toastr.error(
            "Please fill in all required fields correctly.",
            "Error"
          );
        },
        (error) => {
          console.error("Registration error", error);
          this.toastr.error(
            "Please fill in all required fields correctly.",
            "Error"
          );
        }
      );
    } else {
      console.log("Form is not valid");
    }
  }
}
