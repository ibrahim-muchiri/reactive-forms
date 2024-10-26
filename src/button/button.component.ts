import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButton } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/legacy';
import { TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, TuiButton, TuiInputModule, TuiTextfieldControllerModule, ReactiveFormsModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() buttonClicked = new EventEmitter<string>();

  createForm = new FormGroup({
    name: new FormControl('Jayb')
  });

  // // Method to clear the input value
  // onClick() {
  //   this.createForm.get('name')?.reset('');  // Clear the form control
  //   this.buttonClicked.emit('');  // Emit cleared value
  // }
}
