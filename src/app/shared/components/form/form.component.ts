import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() fields!: any[];

  constructor() {}

  ngOnInit(): void {}

  onFileChange(event: any, controlName: string): void {
    const file = event.target.files[0];
    if (file) {
      this.formGroup.get(controlName)?.setValue(file);
    }
  }
}
