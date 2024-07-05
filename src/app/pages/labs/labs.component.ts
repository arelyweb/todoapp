import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  wlc = 'hola';
  tasks = [
    '1',
    '2',
    '3',
    '4'
  ]
  name = 'Arely';
  age = 35;
  disabled = true;
  img = 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png';

  person = {
    name: 'Andrea',
    age: 2,
    avatar:'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'
  }

  clickHandler(){
    alert('Hola');
  }
}
