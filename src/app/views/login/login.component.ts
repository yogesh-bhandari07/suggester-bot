import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { environment } from "src/environments/environment";
import { LocalStorageService } from "src/app/core/services/local-storage.service";
import { AuthService } from "src/app/core/services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  private secretKey: string = environment.secretKey;

  loginForm: FormGroup;
  otpForm: FormGroup;
  otpSent = false;
  canResendOtp = false;
  otpTimer: any;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private localStorage: LocalStorageService,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });

    this.otpForm = this.fb.group({
      otp: ["", [Validators.required, Validators.pattern(/^\d{6}$/)]],
    });
  }

  ngOnInit(): void {
    const otpSentTime = this.localStorage.getItem("otpSentTime");
    if (otpSentTime) {
      const currentTime = new Date().getTime();
      const timeDifference = currentTime - parseInt(otpSentTime, 10);
      if (timeDifference < 5 * 60 * 1000) {
        this.otpSent = true;
        this.startOtpTimer(60 - Math.floor(timeDifference / 1000));
      } else {
        this.localStorage.removeItem("otpSentTime");
      }
    }
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.otpSent = true;
      this.toastr.success("OTP sent successfully.");
      this.localStorage.setItem("otpSentTime", new Date().getTime().toString());
      this.startOtpTimer(60);
    }
  }

  startOtpTimer(seconds: number): void {
    this.canResendOtp = false;
    setTimeout(() => {
      this.canResendOtp = true;
    }, seconds * 1000);
  }

  onResendOtp(): void {
    this.canResendOtp = false;
    this.toastr.success("OTP resent successfully.");
    this.localStorage.setItem("otpSentTime", new Date().getTime().toString());
    this.startOtpTimer(60);
  }

  onOtpSubmit(): void {
    if (this.otpForm.valid) {
      this.toastr.success("OTP verified successfully.");
      this.otpSent = false;
      this.otpForm.reset();
      this.localStorage.removeItem("otpSentTime");
      this.localStorage.setItem("authrization", "xyz");
      this.authService.login();
      this.router.navigate(["/home"]);
    }
  }
}
