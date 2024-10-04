import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  otpForm: FormGroup;
  otpSent: boolean = false; // Track whether OTP has been sent

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.otpForm = this.fb.group({
      otp: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onLogin() {
    if (this.loginForm.valid) {
      // Simulate sending OTP
      this.otpSent = true; // Set to true after successful login
      this.toastr.success('OTP has been sent to your email!', 'Success');
    } else {
      this.toastr.error('Please fill in all required fields correctly.', 'Error');
    }
  }

  onOtpSubmit() {
    if (this.otpForm.valid) {
      // Call your API to verify the OTP
      this.toastr.success('Logged in successfully!', 'Success');
    } else {
      this.toastr.error('Please enter a valid OTP.', 'Error');
    }
  }
}
