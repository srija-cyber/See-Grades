import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Assignment2Component } from './assignment-2/assignment-2.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule,Assignment2Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
}
