import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: false,
  templateUrl: './skill.html',
  styleUrl: './skill.css'
})
export class Skill {
  @Input() skillName!: string;
  isSelected: boolean = false;
}
